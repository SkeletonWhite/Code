import ColorConstants from '../common/constants/ColorConstants';
import StyleConstants from '../common/constants/StyleConstants';
import BottomTabComponent from '../view/BottomTabComponent';

@Entry
@Component
struct Index {
  build() {
    Column() {
      BottomTabComponent()
    }
    .height(StyleConstants.FULL_HEIGHT)
    .width(StyleConstants.FULL_WIDTH)
    .backgroundColor(ColorConstants.BACKGROUND_COLOR_LIGHT)
  }
}