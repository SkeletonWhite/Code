if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DrawerTab_Params {
    navList?: Array<number>;
    active?: number;
    show?: boolean;
}
import { Constants } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
class DrawerTab extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__navList = new ObservedPropertyObjectPU([0, 1, 2, 3, 4, 5], this, "navList");
        this.__active = new ObservedPropertySimplePU(0, this, "active");
        this.__show = new ObservedPropertySimplePU(false, this, "show");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DrawerTab_Params) {
        if (params.navList !== undefined) {
            this.navList = params.navList;
        }
        if (params.active !== undefined) {
            this.active = params.active;
        }
        if (params.show !== undefined) {
            this.show = params.show;
        }
    }
    updateStateVars(params: DrawerTab_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__navList.purgeDependencyOnElmtId(rmElmtId);
        this.__active.purgeDependencyOnElmtId(rmElmtId);
        this.__show.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__navList.aboutToBeDeleted();
        this.__active.aboutToBeDeleted();
        this.__show.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __navList: ObservedPropertyObjectPU<Array<number>>;
    get navList() {
        return this.__navList.get();
    }
    set navList(newValue: Array<number>) {
        this.__navList.set(newValue);
    }
    private __active: ObservedPropertySimplePU<number>;
    get active() {
        return this.__active.get();
    }
    set active(newValue: number) {
        this.__active.set(newValue);
    }
    private __show: ObservedPropertySimplePU<boolean>;
    get show() {
        return this.__show.get();
    }
    set show(newValue: boolean) {
        this.__show.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SideBarContainer.create(SideBarContainerType.Overlay);
            SideBarContainer.debugLine("entry/src/main/ets/pages/DrawerTab.ets(26:5)", "entry");
            SideBarContainer.showSideBar(this.show);
            SideBarContainer.controlButton({
                left: 16,
                top: 48,
                height: 40,
                width: 40,
                icons: {
                    shown: { "id": 16777289, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                    hidden: { "id": 16777448, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                    switching: { "id": 16777448, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
                }
            });
            SideBarContainer.onChange((value: boolean) => {
                this.show = value;
            });
            SideBarContainer.sideBarWidth('85%');
            SideBarContainer.minSideBarWidth('85%');
            SideBarContainer.width('100%');
            SideBarContainer.height('110%');
            SideBarContainer.translate({ y: -40 });
        }, SideBarContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DrawerTab.ets(27:7)", "entry");
            Column.width(272);
            Column.height(344);
            Column.backgroundColor(Color.White);
            Column.borderRadius(20);
            Column.height('100%');
            Column.padding({ top: 104 });
            Column.backgroundColor('#E9EAEC');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/DrawerTab.ets(29:11)", "entry");
                    Column.onClick(() => {
                        this.active = item;
                    });
                    Column.margin({
                        top: 4,
                        left: 4,
                        right: 4,
                        bottom: 4
                    });
                    Column.justifyContent(FlexAlign.Center);
                    Column.width(264);
                    Column.height(48);
                    Column.padding({ left: 13 });
                    Column.borderRadius(16);
                    Column.backgroundColor(this.active === item ? '#1A0A59F7' : '');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/DrawerTab.ets(30:13)", "entry");
                    Row.height(48);
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(this.active === item ? { "id": 16777442, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777441, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/pages/DrawerTab.ets(31:15)", "entry");
                    Image.width(24);
                    Image.height(24);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/DrawerTab.ets(34:15)", "entry");
                    Text.fontSize(16);
                    Text.fontColor(Color.Black);
                    Text.fontWeight(FontWeight.Medium);
                    Text.margin({ left: 17 });
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.navList.length - 1 !== index) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create();
                                Row.debugLine("entry/src/main/ets/pages/DrawerTab.ets(44:15)", "entry");
                                Row.height(0.5);
                                Row.backgroundColor('#0D000000');
                                Row.width('90%');
                            }, Row);
                            Row.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.navList, forEachItemGenFunction, (item: number, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/DrawerTab.ets(67:9)", "entry");
            Row.width('100%');
            Row.margin({ top: 284 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777466, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/DrawerTab.ets(68:11)", "entry");
            Image.width(40);
            Image.height(40);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/DrawerTab.ets(71:11)", "entry");
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DrawerTab.ets(84:7)", "entry");
            Column.onClick(() => {
                Context.animateTo({
                    duration: Constants.ANIMATION_DURATION,
                    curve: Curve.EaseOut,
                    playMode: PlayMode.Normal,
                }, () => {
                    this.show = false;
                });
            });
            Column.width('100%');
            Column.height('110%');
            Column.backgroundColor(this.show ? '#c1c2c4' : '');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/DrawerTab.ets(85:9)", "entry");
            Text.width('100%');
            Text.height('100%');
            Text.fontSize(30);
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Column.pop();
        SideBarContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "DrawerTab";
    }
}
registerNamedRoute(() => new DrawerTab(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/DrawerTab", pageFullPath: "entry/src/main/ets/pages/DrawerTab", integratedHsp: "false" });
