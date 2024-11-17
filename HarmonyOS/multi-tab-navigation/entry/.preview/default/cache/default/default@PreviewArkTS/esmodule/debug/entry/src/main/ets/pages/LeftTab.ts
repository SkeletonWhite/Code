if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LeftTab_Params {
    tabArray?: Array<number>;
    currentIndex?: number;
    indicatorLeftMargin?: number;
    indicatorWidth?: number;
    tabsWidth?: number;
    controller?: TabsController;
    tabLeftOffset?: number;
    animationDuration?: number;
    resource?: resourceManager.ResourceManager | undefined;
    tabStr?: string;
    pageStr?: string;
    contentStr?: string;
}
import componentUtils from "@ohos:arkui.componentUtils";
import hilog from "@ohos:hilog";
import type resourceManager from "@ohos:resourceManager";
class LeftTab extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tabArray = new ObservedPropertyObjectPU([0, 1, 2], this, "tabArray");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__indicatorLeftMargin = new ObservedPropertySimplePU(0, this, "indicatorLeftMargin");
        this.__indicatorWidth = new ObservedPropertySimplePU(0, this, "indicatorWidth");
        this.__tabsWidth = new ObservedPropertySimplePU(0, this, "tabsWidth");
        this.controller = new TabsController();
        this.tabLeftOffset = 0;
        this.animationDuration = 300;
        this.resource = AppStorage.get('resourceManager');
        this.tabStr = this.resource?.getStringSync({ "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }?.id) ?? 'tab';
        this.pageStr = this.resource?.getStringSync({ "id": 16777252, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }?.id) ?? 'this is page';
        this.contentStr = this.resource?.getStringSync({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }?.id) ?? 'content';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LeftTab_Params) {
        if (params.tabArray !== undefined) {
            this.tabArray = params.tabArray;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.indicatorLeftMargin !== undefined) {
            this.indicatorLeftMargin = params.indicatorLeftMargin;
        }
        if (params.indicatorWidth !== undefined) {
            this.indicatorWidth = params.indicatorWidth;
        }
        if (params.tabsWidth !== undefined) {
            this.tabsWidth = params.tabsWidth;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.tabLeftOffset !== undefined) {
            this.tabLeftOffset = params.tabLeftOffset;
        }
        if (params.animationDuration !== undefined) {
            this.animationDuration = params.animationDuration;
        }
        if (params.resource !== undefined) {
            this.resource = params.resource;
        }
        if (params.tabStr !== undefined) {
            this.tabStr = params.tabStr;
        }
        if (params.pageStr !== undefined) {
            this.pageStr = params.pageStr;
        }
        if (params.contentStr !== undefined) {
            this.contentStr = params.contentStr;
        }
    }
    updateStateVars(params: LeftTab_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabArray.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__indicatorLeftMargin.purgeDependencyOnElmtId(rmElmtId);
        this.__indicatorWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__tabsWidth.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabArray.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__indicatorLeftMargin.aboutToBeDeleted();
        this.__indicatorWidth.aboutToBeDeleted();
        this.__tabsWidth.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tabArray: ObservedPropertyObjectPU<Array<number>>;
    get tabArray() {
        return this.__tabArray.get();
    }
    set tabArray(newValue: Array<number>) {
        this.__tabArray.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __indicatorLeftMargin: ObservedPropertySimplePU<number>;
    get indicatorLeftMargin() {
        return this.__indicatorLeftMargin.get();
    }
    set indicatorLeftMargin(newValue: number) {
        this.__indicatorLeftMargin.set(newValue);
    }
    private __indicatorWidth: ObservedPropertySimplePU<number>;
    get indicatorWidth() {
        return this.__indicatorWidth.get();
    }
    set indicatorWidth(newValue: number) {
        this.__indicatorWidth.set(newValue);
    }
    private __tabsWidth: ObservedPropertySimplePU<number>;
    get tabsWidth() {
        return this.__tabsWidth.get();
    }
    set tabsWidth(newValue: number) {
        this.__tabsWidth.set(newValue);
    }
    private controller: TabsController;
    private tabLeftOffset: number;
    private animationDuration: number;
    private resource: resourceManager.ResourceManager | undefined;
    private tabStr: string;
    private pageStr: string;
    private contentStr: string;
    tab(tabName: string, _tabItem: number, tabIndex: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/LeftTab.ets(38:5)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.constraintSize({ minWidth: 35 });
            Row.width(64);
            Row.height(35);
            Row.onClick(() => {
                this.controller.changeIndex(tabIndex);
                this.currentIndex = tabIndex;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tabName);
            Text.debugLine("entry/src/main/ets/pages/LeftTab.ets(39:7)", "entry");
            Text.fontSize(16);
            Text.lineHeight(22);
            Text.fontColor(tabIndex === this.currentIndex ? '#0A59F7' : '#E6000000');
            Text.id(tabIndex.toString());
            Text.onAreaChange((_, newValue: Area) => {
                if (this.currentIndex === tabIndex && (this.indicatorLeftMargin === 0 || this.indicatorWidth === 0)) {
                    let positionX: number;
                    let width: number = Number.parseFloat(newValue.width.toString());
                    if (newValue.position.x !== undefined) {
                        positionX = Number.parseFloat(newValue.position.x?.toString());
                        this.indicatorLeftMargin = Number.isNaN(positionX) ? 0 : positionX;
                    }
                    this.indicatorWidth = width;
                }
            });
        }, Text);
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LeftTab.ets(67:5)", "entry");
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.debugLine("entry/src/main/ets/pages/LeftTab.ets(68:7)", "entry");
            Stack.height(56);
            Stack.margin({ left: this.tabLeftOffset });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // The text of tab.
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/LeftTab.ets(70:9)", "entry");
            // The text of tab.
            Row.justifyContent(FlexAlign.Start);
            // The text of tab.
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.tab.bind(this)(this.tabStr + item, item, index);
            };
            this.forEachUpdateFunction(elmtId, this.tabArray, forEachItemGenFunction, (item: number, _index: number) => item.toString(), true, true);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/pages/LeftTab.ets(74:11)", "entry");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('+');
            Text.debugLine("entry/src/main/ets/pages/LeftTab.ets(75:11)", "entry");
            Text.width(24);
            Text.height(24);
            Text.fontSize(24);
            Text.textAlign(TextAlign.Center);
            Text.margin({ right: 24 });
        }, Text);
        Text.pop();
        // The text of tab.
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // The underline of tab.
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LeftTab.ets(86:9)", "entry");
            // The underline of tab.
            Column.width(this.indicatorWidth);
            // The underline of tab.
            Column.height(1.5);
            // The underline of tab.
            Column.backgroundColor('#0A59F7');
            // The underline of tab.
            Column.borderRadius(1);
            // The underline of tab.
            Column.margin({ left: this.indicatorLeftMargin, top: 35 });
        }, Column);
        // The underline of tab.
        Column.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ controller: this.controller });
            Tabs.debugLine("entry/src/main/ets/pages/LeftTab.ets(97:7)", "entry");
            Tabs.onAreaChange((_, newValue: Area) => {
                this.tabsWidth = Number.parseFloat(newValue.width.toString());
            });
            Tabs.barWidth('100%');
            Tabs.barHeight(0);
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.animationDuration(this.animationDuration);
            Tabs.onGestureSwipe((index: number, event: TabsAnimationEvent) => {
                let currentIndicator = this.getCurrentIndicatorInfo(index, event);
                this.currentIndex = currentIndicator.index;
                this.indicatorLeftMargin = currentIndicator.left;
                this.indicatorWidth = currentIndicator.width;
            });
            Tabs.onAnimationStart((_index: number, targetIndex: number, _event: TabsAnimationEvent) => {
                this.currentIndex = targetIndex;
                let targetIndexInfo = this.getTextInfo(targetIndex);
                this.startAnimateTo(this.animationDuration, targetIndexInfo.left, targetIndexInfo.width);
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    TabContent.create(() => {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("entry/src/main/ets/pages/LeftTab.ets(100:13)", "entry");
                            Row.justifyContent(FlexAlign.Center);
                            Row.width('100%');
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(this.pageStr + ' ' + item + ' ' + this.contentStr);
                            Text.debugLine("entry/src/main/ets/pages/LeftTab.ets(101:15)", "entry");
                        }, Text);
                        Text.pop();
                        Row.pop();
                    });
                    TabContent.debugLine("entry/src/main/ets/pages/LeftTab.ets(99:11)", "entry");
                }, TabContent);
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tabArray, forEachItemGenFunction, (item: number, _index: number) => item.toString(), false, true);
        }, ForEach);
        ForEach.pop();
        Tabs.pop();
        Column.pop();
    }
    private getCurrentIndicatorInfo(index: number, event: TabsAnimationEvent): Record<string, number> {
        let nextIndex = index;
        if (index > 0 && event.currentOffset > 0) {
            // swipe to left.
            nextIndex--;
        }
        else if (index < this.tabArray.length && event.currentOffset > 0) {
            // swipe to right.
            nextIndex++;
        }
        else {
            // error condition.
            hilog.info(0x0000, 'leftTab', 'the index is out of boundary: %{public}s', index);
        }
        let indexInfo = this.getTextInfo(index);
        let nextIndexInfo = this.getTextInfo(index);
        let swipeRatio = Math.abs(event.currentOffset / this.tabsWidth);
        let currentIndex = swipeRatio > 0.5 ? nextIndex : index;
        let currentIndicatorLeft: number = indexInfo.left + (nextIndexInfo.left - indexInfo.left) * swipeRatio;
        let currentIndicatorWidth: number = indexInfo.width + (nextIndexInfo.width - indexInfo.width) * swipeRatio;
        return { 'index': currentIndex, 'left': currentIndicatorLeft, 'width': currentIndicatorWidth };
    }
    private getTextInfo(index: number): Record<string, number> {
        let modePosition: componentUtils.ComponentInfo = componentUtils.getRectangleById(index.toString());
        return { 'left': px2vp(modePosition.windowOffset.x), 'width': px2vp(modePosition.size.width) };
    }
    private startAnimateTo(duration: number, leftMargin: number, width: number) {
        Context.animateTo({
            duration: duration,
            curve: Curve.Linear,
            iterations: 1,
            playMode: PlayMode.Normal,
        }, () => {
            this.indicatorLeftMargin = leftMargin;
            this.indicatorWidth = width;
        });
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "LeftTab";
    }
}
registerNamedRoute(() => new LeftTab(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/LeftTab", pageFullPath: "entry/src/main/ets/pages/LeftTab", integratedHsp: "false" });
