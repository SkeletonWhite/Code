import CommonConstants from "../common/constants/CommonConstants";
import StyleConstants from "../common/constants/StyleConstants";
import { SETTINGS_DATA } from "../data/SourceData";
import DividerComponent from "../view/DividerComponent";
import TitleBarComponent from "../view/TitleBarComponent";
import SettingItemData from "../viewmodel/SettingItemData";

@Entry
export struct Settingpage {
  settingListArr: Array<SettingItemData> = [];
  private scrollerForScroll: Scroller = new Scroller();
  private scrollerForList: Scroller = new Scroller();

  settingListArrInit() {

  }

  aboutToAppear() {
    this.settingListArrInit();
  }

  build() {
    Column() {
      TitleBarComponent({ title: CommonConstants.TITLE_BAR_SETTING })
      DividerComponent()
      Stack({ alignContent: Alignment.Top }) {
        Scroll(this.scrollerForScroll) {
          Column() {
            List({ space: StyleConstants.LIST_SPACE, scroller: this.scrollerForList }) {
              ForEach(this.settingListArr, (item: SettingItem) => {
                ListItem() {
                  Row() {
                    Image(item.image)
                    Text(item.str)
                      .fontSize('16fp')
                      // .fontWeight(StyleConstants.FONT_WEIGHT_FIVE)
                      .fontWeight(500)
                  }
                  .padding({ left: '12vp' })
                  .backgroundColor(Color.White)
                  .width(StyleConstants.FULL_WIDTH)
                  .height(StyleConstants.FULL_HEIGHT)
                  .borderRadius('24vp')
                }
                .width(StyleConstants.FULL_WIDTH)
                .height('56vp')
              }, (item: string) => JSON.stringify(item))
            }
            .padding({
              left: '10vp',
              right: '10vp'
            })
            .width(StyleConstants.FULL_WIDTH)
            .height(StyleConstants.FULL_HEIGHT)
            .edgeEffect(EdgeEffect.None)
            .scrollBar(BarState.Off)
            .nestedScroll({
              scrollForward: NestedScrollMode.PARENT_FIRST,
              scrollBackward: NestedScrollMode.SELF_FIRST
            })
          }
        }
        .scrollBar(BarState.Off)
        .width(StyleConstants.FULL_WIDTH)
        .height(StyleConstants.FULL_HEIGHT)
      }
      .width(StyleConstants.FULL_WIDTH)
      .height(StyleConstants.FULL_HEIGHT)
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
  }
}