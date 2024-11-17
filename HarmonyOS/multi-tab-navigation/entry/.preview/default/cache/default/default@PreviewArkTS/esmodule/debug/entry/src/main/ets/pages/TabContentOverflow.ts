if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabContentOverFlow_Params {
    tabArray?: string[];
    imageArray?: string[];
    imageClickArray?: string[];
    index?: number;
    tabsController?: TabsController;
}
import { TabContentConstants } from "@bundle:com.example.multitabs/entry/ets/common/TabContentConstants";
import { VideoTabContent } from "@bundle:com.example.multitabs/entry/ets/view/VideoTabContent";
class TabContentOverFlow extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tabArray = new ObservedPropertyObjectPU(TabContentConstants.TAB_ARRAY, this, "tabArray");
        this.__imageArray = new ObservedPropertyObjectPU(TabContentConstants.IMAGE_ARRAY, this, "imageArray");
        this.__imageClickArray = new ObservedPropertyObjectPU(TabContentConstants.IMAGE_CLICK_ARRAY, this, "imageClickArray");
        this.__index = new ObservedPropertySimplePU(1, this, "index");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabContentOverFlow_Params) {
        if (params.tabArray !== undefined) {
            this.tabArray = params.tabArray;
        }
        if (params.imageArray !== undefined) {
            this.imageArray = params.imageArray;
        }
        if (params.imageClickArray !== undefined) {
            this.imageClickArray = params.imageClickArray;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params: TabContentOverFlow_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabArray.purgeDependencyOnElmtId(rmElmtId);
        this.__imageArray.purgeDependencyOnElmtId(rmElmtId);
        this.__imageClickArray.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabArray.aboutToBeDeleted();
        this.__imageArray.aboutToBeDeleted();
        this.__imageClickArray.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tabArray: ObservedPropertyObjectPU<string[]>;
    get tabArray() {
        return this.__tabArray.get();
    }
    set tabArray(newValue: string[]) {
        this.__tabArray.set(newValue);
    }
    private __imageArray: ObservedPropertyObjectPU<string[]>;
    get imageArray() {
        return this.__imageArray.get();
    }
    set imageArray(newValue: string[]) {
        this.__imageArray.set(newValue);
    }
    private __imageClickArray: ObservedPropertyObjectPU<string[]>;
    get imageClickArray() {
        return this.__imageClickArray.get();
    }
    set imageClickArray(newValue: string[]) {
        this.__imageClickArray.set(newValue);
    }
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private tabsController: TabsController;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(29:5)", "entry");
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ index: this.index, controller: this.tabsController });
            Tabs.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(30:7)", "entry");
            Tabs.zIndex(TabContentConstants.TAB_Z_INDEX);
            Tabs.scrollable(false);
            Tabs.barHeight({ "id": 16777364, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Tabs.animationDuration(TabContentConstants.TAB_TABS_DURATION);
            Tabs.onChange((index: number) => {
                this.index = index;
            });
            Tabs.hitTestBehavior(HitTestMode.Transparent);
            Tabs.id(TabContentConstants.TAB_TABS);
            Tabs.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777277, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(32:11)", "entry");
                    Text.fontSize({ "id": 16777350, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                }, Text);
                Text.pop();
            });
            TabContent.align(Alignment.Center);
            TabContent.height({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.width({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(31:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new VideoTabContent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/TabContentOverflow.ets", line: 40, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "VideoTabContent" });
                }
            });
            TabContent.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(39:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777278, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(44:11)", "entry");
                    Text.fontSize({ "id": 16777350, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                }, Text);
                Text.pop();
            });
            TabContent.align(Alignment.Center);
            TabContent.height({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.width({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(43:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777279, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(52:11)", "entry");
                    Text.fontSize({ "id": 16777350, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                }, Text);
                Text.pop();
            });
            TabContent.align(Alignment.Center);
            TabContent.height({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.width({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            TabContent.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(51:9)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(73:7)", "entry");
            Row.offset({
                y: { "id": 16777333, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
            Row.width({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Row.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM]);
            Row.backgroundColor({ "id": 16777390, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.id(TabContentConstants.TAB_TAB_BAR);
            Row.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(75:11)", "entry");
                    Column.width({ "id": 16777332, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Column.margin({ top: { "id": 16777316, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
                    Column.height({ "id": 16777328, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Column.onClick(() => {
                        this.index = index;
                        this.tabsController.changeIndex(this.index);
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": -1, "type": -1, params: [item], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/TabContentOverflow.ets(76:13)", "entry");
                    Text.fontColor(this.index === index ? { "id": 16777385, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777396, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.margin({ top: { "id": 16777363, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tabArray, forEachItemGenFunction, (item: string, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TabContentOverFlow";
    }
}
registerNamedRoute(() => new TabContentOverFlow(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/TabContentOverflow", pageFullPath: "entry/src/main/ets/pages/TabContentOverflow", integratedHsp: "false" });
