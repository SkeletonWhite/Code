if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface DoubleNestingTabOne_Params {
    tabArray?: Array<TabItem>;
    topTabData?: Array<string | Resource>;
    focusIndex?: number;
    currentIndex?: number;
    subCurrentIndex?: number;
    controller?: TabsController;
    listScroller?: Scroller;
    subController?: TabsController;
    panOptionRight?: PanGestureOptions;
}
import hilog from "@ohos:hilog";
import { initTabData } from "@bundle:com.example.multitabs/entry/ets/viewmodel/TabViewModel";
import type { TabItem } from '../viewmodel/TabItem';
import { Constants } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
class DoubleNestingTabOne extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__tabArray = new ObservedPropertyObjectPU(initTabData(), this, "tabArray");
        this.__topTabData = new ObservedPropertyObjectPU(Constants.TOP_TAB_DATA, this, "topTabData");
        this.__focusIndex = new ObservedPropertySimplePU(0, this, "focusIndex");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__subCurrentIndex = new ObservedPropertySimplePU(0, this, "subCurrentIndex");
        this.controller = new TabsController();
        this.listScroller = new Scroller();
        this.subController = new TabsController();
        this.panOptionRight = new PanGestureOptions({ direction: PanDirection.Left });
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: DoubleNestingTabOne_Params) {
        if (params.tabArray !== undefined) {
            this.tabArray = params.tabArray;
        }
        if (params.topTabData !== undefined) {
            this.topTabData = params.topTabData;
        }
        if (params.focusIndex !== undefined) {
            this.focusIndex = params.focusIndex;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.subCurrentIndex !== undefined) {
            this.subCurrentIndex = params.subCurrentIndex;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.listScroller !== undefined) {
            this.listScroller = params.listScroller;
        }
        if (params.subController !== undefined) {
            this.subController = params.subController;
        }
        if (params.panOptionRight !== undefined) {
            this.panOptionRight = params.panOptionRight;
        }
    }
    updateStateVars(params: DoubleNestingTabOne_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tabArray.purgeDependencyOnElmtId(rmElmtId);
        this.__topTabData.purgeDependencyOnElmtId(rmElmtId);
        this.__focusIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__subCurrentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tabArray.aboutToBeDeleted();
        this.__topTabData.aboutToBeDeleted();
        this.__focusIndex.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__subCurrentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __tabArray: ObservedPropertyObjectPU<Array<TabItem>>;
    get tabArray() {
        return this.__tabArray.get();
    }
    set tabArray(newValue: Array<TabItem>) {
        this.__tabArray.set(newValue);
    }
    private __topTabData: ObservedPropertyObjectPU<Array<string | Resource>>;
    get topTabData() {
        return this.__topTabData.get();
    }
    set topTabData(newValue: Array<string | Resource>) {
        this.__topTabData.set(newValue);
    }
    private __focusIndex: ObservedPropertySimplePU<number>;
    get focusIndex() {
        return this.__focusIndex.get();
    }
    set focusIndex(newValue: number) {
        this.__focusIndex.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __subCurrentIndex: ObservedPropertySimplePU<number>;
    get subCurrentIndex() {
        return this.__subCurrentIndex.get();
    }
    set subCurrentIndex(newValue: number) {
        this.__subCurrentIndex.set(newValue);
    }
    private controller: TabsController;
    private listScroller: Scroller;
    private subController: TabsController;
    private panOptionRight: PanGestureOptions;
    tabBuilder(index: number, name: string | Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(36:5)", "entry");
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(37:7)", "entry");
            Text.fontColor('#E6000000');
            Text.fontSize(this.currentIndex === index ? 20 : 18);
            Text.fontWeight(this.currentIndex === index ? 600 : FontWeight.Normal);
        }, Text);
        Text.pop();
        Column.pop();
    }
    subTabBuilder(tabName: string | Resource, tabIndex: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(47:5)", "entry");
            Row.justifyContent(FlexAlign.Center);
            Row.padding({ left: 12, right: 12 });
            Row.height(30);
            Row.onClick(() => {
                this.subController.changeIndex(tabIndex);
                this.focusIndex = tabIndex;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tabName);
            Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(48:7)", "entry");
            Text.fontSize(16);
            Text.fontColor(tabIndex === this.focusIndex ? '#0A59F7' : '#E6000000');
            Text.id(tabIndex.toString());
        }, Text);
        Text.pop();
        Row.pop();
    }
    contentBuilder(index: number, text: string | Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(65:7)", "entry");
                    Column.width('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(66:9)", "entry");
                    Row.width('100%');
                    Row.height('100%');
                    Row.justifyContent(FlexAlign.Center);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(text);
                    Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(67:11)", "entry");
                    Text.height(300);
                    Text.fontSize(30);
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, index, text);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(64:5)", "entry");
        }, TabContent);
        TabContent.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(81:5)", "entry");
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.Start, controller: this.controller });
            Tabs.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(82:7)", "entry");
            Tabs.vertical(false);
            Tabs.barMode(BarMode.Fixed);
            Tabs.barWidth('100%');
            Tabs.barHeight(52);
            Tabs.animationDuration(Constants.ANIMATION_DURATION);
            Tabs.onAnimationStart((index: number, targetIndex: number) => {
                hilog.info(0x0000, 'index', index.toString());
                this.currentIndex = targetIndex;
            });
            Tabs.width('100%');
            Tabs.height('100%');
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(84:11)", "entry");
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(85:13)", "entry");
                    Column.alignItems(HorizontalAlign.Center);
                    Column.width('100%');
                    Column.padding({ left: 4 });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(86:15)", "entry");
                    Row.height(25);
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create({ initialIndex: Constants.TAB_INDEX_ZERO, scroller: this.listScroller });
                    List.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(87:17)", "entry");
                    List.listDirection(Axis.Horizontal);
                    List.height(30);
                    List.scrollBar(BarState.Off);
                    List.width('85%');
                    List.friction(0.6);
                }, List);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index: number) => {
                        const item = _item;
                        this.subTabBuilder.bind(this)(item.name, index);
                    };
                    this.forEachUpdateFunction(elmtId, this.tabArray, forEachItemGenFunction, (item: TabItem, index: number) => JSON.stringify(item) + index, true, true);
                }, ForEach);
                ForEach.pop();
                List.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777461, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Image.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(98:17)", "entry");
                    Image.width(20);
                    Image.height(15);
                    Image.margin({ left: 16 });
                }, Image);
                Row.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Tabs.create({ barPosition: BarPosition.Start, controller: this.subController });
                    Tabs.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(110:13)", "entry");
                    Tabs.barHeight(0);
                    Tabs.animationDuration(Constants.ANIMATION_DURATION);
                    Tabs.onAnimationStart((index: number, targetIndex: number) => {
                        hilog.info(0x0000, 'index', index.toString());
                        this.focusIndex = targetIndex;
                        this.listScroller.scrollToIndex(targetIndex, true, ScrollAlign.CENTER);
                    });
                }, Tabs);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const item = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item.id === this.tabArray.length - 1) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        TabContent.create(() => {
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Row.create();
                                                Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(114:21)", "entry");
                                                Row.width('100%');
                                                Row.justifyContent(FlexAlign.Center);
                                                Gesture.create(GesturePriority.Low);
                                                PanGesture.create(this.panOptionRight);
                                                PanGesture.onActionEnd(() => {
                                                    this.controller.changeIndex(1);
                                                });
                                                PanGesture.pop();
                                                Gesture.pop();
                                            }, Row);
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Text.create(item.name);
                                                Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(115:23)", "entry");
                                                Text.height(300);
                                                Text.fontSize(30);
                                            }, Text);
                                            Text.pop();
                                            Row.pop();
                                        });
                                        TabContent.backgroundColor(Color.White);
                                        TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(113:19)", "entry");
                                    }, TabContent);
                                    TabContent.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        TabContent.create(() => {
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Row.create();
                                                Row.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(131:21)", "entry");
                                                Row.width('100%');
                                                Row.justifyContent(FlexAlign.Center);
                                            }, Row);
                                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                                Text.create(item.name);
                                                Text.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(132:23)", "entry");
                                                Text.height(300);
                                                Text.fontSize(30);
                                            }, Text);
                                            Text.pop();
                                            Row.pop();
                                        });
                                        TabContent.backgroundColor(Color.White);
                                        TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(130:19)", "entry");
                                    }, TabContent);
                                    TabContent.pop();
                                });
                            }
                        }, If);
                        If.pop();
                    };
                    this.forEachUpdateFunction(elmtId, this.tabArray, forEachItemGenFunction, (item: TabItem, index: number) => JSON.stringify(item) + index, false, true);
                }, ForEach);
                ForEach.pop();
                Tabs.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, Constants.TAB_INDEX_ZERO, this.topTabData[Constants.TAB_INDEX_ZERO]);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/DoubleNestingTabOne.ets(83:9)", "entry");
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
registerNamedRoute(() => new DoubleNestingTabOne(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/DoubleNestingTabOne", pageFullPath: "entry/src/main/ets/pages/DoubleNestingTabOne", integratedHsp: "false" });
