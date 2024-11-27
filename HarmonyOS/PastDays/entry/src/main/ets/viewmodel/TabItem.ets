export class TabItemModel {
  tabItemId: number;
  tabItemImg: Resource;
  tabItemMethod: (event:ClickEvent) => void;
  tabItemText?: string | Resource;

  constructor(tabItemId: number, tabItemImg: Resource, tabItemMethod: (event:ClickEvent) => void, tabItemText?: string | Resource) {
    this.tabItemId = tabItemId;
    this.tabItemImg = tabItemImg;
    this.tabItemMethod = tabItemMethod;
    this.tabItemText = tabItemText;
  }
}