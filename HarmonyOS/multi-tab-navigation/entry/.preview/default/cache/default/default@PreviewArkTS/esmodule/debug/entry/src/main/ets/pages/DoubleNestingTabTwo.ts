if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DoubleNestingTabOne_Params {
    topTabData?: Array<string | Resource>;
    currentIndex?: number;
    controller?: TabsController;
}
import { Constants } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
import { DiscoverPage } from "@bundle:com.example.multitabs/entry/ets/view/DiscoverPage";
class DoubleNestingTabOne extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__topTabData = new ObservedPropertyObjectPU(Constants.TOP_TAB_DATA, this, "topTabData");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.controller = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DoubleNestingTabOne_Params) {
        if (params.topTabData !== undefined) {
            this.topTabData = params.topTabData;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: DoubleNestingTabOne_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__topTabData.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__topTabData.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __topTabData: ObservedPropertyObjectPU<Array<string | Resource>>;
    get topTabData() {
        return this.__topTabData.get();
    }
    set topTabData(newValue: Array<string | Resource>) {
        this.__topTabData.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private controller: TabsController;
    tabBuilder(index: number, name: string | Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(28:5)", "entry");
            Column.width(Constants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(29:7)", "entry");
            Text.fontColor({ "id": 16777397, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontSize(this.currentIndex === index ? { "id": 16777402, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777404, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontWeight(this.currentIndex === index ? Constants.FONT_WEIGHT_TAB : FontWeight.Normal);
        }, Text);
        Text.pop();
        Column.pop();
    }
    contentBuilder(index: number, text: string | Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(40:7)", "entry");
                    Column.width(Constants.FULL_WIDTH);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(41:9)", "entry");
                    Row.width(Constants.FULL_WIDTH);
                    Row.height(Constants.FULL_HEIGHT);
                    Row.justifyContent(FlexAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(text);
                    Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(42:11)", "entry");
                    Text.height(Constants.CONTENT_HEIGHT);
                    Text.fontSize({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, index, text);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(39:5)", "entry");
        }, TabContent);
        TabContent.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(56:5)", "entry");
            Column.width(Constants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start, controller: this.controller });
            Tabs.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(57:7)", "entry");
            Tabs.vertical(false);
            Tabs.barMode(BarMode.Fixed);
            Tabs.barWidth(Constants.FULL_WIDTH);
            Tabs.barHeight({ "id": 16777407, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Tabs.animationDuration(Constants.ANIMATION_DURATION);
            Tabs.onAnimationStart((_index: number, targetIndex: number) => {
                this.currentIndex = targetIndex;
            });
            Tabs.width(Constants.FULL_WIDTH);
            Tabs.height(Constants.FULL_HEIGHT);
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new DiscoverPage(this, { controller: this.controller }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/DoubleNestingTabTwo.ets", line: 59, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    controller: this.controller
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "DiscoverPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, Constants.TAB_INDEX_ZERO, this.topTabData[Constants.TAB_INDEX_ZERO]);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabTwo.ets(58:9)", "entry");
        }, TabContent);
        TabContent.pop();
        this.contentBuilder.bind(this)(Constants.TAB_INDEX_ONE, this.topTabData[Constants.TAB_INDEX_ONE]);
        this.contentBuilder.bind(this)(Constants.TAB_INDEX_TWO, this.topTabData[Constants.TAB_INDEX_TWO]);
        this.contentBuilder.bind(this)(Constants.TAB_INDEX_THREE, this.topTabData[Constants.TAB_INDEX_THREE]);
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "DoubleNestingTabOne";
    }
}
registerNamedRoute(() => new DoubleNestingTabOne(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/DoubleNestingTabTwo", pageFullPath: "entry/src/main/ets/pages/DoubleNestingTabTwo", integratedHsp: "false" });
