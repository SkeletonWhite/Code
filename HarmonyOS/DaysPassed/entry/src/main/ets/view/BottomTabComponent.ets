import ColorConstants from '../common/constants/ColorConstants';
import CommonConstants from '../common/constants/CommonConstants';
import MediaConstants from '../common/constants/MediaConstants';
import StyleConstants from '../common/constants/StyleConstants';
import { Calendarpage } from '../pages/CalendarPage';
import { Homepage } from '../pages/HomePage';
import { Settingpage } from '../pages/SettingPage';
import { Summarypage } from '../pages/SummaryPage';
import DividerComponent from './DividerComponent';

@Component
export default struct BottomTabComponent {
  @State currentIndex: number = 0;
  private tabsController: TabsController = new TabsController();

  // 底部导航栏
  @Builder
  tabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      DividerComponent()
      RelativeContainer() {
        Image(this.currentIndex === index ? selectedImg : normalImg)
          .width('36vp')
          .height('36vp')
          .objectFit(ImageFit.Contain)
          .alignRules({
            'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },
            'middle': { 'anchor': '__container__', 'align': HorizontalAlign.Center }
          })
        Text(title)
          .fontSize(StyleConstants.BOTTOM_TAB_FONTSIZE)
          .fontColor(this.currentIndex === index ? ColorConstants.BOTTOM_TAB_FONTCOLOR_BLACK : ColorConstants.BOTTOM_TAB_FONTCOLOR_GREY)
          .alignRules({
            'bottom': { 'anchor': '__container__', 'align': VerticalAlign.Bottom },
            'middle': { 'anchor': '__container__', 'align': HorizontalAlign.Center }
          })
      }
    }
    .onClick(() => {
      this.currentIndex = index;
      this.tabsController.changeIndex(this.currentIndex);
    })
  }

  @Builder
  tabContentBuilder(text: Resource, index: number, selectedImg: Resource, normalImg: Resource) {
    TabContent() {
      if (this.currentIndex == CommonConstants.BOTTOM_TAB_INDEX_ZERO) {
        Homepage();
      } else if (this.currentIndex == CommonConstants.BOTTOM_TAB_INDEX_ONE) {
        Calendarpage();
      } else if (this.currentIndex == CommonConstants.BOTTOM_TAB_INDEX_TWO) {
        Summarypage();
      } else if (this.currentIndex == CommonConstants.BOTTOM_TAB_INDEX_THREE) {
        Settingpage();
      }
    }
    .tabBar(this.tabBuilder(text, index, selectedImg, normalImg))
  }

  build() {
    Tabs({
      barPosition: BarPosition.End,
      controller: this.tabsController,
    }) {
      // 主页
      this.tabContentBuilder(
        CommonConstants.BOTTOM_TAB_HOMEPAGE,
        CommonConstants.BOTTOM_TAB_INDEX_ZERO,
        MediaConstants.BOTTOM_TAB_HOMEPAGE_BLACK,
        MediaConstants.BOTTOM_TAB_HOMEPAGE_GREY
      )
      // 日历
      this.tabContentBuilder(
        CommonConstants.BOTTOM_TAB_CALENDAR,
        CommonConstants.BOTTOM_TAB_INDEX_ONE,
        MediaConstants.BOTTOM_TAB_CALENDAR_BLACK,
        MediaConstants.BOTTOM_TAB_CALENDAR_GREY
      )
      // 统计
      this.tabContentBuilder(
        CommonConstants.BOTTOM_TAB_SUMMARY,
        CommonConstants.BOTTOM_TAB_INDEX_TWO,
        MediaConstants.BOTTOM_TAB_SUMMARY_BLACK,
        MediaConstants.BOTTOM_TAB_SUMMARY_GREY
      )
      // 设置
      this.tabContentBuilder(
        CommonConstants.BOTTOM_TAB_SETTING,
        CommonConstants.BOTTOM_TAB_INDEX_THREE,
        MediaConstants.BOTTOM_TAB_SETTING_BLACK,
        MediaConstants.BOTTOM_TAB_SETTING_GREY
      )
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.TAB_HEIGHT)
    .barHeight(StyleConstants.BOTTOM_TAB_HEIGHT)
    .barMode(BarMode.Fixed)
    .onAnimationStart((index: number, targetIndex: number) => {
      this.currentIndex = targetIndex;
    })
    .animationDuration(0)
  }
}