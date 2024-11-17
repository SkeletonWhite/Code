import CommonConstants from "../common/constants/CommonConstants"
import DividerComponent from "../view/DividerComponent"
import TitleBarComponent from "../view/TitleBarComponent"

@Entry
export struct Homepage {
  build() {
    Column() {
      TitleBarComponent({
        title: CommonConstants.TITLE_BAR_HOMEPAGE,
        isTool3: CommonConstants.BOOLEAN_TRUE,
        tool3Icon: $r("app.media.ic_public_add_black"),
        isTool4: CommonConstants.BOOLEAN_TRUE,
        tool4Icon: $r('app.media.ic_public_scan_black'),
      })
      DividerComponent()
    }
    .height('100%')
    .width('100%')
  }
}