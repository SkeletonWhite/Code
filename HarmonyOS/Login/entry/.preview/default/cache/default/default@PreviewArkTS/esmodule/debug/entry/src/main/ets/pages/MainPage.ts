if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MainPage_Params {
    currentDeviceSize?: string;
    currentIndex?: number;
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import HomePage from "@bundle:com.huawei.logindemo/entry/ets/view/HomePage";
import MinePage from "@bundle:com.huawei.logindemo/entry/ets/view/MinePage";
import Logger from "@bundle:com.huawei.logindemo/entry/ets/common/utils/Logger";
import MultipleDevicesUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/MultipleDevicesUtils";
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MainPage_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
    }
    updateStateVars(params: MainPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
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
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    aboutToDisappear() {
        MultipleDevicesUtils.unregister();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: this.currentDeviceSize === CommonConstants.LG ?
                    BarPosition.Start : BarPosition.End,
                index: this.currentIndex
            });
            Tabs.debugLine("entry/src/main/ets/pages/MainPage.ets(39:5)", "entry");
            Tabs.barWidth(this.currentDeviceSize === CommonConstants.LG ?
                StyleConstants.BAR_WIDTH_LG : StyleConstants.FULL_PARENT);
            Tabs.barHeight(this.currentDeviceSize === CommonConstants.LG ?
                StyleConstants.BAR_HEIGHT_LG : StyleConstants.BAR_DEFAULT_HEIGHT);
            Tabs.vertical(this.currentDeviceSize === CommonConstants.LG);
            Tabs.backgroundColor(Color.White);
            Tabs.barMode(BarMode.Fixed);
            Tabs.scrollable(false);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
                Logger.info(CommonConstants.TAG_MAIN_PAGE, 'onChange index ' + JSON.stringify(index));
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HomePage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 45, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HomePage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777236, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.HOME_TAB_INDEX, { "id": 16777378, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777377, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/MainPage.ets(44:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new MinePage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 51, col: 9 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "MinePage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, { "id": 16777258, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, CommonConstants.MINE_TAB_INDEX, { "id": 16777291, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }, { "id": 16777387, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
                } });
            TabContent.debugLine("entry/src/main/ets/pages/MainPage.ets(50:7)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    TabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/MainPage.ets(71:5)", "entry");
            Column.justifyContent(FlexAlign.Center);
            Column.height(StyleConstants.FULL_PARENT);
            Column.width(StyleConstants.FULL_PARENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("entry/src/main/ets/pages/MainPage.ets(72:7)", "entry");
            Image.width({ "id": 16777315, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777315, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("entry/src/main/ets/pages/MainPage.ets(75:7)", "entry");
            Text.margin({ top: { "id": 16777316, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777370, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777300, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } : { "id": 16777299, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MainPage";
    }
}
registerNamedRoute(() => new MainPage(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/MainPage", pageFullPath: "entry/src/main/ets/pages/MainPage", integratedHsp: "false", moduleType: "followWithHap" });
