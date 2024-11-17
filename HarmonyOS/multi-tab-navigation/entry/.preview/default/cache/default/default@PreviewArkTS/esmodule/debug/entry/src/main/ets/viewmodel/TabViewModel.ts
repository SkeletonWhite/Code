import { TabItem, BottomTabModel, ClassifyModel } from "@bundle:com.example.multitabs/entry/ets/viewmodel/TabItem";
export function initTabData(): TabItem[] {
    let tabDataArray: TabItem[] = [];
    TabItemData.forEach((item: TabItem) => {
        tabDataArray.push(new TabItem(item.id, item.name));
    });
    return tabDataArray;
}
export function initTabTuData(): BottomTabModel[] {
    let tabTuDataArray: BottomTabModel[] = [];
    TabTuItemData.forEach((item: BottomTabModel) => {
        tabTuDataArray.push(new BottomTabModel(item.defaultImage, item.selectImage, item.title, item.middleMode));
    });
    return tabTuDataArray;
}
export function initSideData(): ClassifyModel[] {
    let tabDataArray: ClassifyModel[] = [];
    ClassifyData.forEach((item: ClassifyModel) => {
        tabDataArray.push(new ClassifyModel(item.classifyId, item.classifyName));
    });
    return tabDataArray;
}
const TabItemData: TabItem[] = [
    new TabItem(0, { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(1, { "id": 16777257, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(2, { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(3, { "id": 16777251, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(4, { "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(5, { "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(6, { "id": 16777248, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(7, { "id": 16777247, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new TabItem(8, { "id": 16777284, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" })
];
const TabTuItemData: BottomTabModel[] = [
    new BottomTabModel({ "id": 16777290, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777452, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777265, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new BottomTabModel({ "id": 16777464, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777468, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new BottomTabModel({ "id": 16777454, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777454, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, '', true),
    new BottomTabModel({ "id": 16777463, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777292, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new BottomTabModel({ "id": 16777444, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777443, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777267, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" })
];
const ClassifyData: ClassifyModel[] = [
    new ClassifyModel(0, { "id": 16777256, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new ClassifyModel(1, { "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new ClassifyModel(2, 'HarmonyOS'),
    new ClassifyModel(3, { "id": 16777286, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new ClassifyModel(4, { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new ClassifyModel(5, { "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }),
    new ClassifyModel(6, { "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" })
];
