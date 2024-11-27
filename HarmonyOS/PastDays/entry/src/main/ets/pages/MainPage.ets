import ColorConstants from '../common/constants/ColorConstants';
import StyleConstants from '../common/constants/StyleConstants';
import { WindowUtil } from '../common/utils/WindowUtil';
import { SideTab } from '../view/SideTab';

@Entry
@Component
struct MainPage {
  build() {
    Row() {
      SideTab()
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
    .backgroundColor(ColorConstants.APP_BACKGROUND_COLOR)
  }
}