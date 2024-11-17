if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SideTab_Params {
    currentClassify?: number;
    ClassifyArray?: Array<ClassifyModel>;
    classifyScroller?: Scroller;
    scroller?: Scroller;
}
interface ClassifyItem_Params {
    isSelected?: boolean;
    classifyName?: string | Resource;
    onClickAction?;
}
import { initSideData } from "@bundle:com.example.multitabs/entry/ets/viewmodel/TabViewModel";
import type { ClassifyModel } from '../viewmodel/TabItem';
class ClassifyItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isSelected = new SynchedPropertySimpleOneWayPU(params.isSelected, this, "isSelected");
        this.classifyName = undefined;
        this.onClickAction = (): void => {
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ClassifyItem_Params) {
        if (params.isSelected === undefined) {
            this.__isSelected.set(false);
        }
        if (params.classifyName !== undefined) {
            this.classifyName = params.classifyName;
        }
        if (params.onClickAction !== undefined) {
            this.onClickAction = params.onClickAction;
        }
    }
    updateStateVars(params: ClassifyItem_Params) {
        this.__isSelected.reset(params.isSelected);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isSelected.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isSelected.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isSelected: SynchedPropertySimpleOneWayPU<boolean>;
    get isSelected() {
        return this.__isSelected.get();
    }
    set isSelected(newValue: boolean) {
        this.__isSelected.set(newValue);
    }
    private classifyName?: string | Resource;
    private onClickAction;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.classifyName);
            Text.debugLine("entry/src/main/ets/pages/SideTab.ets(27:5)", "entry");
            Text.fontSize(14);
            Text.fontColor(this.isSelected ? '#182431' : '#99182431');
            Text.fontFamily(this.isSelected ? { "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontWeight(this.isSelected ? FontWeight.Medium : FontWeight.Normal);
            Text.textAlign(TextAlign.Center);
            Text.backgroundColor(this.isSelected ? '#FFFFFF' : '');
            Text.width('100%');
            Text.height(52);
            Text.onClick(this.onClickAction);
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SideTab extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentClassify = new ObservedPropertySimplePU(0, this, "currentClassify");
        this.__ClassifyArray = new ObservedPropertyObjectPU(initSideData(), this, "ClassifyArray");
        this.classifyScroller = new Scroller();
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SideTab_Params) {
        if (params.currentClassify !== undefined) {
            this.currentClassify = params.currentClassify;
        }
        if (params.ClassifyArray !== undefined) {
            this.ClassifyArray = params.ClassifyArray;
        }
        if (params.classifyScroller !== undefined) {
            this.classifyScroller = params.classifyScroller;
        }
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: SideTab_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentClassify.purgeDependencyOnElmtId(rmElmtId);
        this.__ClassifyArray.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentClassify.aboutToBeDeleted();
        this.__ClassifyArray.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentClassify: ObservedPropertySimplePU<number>;
    get currentClassify() {
        return this.__currentClassify.get();
    }
    set currentClassify(newValue: number) {
        this.__currentClassify.set(newValue);
    }
    private __ClassifyArray: ObservedPropertyObjectPU<Array<ClassifyModel>>;
    get ClassifyArray() {
        return this.__ClassifyArray.get();
    }
    set ClassifyArray(newValue: Array<ClassifyModel>) {
        this.__ClassifyArray.set(newValue);
    }
    private classifyScroller: Scroller;
    private scroller: Scroller;
    classifyChangeAction(index: number, isClassify: boolean): void {
        if (this.currentClassify !== index) {
            this.currentClassify = index;
            if (isClassify) {
                this.scroller.scrollToIndex(index);
            }
            else {
                this.classifyScroller.scrollToIndex(index);
            }
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/SideTab.ets(60:5)", "entry");
            Row.backgroundColor('#FFFFFF');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ scroller: this.classifyScroller });
            List.debugLine("entry/src/main/ets/pages/SideTab.ets(61:7)", "entry");
            List.height('110%');
            List.width('27.8%');
            List.backgroundColor('#F1F3F5');
            List.scrollBar(BarState.Off);
            List.margin({ top: 74 });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
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
                        ListItem.debugLine("entry/src/main/ets/pages/SideTab.ets(63:11)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new ClassifyItem(this, {
                                        classifyName: item.classifyName,
                                        isSelected: this.currentClassify === index,
                                        onClickAction: () => {
                                            if (index !== undefined) {
                                                this.classifyChangeAction(index, true);
                                            }
                                        }
                                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/SideTab.ets", line: 64, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            classifyName: item.classifyName,
                                            isSelected: this.currentClassify === index,
                                            onClickAction: () => {
                                                if (index !== undefined) {
                                                    this.classifyChangeAction(index, true);
                                                }
                                            }
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        isSelected: this.currentClassify === index
                                    });
                                }
                            }, { name: "ClassifyItem" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.ClassifyArray, forEachItemGenFunction, (item: ClassifyModel, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SideTab.ets(82:7)", "entry");
            Column.width('72.2%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.currentClassify === index ? item.classifyName : '');
                    Text.debugLine("entry/src/main/ets/pages/SideTab.ets(84:11)", "entry");
                    Text.fontSize(30);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.ClassifyArray, forEachItemGenFunction, (item: ClassifyModel, index: number) => JSON.stringify(item) + index, true, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SideTab";
    }
}
registerNamedRoute(() => new SideTab(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/SideTab", pageFullPath: "entry/src/main/ets/pages/SideTab", integratedHsp: "false" });
