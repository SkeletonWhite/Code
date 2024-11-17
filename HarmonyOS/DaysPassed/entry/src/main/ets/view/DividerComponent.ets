import ColorConstants from "../common/constants/ColorConstants";
import StyleConstants from "../common/constants/StyleConstants";

/**
 * 分隔线组件
 */
@Component
export default struct DividerComponent {
  d_color: Color = ColorConstants.DIVIDER_LIGHT_MODE;
  d_width: string = StyleConstants.DIVIDER_WIDTH;
  d_strokeWidth: string = StyleConstants.DIVIDER_STROKEWIDTH;

  build() {
    Column() {
      Divider()
        .color(this.d_color)
        .width(this.d_width)
        .strokeWidth(this.d_strokeWidth)
    }
  }
}