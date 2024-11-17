import { router } from '@kit.ArkUI';
import ColorConstants from '../common/constants/ColorConstants';
import CommonConstants from '../common/constants/CommonConstants';
import MediaConstants from '../common/constants/MediaConstants';
import StyleConstants from '../common/constants/StyleConstants';

@Extend(Image)
function iconStyle(iconSize:Resource) {
  .height(iconSize)
  .width(iconSize)
  .margin({
    left: StyleConstants.TITLE_BAR_ICON_MARGIN,
    right: StyleConstants.TITLE_BAR_ICON_MARGIN
  })
}

/**
 * 标题栏组件
 */
@Component
export default struct TitleBarComponent {
  // 特殊按钮返回
  isBack: boolean = CommonConstants.BOOLEAN_FALSE;
  // 特殊按钮回到今天
  isToday: boolean = CommonConstants.BOOLEAN_FALSE;
  // 回到今天的函数
  backtodayMethod: (event:ClickEvent)=>void = ()=>{}
  // 按钮通用大小
  iconSize: Resource = StyleConstants.TITLE_BAR_ICON_SIZE;
  // 标题
  @Prop title: Resource | string = CommonConstants.EMPTY;
  titleSize: Resource | string = StyleConstants.TITLE_BAR_FONTSIZE;
  // 按钮1
  isTool1: boolean = CommonConstants.BOOLEAN_FALSE;
  tool1Icon: Resource = CommonConstants.EMPTY;
  tool1Method: (event:ClickEvent)=>void = ()=>{};
  // 按钮2
  isTool2: boolean = CommonConstants.BOOLEAN_FALSE;
  tool2Icon: Resource = CommonConstants.EMPTY;
  tool2Method: (event:ClickEvent)=>void = ()=>{};
  // 按钮3
  isTool3: boolean = CommonConstants.BOOLEAN_FALSE;
  tool3Icon: Resource = CommonConstants.EMPTY;
  tool3Method: (event:ClickEvent)=>void = ()=>{};
  // 按钮4
  isTool4: boolean = CommonConstants.BOOLEAN_FALSE;
  tool4Icon: Resource = CommonConstants.EMPTY;
  tool4Method: (event:ClickEvent)=>void = ()=>{};

  @State
  backtodayFontcolor: Resource = ColorConstants.CALENDAR_BACKTODAY_FONTCOLOR_RELEASED;

  @Builder
  titleButtonBuilder(
    image: Resource,
    method: (event:ClickEvent)=>void
  ){
    Image(image)
      .iconStyle(this.iconSize)
      .onClick(method)
  }

  build() {
    RelativeContainer() {
      Column() {
        Row() {
          // 是否有返回按钮或者回到今天按钮
          if (this.isBack) {
            this.titleButtonBuilder(
              MediaConstants.TITLE_BAR_BACK,
              () => router.back()
            )
          } else if (this.isToday) {
            Text(CommonConstants.CALENDAR_BACKTODAY)
              .fontSize(StyleConstants.CALENDAR_BACKTODAY_FONTSIZE)
              .opacity(StyleConstants.CALENDAR_BACKTODAY_OPACITY)
              .fontColor(this.backtodayFontcolor)
              .margin({
                left: StyleConstants.TITLE_BAR_ICON_MARGIN,
                right: StyleConstants.TITLE_BAR_ICON_MARGIN
              })
              .onFocus(()=>{
                this.backtodayFontcolor = ColorConstants.CALENDAR_BACKTODAY_FONTCOLOR_TOUCHED;
              })
              .onBlur(()=>{
                this.backtodayFontcolor = ColorConstants.CALENDAR_BACKTODAY_FONTCOLOR_RELEASED;
              })
              .onClick(this.backtodayMethod)
          }
          if (this.isTool1) {
            this.titleButtonBuilder(
              this.tool1Icon,
              this.tool1Method
            )
          }

          if (this.isTool2) {
            this.titleButtonBuilder(
              this.tool2Icon,
              this.tool2Method
            )
          }
        }
      }
      .alignRules({
        'left': { 'anchor': '__container__', 'align': HorizontalAlign.Start },
        'center': { 'anchor': '__container__', 'align': VerticalAlign.Center }
      })

      // 标题
      Column() {
        Text(this.title)
          .fontColor(ColorConstants.TITLE_BAR_FONTCOLOR_LIGHT)
          .fontSize(this.titleSize)
          .fontWeight(FontWeight.Medium)
          .padding({ left : StyleConstants.TITLE_BAR_LETTER_SPACING })
          .letterSpacing(StyleConstants.TITLE_BAR_LETTER_SPACING)
      }
      .alignRules({
        'middle': { 'anchor': '__container__', 'align': HorizontalAlign.Center },
        'center': { 'anchor': '__container__', 'align': VerticalAlign.Center }
      })

      // 是否有按钮3,4
      Column() {
        if (this.isTool3){
          Row() {
            this.titleButtonBuilder(
              this.tool3Icon,
              this.tool3Method
            )

            if (this.isTool4) {
              this.titleButtonBuilder(
                this.tool4Icon,
                this.tool4Method
              )
            }
          }
          .direction(Direction.Rtl)
        }
      }
      .alignRules({
        'right': { 'anchor': '__container__', 'align': HorizontalAlign.End },
        'center': { 'anchor': '__container__', 'align': VerticalAlign.Center }
      })
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.TITLE_BAR_HEIGHT)
    .backgroundColor(ColorConstants.BACKGROUND_COLOR_LIGHT)
  }
}
