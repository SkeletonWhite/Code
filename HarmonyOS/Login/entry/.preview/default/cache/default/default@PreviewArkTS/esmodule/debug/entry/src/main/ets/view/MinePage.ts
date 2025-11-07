if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Item_Params {
    item?: ItemData;
    itemCellImage?: Resource;
    itemCellTitle?: Resource;
    itemCellOthers?: Resource;
    itemClickPrompt?: Resource;
}
interface MineListView_Params {
}
interface MineTitleView_Params {
}
interface MinePage_Params {
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import CommonUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/CommonUtils";
import type ItemData from '../viewmodel/ItemData';
import mainViewModel from "@bundle:com.huawei.logindemo/entry/ets/viewmodel/MainViewModel";
import Logger from "@bundle:com.huawei.logindemo/entry/ets/common/utils/Logger";
export default class MinePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MinePage_Params) {
    }
    updateStateVars(params: MinePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: StyleConstants.COLUMNS_SM,
                    md: StyleConstants.COLUMNS_MD,
                    lg: StyleConstants.COLUMNS_LG
                },
                gutter: {
                    x: StyleConstants.GRID_GUTTER
                }
            });
            GridRow.debugLine("entry/src/main/ets/view/MinePage.ets(26:5)", "entry");
            GridRow.backgroundColor({ "id": 16777292, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: StyleConstants.SPAN_SM,
                    md: StyleConstants.SPAN_MD,
                    lg: StyleConstants.SPAN_LG
                }, offset: {
                    md: StyleConstants.OFFSET_MD,
                    lg: StyleConstants.OFFSET_LG
                }
            });
            GridCol.debugLine("entry/src/main/ets/view/MinePage.ets(36:7)", "entry");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/MinePage.ets(46:9)", "entry");
            Column.height(StyleConstants.FULL_PARENT);
            Column.padding({
                left: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                right: { "id": 16777356, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777257, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/MinePage.ets(47:11)", "entry");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777319, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777371, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Mine title component
                    MineTitleView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/MinePage.ets", line: 53, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MineTitleView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Mine list component
                    MineListView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/MinePage.ets", line: 55, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MineListView" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/view/MinePage.ets(56:11)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777250, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/view/MinePage.ets(57:11)", "entry");
            Button.width(StyleConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.fontColor({ "id": 16777298, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777301, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.margin({ bottom: { "id": 16777353, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Button.onClick(() => this.logout());
        }, Button);
        Button.pop();
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    /**
     * Log out
     */
    logout() {
        Logger.info(CommonConstants.TAG_MINE_PAGE, 'Logout');
        CommonUtils.routerPage(CommonConstants.LOGIN_PAGE_URL);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class MineTitleView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MineTitleView_Params) {
    }
    updateStateVars(params: MineTitleView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/MinePage.ets(90:5)", "entry");
            Row.alignItems(VerticalAlign.Center);
            Row.width(StyleConstants.FULL_PARENT);
            Row.height({ "id": 16777361, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.padding({ left: { "id": 16777363, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Row.borderRadius({ "id": 16777372, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Row.margin({
                top: { "id": 16777314, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777313, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777381, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/MinePage.ets(91:7)", "entry");
            Image.width({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/MinePage.ets(94:7)", "entry");
            Column.margin({ left: { "id": 16777362, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777260, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/MinePage.ets(95:9)", "entry");
            Text.fontSize({ "id": 16777373, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777259, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/MinePage.ets(97:9)", "entry");
            Text.fontSize({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777360, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class MineListView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MineListView_Params) {
    }
    updateStateVars(params: MineListView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/view/MinePage.ets(121:5)", "entry");
            List.width(StyleConstants.FULL_PARENT);
            List.backgroundColor(Color.White);
            List.divider({
                strokeWidth: { "id": 16777340, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                color: { "id": 16777295, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                startMargin: { "id": 16777339, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                endMargin: { "id": 16777337, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            List.borderRadius({ "id": 16777359, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            List.padding({
                top: { "id": 16777358, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777358, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.height({ "id": 16777357, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        ListItem.debugLine("entry/src/main/ets/view/MinePage.ets(123:9)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new Item(this, { item: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/MinePage.ets", line: 124, col: 11 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            item: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "Item" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getMineListData(), forEachItemGenFunction, (item: ItemData) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class Item extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = undefined;
        this.itemCellImage = undefined;
        this.itemCellTitle = undefined;
        this.itemCellOthers = undefined;
        this.itemClickPrompt = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Item_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.itemCellImage !== undefined) {
            this.itemCellImage = params.itemCellImage;
        }
        if (params.itemCellTitle !== undefined) {
            this.itemCellTitle = params.itemCellTitle;
        }
        if (params.itemCellOthers !== undefined) {
            this.itemCellOthers = params.itemCellOthers;
        }
        if (params.itemClickPrompt !== undefined) {
            this.itemClickPrompt = params.itemClickPrompt;
        }
    }
    updateStateVars(params: Item_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item?: ItemData;
    private itemCellImage?: Resource;
    private itemCellTitle?: Resource;
    private itemCellOthers?: Resource;
    private itemClickPrompt?: Resource;
    aboutToAppear() {
        if (this.item) {
            Logger.info(CommonConstants.TAG_LIST_ITEM, 'item = ' + JSON.stringify(this.item));
            this.itemCellImage = this.item.img;
            this.itemCellTitle = this.item.title;
            this.itemCellOthers = this.item.others;
            this.itemClickPrompt = this.item.clickPrompt;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/MinePage.ets(164:5)", "entry");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(StyleConstants.FULL_PARENT);
            Row.padding({
                left: { "id": 16777354, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                right: { "id": 16777354, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Row.onClick(() => {
                if (this.itemCellOthers === null && this.itemClickPrompt) {
                    CommonUtils.showToastContent(this.itemClickPrompt);
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: StyleConstants.COMMON_SPACE });
            Row.debugLine("entry/src/main/ets/view/MinePage.ets(165:7)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.itemCellImage) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.itemCellImage);
                        Image.debugLine("entry/src/main/ets/view/MinePage.ets(167:11)", "entry");
                        Image.width({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.height({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.itemCellTitle);
            Text.debugLine("entry/src/main/ets/view/MinePage.ets(171:9)", "entry");
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.itemCellOthers === undefined) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777306, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/view/MinePage.ets(176:9)", "entry");
                        Image.width({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.height({ "id": 16777351, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Toggle.create({ type: ToggleType.Switch, isOn: false });
                        Toggle.debugLine("entry/src/main/ets/view/MinePage.ets(180:9)", "entry");
                        Toggle.onChange((isChange: boolean) => {
                            let change: Resource = isChange ? { "id": 16777277, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777230, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" };
                            CommonUtils.showToastContent(change);
                        });
                    }, Toggle);
                    Toggle.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(2, "MineTitleView", new MineTitleView(undefined, {}), "MineListView", new MineListView(undefined, {}));
    previewComponent();
}
else {
}
