if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ImageItemView_Params {
    secondItem?: ItemData;
    listItemImage?: Resource;
    listItemTitle?: Resource;
    listItemOthers?: Resource;
}
interface GridItemView_Params {
    item?: ItemData;
    gridItemImg?: Resource;
    gridItemTitle?: Resource;
    gridItemPrompt?: Resource;
}
interface ListImageView_Params {
    currentDeviceSize?: string;
}
interface CenterGridView_Params {
}
interface SwiperView_Params {
    currentDeviceSize?: string;
}
interface HomePage_Params {
    currentDeviceSize?: string;
}
import mainViewModel from "@bundle:com.huawei.logindemo/entry/ets/viewmodel/MainViewModel";
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import CommonUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/CommonUtils";
import type ItemData from '../viewmodel/ItemData';
export default class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
    }
    updateStateVars(params: HomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/view/HomePage.ets(27:5)", "entry");
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(28:7)", "entry");
            Column.width(StyleConstants.FULL_PARENT);
            Column.backgroundColor({ "id": 16777292, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/HomePage.ets(29:9)", "entry");
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777319, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin({
                left: this.currentDeviceSize === CommonConstants.LG ? { "id": 16777318, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Swiper component
                    SwiperView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePage.ets", line: 39, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SwiperView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Center grid component
                    CenterGridView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePage.ets", line: 41, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "CenterGridView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // List image component
                    ListImageView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePage.ets", line: 43, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ListImageView" });
        }
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SwiperView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SwiperView_Params) {
    }
    updateStateVars(params: SwiperView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(58:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("entry/src/main/ets/view/HomePage.ets(59:7)", "entry");
            Swiper.displayCount(CommonConstants.SWIPER_CACHE_COUNT);
            Swiper.autoPlay(true);
            Swiper.width(StyleConstants.COMMON_WIDTH);
            Swiper.itemSpace(this.currentDeviceSize === CommonConstants.SM ?
                0 : StyleConstants.ITEM_SPACE);
            Swiper.margin({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Swiper.displayCount(this.currentDeviceSize === CommonConstants.SM ?
                StyleConstants.SWIPER_COUNT_ONE :
                (this.currentDeviceSize === CommonConstants.MD ?
                    StyleConstants.SWIPER_COUNT_TWO : StyleConstants.SWIPER_COUNT_THREE));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.debugLine("entry/src/main/ets/view/HomePage.ets(61:11)", "entry");
                    Image.borderRadius({ "id": 16777369, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                    Image.syncLoad(true);
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, (item: Resource) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class CenterGridView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CenterGridView_Params) {
    }
    updateStateVars(params: CenterGridView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(84:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/view/HomePage.ets(85:7)", "entry");
            Grid.columnsTemplate(StyleConstants.GRID_COLUMNS);
            Grid.rowsTemplate(StyleConstants.GRID_ROWS);
            Grid.columnsGap({ "id": 16777323, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.rowsGap({ "id": 16777324, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.height(StyleConstants.HOME_GRID_HEIGHT);
            Grid.backgroundColor(Color.White);
            Grid.borderRadius({ "id": 16777328, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Grid.padding({
                top: { "id": 16777327, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777327, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Grid.width(StyleConstants.COMMON_WIDTH);
            Grid.margin({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/view/HomePage.ets(87:11)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new GridItemView(this, { item: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePage.ets", line: 88, col: 13 });
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
                            }, { name: "GridItemView" });
                        }
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getCenterGridData(), forEachItemGenFunction, (item: ItemData) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ListImageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListImageView_Params) {
    }
    updateStateVars(params: ListImageView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(115:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/HomePage.ets(116:7)", "entry");
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.alignSelf(ItemAlign.Start);
            Text.margin({
                left: { "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: StyleConstants.IMAGE_LIST_SPACE });
            List.debugLine("entry/src/main/ets/view/HomePage.ets(125:7)", "entry");
            List.width(StyleConstants.COMMON_WIDTH);
            List.margin({ "id": 16777317, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            List.lanes(this.currentDeviceSize === CommonConstants.SM ?
                StyleConstants.LIST_COLUMN_TWO :
                (this.currentDeviceSize === CommonConstants.MD ?
                    StyleConstants.LIST_COLUMN_THREE : StyleConstants.LIST_COLUMN_FOUR));
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const secondItem = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.margin({ right: { "id": 16777338, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
                        ListItem.borderRadius({ "id": 16777331, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        ListItem.onClick(() => {
                            if (!secondItem?.clickPrompt) {
                                return;
                            }
                            CommonUtils.showToastContent(secondItem.clickPrompt);
                        });
                        ListItem.debugLine("entry/src/main/ets/view/HomePage.ets(127:11)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ImageItemView(this, { secondItem: secondItem }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomePage.ets", line: 128, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            secondItem: secondItem
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "ImageItemView" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getListImageData(), forEachItemGenFunction, (secondItem: ItemData) => JSON.stringify(secondItem.id), false, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class GridItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = undefined;
        this.gridItemImg = undefined;
        this.gridItemTitle = undefined;
        this.gridItemPrompt = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GridItemView_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.gridItemImg !== undefined) {
            this.gridItemImg = params.gridItemImg;
        }
        if (params.gridItemTitle !== undefined) {
            this.gridItemTitle = params.gridItemTitle;
        }
        if (params.gridItemPrompt !== undefined) {
            this.gridItemPrompt = params.gridItemPrompt;
        }
    }
    updateStateVars(params: GridItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item?: ItemData;
    private gridItemImg?: Resource;
    private gridItemTitle?: Resource;
    private gridItemPrompt?: Resource;
    aboutToAppear() {
        if (this.item !== undefined) {
            this.gridItemImg = this.item.img;
            this.gridItemTitle = this.item.title;
            this.gridItemPrompt = this.item.clickPrompt;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(166:5)", "entry");
            Column.onClick(() => {
                if (!this.gridItemPrompt) {
                    return;
                }
                CommonUtils.showToastContent(this.gridItemPrompt);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.gridItemImg) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.gridItemImg);
                        Image.debugLine("entry/src/main/ets/view/HomePage.ets(168:9)", "entry");
                        Image.width({ "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.height({ "id": 16777326, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Image.syncLoad(true);
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
            If.create();
            if (this.gridItemTitle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.gridItemTitle);
                        Text.debugLine("entry/src/main/ets/view/HomePage.ets(174:9)", "entry");
                        Text.fontSize({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                        Text.margin({ top: { "id": 16777325, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ImageItemView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.secondItem = undefined;
        this.listItemImage = undefined;
        this.listItemTitle = undefined;
        this.listItemOthers = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImageItemView_Params) {
        if (params.secondItem !== undefined) {
            this.secondItem = params.secondItem;
        }
        if (params.listItemImage !== undefined) {
            this.listItemImage = params.listItemImage;
        }
        if (params.listItemTitle !== undefined) {
            this.listItemTitle = params.listItemTitle;
        }
        if (params.listItemOthers !== undefined) {
            this.listItemOthers = params.listItemOthers;
        }
    }
    updateStateVars(params: ImageItemView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private secondItem?: ItemData;
    private listItemImage?: Resource;
    private listItemTitle?: Resource;
    private listItemOthers?: Resource;
    aboutToAppear() {
        if (this.secondItem !== undefined) {
            this.listItemImage = this.secondItem.img;
            this.listItemTitle = this.secondItem.title;
            this.listItemOthers = this.secondItem.others;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("entry/src/main/ets/view/HomePage.ets(204:5)", "entry");
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.listItemImage) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.listItemImage);
                        Image.debugLine("entry/src/main/ets/view/HomePage.ets(206:9)", "entry");
                        Image.objectFit(ImageFit.Cover);
                        Image.aspectRatio(StyleConstants.GRID_ASPECT_RATIO);
                        Image.syncLoad(true);
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
            Column.create();
            Column.debugLine("entry/src/main/ets/view/HomePage.ets(211:7)", "entry");
            Column.margin({
                left: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                top: { "id": 16777333, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.listItemTitle);
            Text.debugLine("entry/src/main/ets/view/HomePage.ets(212:9)", "entry");
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.listItemOthers);
            Text.debugLine("entry/src/main/ets/view/HomePage.ets(216:9)", "entry");
            Text.margin({ top: { "id": 16777329, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor({ "id": 16777294, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(3, "SwiperView", new SwiperView(undefined, {}), "CenterGridView", new CenterGridView(undefined, {}), "ListImageView", new ListImageView(undefined, {}));
    previewComponent();
}
else {
}
