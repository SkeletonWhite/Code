import MediaConstants from '../common/constants/MediaConstants';
import { TabItemModel } from './TabItem';

export function initData(): TabItemModel[] {
  let tabDataArray: TabItemModel[] = [];
  TabItemData.forEach((item: TabItemModel) => {
    tabDataArray.push(new TabItemModel(item.tabItemId, item.tabItemImg, item.tabItemMethod, item?.tabItemText));
  })
  return tabDataArray;
}

const TabItemData: TabItemModel[] = [
  new TabItemModel(0, MediaConstants.SIDETAB_SETTING_ICON, () => {}),
  new TabItemModel(1, MediaConstants.SIDETAB_CALENDAR_ICON, () => {})
]