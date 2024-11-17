if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BottomTab_Params {
    currentIndex?: number;
    tabsController?: TabsController;
}
import hilog from "@ohos:hilog";
import { Constants } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
class BottomTab extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BottomTab_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params: BottomTab_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private tabsController: TabsController;
    tabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/BottomTab.ets(27:5)", "entry");
            Column.justifyContent(FlexAlign.Center);
            Column.height(52);
            Column.width('100%');
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("entry/src/main/ets/pages/BottomTab.ets(28:7)", "entry");
            Image.width(24);
            Image.height(24);
            Image.objectFit(ImageFit.Contain);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("entry/src/main/ets/pages/BottomTab.ets(32:7)", "entry");
            Text.margin({ top: 4 });
            Text.fontSize(10);
            Text.fontColor(this.currentIndex === index ? '#3388ff' : '#E6000000');
        }, Text);
        Text.pop();
        Column.pop();
    }
    tabContentBuilder(text: Resource, index: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/BottomTab.ets(49:7)", "entry");
                    Row.width('100%');
                    Row.justifyContent(FlexAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(text);
                    Text.debugLine("entry/src/main/ets/pages/BottomTab.ets(50:9)", "entry");
                    Text.height(300);
                    Text.fontSize(30);
                }, Text);
                Text.pop();
                Row.pop();
            });
            TabContent.padding({ left: 12, right: 12 });
            TabContent.backgroundColor(Color.White);
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, text, index, selectedImg, normalImg);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/BottomTab.ets(48:5)", "entry");
        }, TabContent);
        TabContent.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: BarPosition.End,
                controller: this.tabsController
            });
            Tabs.debugLine("entry/src/main/ets/pages/BottomTab.ets(63:5)", "entry");
            Tabs.width('100%');
            Tabs.backgroundColor('#F3F4F5');
            Tabs.barHeight(52);
            Tabs.barMode(BarMode.Fixed);
            Tabs.onAnimationStart((index: number, targetIndex: number) => {
                hilog.info(0x0000, 'index', index.toString());
                this.currentIndex = targetIndex;
            });
        }, Tabs);
        this.tabContentBuilder.bind(this)({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, Constants.TAB_INDEX_ZERO, { "id": 16777292, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777463, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        this.tabContentBuilder.bind(this)({ "id": 16777254, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, Constants.TAB_INDEX_ONE, { "id": 16777443, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777444, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        this.tabContentBuilder.bind(this)({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, Constants.TAB_INDEX_TWO, { "id": 16777468, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, { "id": 16777464, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "BottomTab";
    }
}
registerNamedRoute(() => new BottomTab(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/BottomTab", pageFullPath: "entry/src/main/ets/pages/BottomTab", integratedHsp: "false" });
