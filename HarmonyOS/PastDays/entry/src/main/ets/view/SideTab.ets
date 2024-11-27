import ColorConstants from '../common/constants/ColorConstants';
import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import { initData } from '../viewmodel/SideTabViewModel';
import { TabItemModel } from '../viewmodel/TabItem';

@Component
export struct SideTab {
  @State currentItem: number = 0;
  @State TabItemArray: Array<TabItemModel> = initData();
  private Scroller: Scroller = new Scroller();

  @Builder
  tabItemBuilder(
    img: Resource | undefined,
    onClickAction: (event:ClickEvent) => void)
  {
    Image(img)
      .width(StyleConstants.HALF_WIDTH)
      .margin({ bottom: StyleConstants.TABITEMBUILDER_MARGIN_BOTTOM })
      .onClick(onClickAction)
  }

  build() {
    Column() {
      List({ scroller: this.Scroller }) {
        ForEach(this.TabItemArray, (item: TabItemModel, index?: number) => {
          ListItem() {
            this.tabItemBuilder(
              item.tabItemImg,
              item.tabItemMethod
            )
          }
        }, (item: TabItemModel, index: number) => JSON.stringify(item) + index)
      }
      .width(StyleConstants.SIDETAB_WIDTH)
      .height(StyleConstants.FULL_HEIGHT)
      .alignListItem(ListItemAlign.Center)
      .padding({ top: `${AppStorage.get('statusBarHeight')}`, bottom: `${AppStorage.get('naviIndicatorHeight')}` })
      .backgroundColor(ColorConstants.SIDETAB_BACKGROUND_COLOR)
      .scrollBar(BarState.Off)
    }
  }
}