import CommonConstants from "../common/constants/CommonConstants"
import StyleConstants from "../common/constants/StyleConstants";
import DividerComponent from "../view/DividerComponent"
import TitleBarComponent from "../view/TitleBarComponent"
import { i18n } from '@kit.LocalizationKit';
import ColorConstants from "../common/constants/ColorConstants";

const WEEK_TITLE = [$r('app.string.monday'), $r('app.string.tuesday'), $r('app.string.wednesday'),
  $r('app.string.thursday'), $r('app.string.friday'), $r('app.string.saturday'),
  $r('app.string.sunday')];

interface Day {
  isCurrentMonth: boolean,
  isToday: boolean,
  date: number
};

@Entry
export struct Calendarpage {
  @State currentYear: number = 0;
  @State @Watch('refreshData') currentMonth: number = 0;
  @State daysData: Day[] = [];
  private calendar = i18n.getCalendar('en-US');
  private toDayY: number = this.calendar.get('year');
  private toDayM: number = this.calendar.get('month');
  private toDayD: number = this.calendar.get('date');

  refreshData() {
    this.daysData = [];
    this.calendar.set(this.currentYear, this.currentMonth, 1);
    let currentMonthStartWeek = this.calendar.get('day_of_week');
    let currentMonthJulianDay = this.calendar.get('julian_day');
    let preYear = this.currentMonth - 1 >= 0 ? this.currentYear : this.currentYear - 1;
    let preMonth = this.currentMonth - 1 >= 0 ? this.currentMonth - 1 : 11;
    this.calendar.set(preYear, preMonth, 1);
    let preMonthJulianDay = this.calendar.get('julian_day');
    let nextYear = this.currentMonth + 1 < 12 ? this.currentYear : this.currentYear + 1;
    let nextMonth = this.currentMonth + 1 < 12 ? this.currentMonth + 1 : 0;
    this.calendar.set(nextYear, nextMonth, 1);
    let nextMonthJulianDay = this.calendar.get('julian_day');
    let preMonthDays = currentMonthJulianDay - preMonthJulianDay;
    let currentMonthDays = nextMonthJulianDay - currentMonthJulianDay;
    this.calendar.set(this.currentYear, this.currentMonth, currentMonthDays);
    let currentMonthEndWeek = this.calendar.get('day_of_week');
    for (let index = preMonthDays - ((currentMonthStartWeek + 5) % 7) + 1; index <= preMonthDays; index++) {
      this.daysData.push({
        isCurrentMonth: false,
        isToday: false,
        date: index
      })
    }
    for (let index = 1; index <= currentMonthDays; index++) {
      this.daysData.push({
        isCurrentMonth: true,
        isToday: this.toDayY === this.currentYear && this.toDayM === this.currentMonth && index === this.toDayD,
        date: index
      })
    }
    for (let index = 1; index <= (8 - currentMonthEndWeek) % 7; index++) {
      this.daysData.push({
        isCurrentMonth: false,
        isToday: false,
        date: index
      })
    }
  }

  aboutToAppear() {
    this.currentYear = this.toDayY;
    this.currentMonth = this.toDayM;
    this.refreshData();
  }

  build() {
    Column() {
      TitleBarComponent({
        isToday: CommonConstants.BOOLEAN_TRUE,
        iconSize: StyleConstants.TITLE_BAR_ICON_SIZE_SMALLER,
        title: `${this.currentYear}年${this.currentMonth + 1}月`,
        titleSize: StyleConstants.TITLE_BAR_FONTSIZE_SMALLER,
        backtodayMethod: () => {
          if (this.currentYear === this.toDayY && this.currentMonth === this.toDayM) {
            return;
          }
          this.currentYear = this.toDayY;
          this.currentMonth = this.toDayM;
        },
        isTool3: CommonConstants.BOOLEAN_TRUE,
        tool3Icon: $r("app.media.ic_public_next_black"),
        tool3Method: () => {
          this.currentYear = this.currentMonth + 1 < 12 ? this.currentYear : this.currentYear + 1;
          this.currentMonth = this.currentMonth + 1 < 12 ? this.currentMonth + 1 : 0;
        },
        isTool4: CommonConstants.BOOLEAN_TRUE,
        tool4Icon: $r('app.media.ic_public_last_black'),
        tool4Method: () => {
          this.currentYear = this.currentMonth - 1 >= 0 ? this.currentYear : this.currentYear - 1;
          this.currentMonth = this.currentMonth - 1 >= 0 ? this.currentMonth - 1 : 11;
        }
      })
      DividerComponent()
      Column() {
        // 星期 Week day
        Flex({ justifyContent: FlexAlign.SpaceBetween }) {
          ForEach(WEEK_TITLE, (week: Resource) => {
            Text(week)
              .fontSize(StyleConstants.CALENDAR_WEEK_DAY_FONTSIZE)
              .fontColor(ColorConstants.CALENDAR_WEEK_DAY_FONTCOLOR_LIGHT)
              .opacity(StyleConstants.CALENDAR_WEEK_DAY_FONT_OPACITY)
              .height(StyleConstants.CALENDAR_WEEK_DAY_TEXT_HEIGHT)
              .width(StyleConstants.CALENDAR_WEEK_DAY_TEXT_WIDTH)
              .textAlign(TextAlign.Center)
          })
        }
        .width(StyleConstants.FULL_WIDTH)
        .margin({ top: StyleConstants.CALENDAR_WEEK_DAY_MARGINTOP })

        // 日期 Date day
        Flex({ wrap: FlexWrap.Wrap }) {
          ForEach(WEEK_TITLE, (item: Resource, index) => {
            Flex({ justifyContent: FlexAlign.SpaceBetween }) {
              ForEach(this.daysData.slice(index * WEEK_TITLE.length, (index + 1) * WEEK_TITLE.length), (day: Day) => {
                Text(`${day.date}`)
                  .height(StyleConstants.CALENDAR_DATE_DAY_TEXT_HEIGHT)
                  .width(StyleConstants.CALENDAR_DATE_DAY_TEXT_WIDTH)
                  .textAlign(TextAlign.Center)
                  .fontSize(StyleConstants.CALENDAR_DATE_DAY_FONTSIZE)
                  .fontColor(day.isToday ? Color.White : Color.Black)
                  .backgroundColor(day.isToday ? Color.Blue : '')
                  .borderRadius(StyleConstants.CALENDAR_DATE_DAY_BORDERRADIUS)
                  .opacity(day.isCurrentMonth ? 1.0 : 0.2)
              })
            }
            .width(StyleConstants.FULL_WIDTH)
            .margin({ top: StyleConstants.CALENDAR_DATE_DAY_MARGINTOP })
          })
        }
        .width(StyleConstants.FULL_WIDTH)
      }
      .width(StyleConstants.FULL_WIDTH)
      .padding({ left: StyleConstants.CALENDAR_DAY_PADDING, right: StyleConstants.CALENDAR_DAY_PADDING })
      DividerComponent({d_color:ColorConstants.DIVIDER_DARK_MODE,d_width:'90%'})
    }
    .height(StyleConstants.FULL_HEIGHT)
    .width(StyleConstants.FULL_WIDTH)
  }

}