if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SliderLayout_Params {
    fontSizeText?: Resource;
    changeFontSize?: number;
}
interface SetFontSizePage_Params {
    contentArr?;
    changeFontSize?: number;
    fontSizeText?: Resource;
}
import ChatItemComponent from "@bundle:com.example.setappfontsize/entry/ets/view/ChatItemComponent";
import TitleBarComponent from "@bundle:com.example.setappfontsize/entry/ets/view/TitleBarComponent";
import SetViewModel from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/SetViewModel";
import CommonConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/StyleConstants";
import Logger from "@bundle:com.example.setappfontsize/entry/ets/common/utils/Logger";
import PreferencesUtil from "@bundle:com.example.setappfontsize/entry/ets/common/database/PreferencesUtil";
import type ChatData from '../viewmodel/ChatData';
const TAG = '[SetFontSizePage]';
class SetFontSizePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.contentArr = SetViewModel.initChatData();
        this.__changeFontSize = new ObservedPropertySimplePU(0, this, "changeFontSize");
        this.__fontSizeText = new ObservedPropertyObjectPU({ "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }, this, "fontSizeText");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SetFontSizePage_Params) {
        if (params.contentArr !== undefined) {
            this.contentArr = params.contentArr;
        }
        if (params.changeFontSize !== undefined) {
            this.changeFontSize = params.changeFontSize;
        }
        if (params.fontSizeText !== undefined) {
            this.fontSizeText = params.fontSizeText;
        }
    }
    updateStateVars(params: SetFontSizePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__fontSizeText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        this.__fontSizeText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private contentArr;
    private __changeFontSize: ObservedPropertySimplePU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    private __fontSizeText: ObservedPropertyObjectPU<Resource>;
    get fontSizeText() {
        return this.__fontSizeText.get();
    }
    set fontSizeText(newValue: Resource) {
        this.__fontSizeText.set(newValue);
    }
    onPageShow() {
        PreferencesUtil.getChangeFontSize().then((value) => {
            this.changeFontSize = value;
            this.fontSizeText = SetViewModel.getTextByFontSize(value);
            Logger.info(TAG, 'Get the value of changeFontSize: ' + this.changeFontSize);
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(48:5)", "entry");
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Column.height(StyleConstants.FULL_HEIGHT);
            Column.width(StyleConstants.FULL_WIDTH);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBarComponent(this, { title: { "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/SetFontSizePage.ets", line: 49, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: { "id": 16777246, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBarComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.changeFontSize > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(52:9)", "entry");
                        List.layoutWeight(StyleConstants.WEIGHT_FULL);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
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
                                    ListItem.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(54:13)", "entry");
                                };
                                const deepRenderFunction = (elmtId, isInitialRender) => {
                                    itemCreation(elmtId, isInitialRender);
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new ChatItemComponent(this, { item: item, changeFontSize: this.changeFontSize }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/SetFontSizePage.ets", line: 55, col: 15 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        item: item,
                                                        changeFontSize: this.changeFontSize
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                                    changeFontSize: this.changeFontSize
                                                });
                                            }
                                        }, { name: "ChatItemComponent" });
                                    }
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.contentArr, forEachItemGenFunction, (item: ChatData) => JSON.stringify(item), false, false);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SliderLayout(this, { fontSizeText: this.__fontSizeText, changeFontSize: this.__changeFontSize }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/SetFontSizePage.ets", line: 62, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            fontSizeText: this.fontSizeText,
                            changeFontSize: this.changeFontSize
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SliderLayout" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SetFontSizePage";
    }
}
class SliderLayout extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__fontSizeText = new SynchedPropertyObjectTwoWayPU(params.fontSizeText, this, "fontSizeText");
        this.__changeFontSize = new SynchedPropertySimpleTwoWayPU(params.changeFontSize, this, "changeFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SliderLayout_Params) {
    }
    updateStateVars(params: SliderLayout_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__fontSizeText.purgeDependencyOnElmtId(rmElmtId);
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__fontSizeText.aboutToBeDeleted();
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __fontSizeText: SynchedPropertySimpleOneWayPU<Resource>;
    get fontSizeText() {
        return this.__fontSizeText.get();
    }
    set fontSizeText(newValue: Resource) {
        this.__fontSizeText.set(newValue);
    }
    private __changeFontSize: SynchedPropertySimpleTwoWayPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(76:5)", "entry");
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(77:7)", "entry");
            Text.fontSize({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.margin({ left: StyleConstants.SLIDER_LAYOUT_LEFT_PERCENT, top: StyleConstants.SLIDER_LAYOUT_TOP_PERCENT });
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(83:7)", "entry");
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Column.width(StyleConstants.BLOCK_WIDTH_PERCENT);
            Column.padding({ top: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }, bottom: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } });
            Column.margin({
                left: StyleConstants.SLIDER_HORIZONTAL_MARGIN_PERCENT,
                right: StyleConstants.SLIDER_HORIZONTAL_MARGIN_PERCENT,
                top: StyleConstants.SLIDER_TOP_MARGIN_PERCENT,
                bottom: StyleConstants.SLIDER_BOTTOM_MARGIN_PERCENT
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.fontSizeText);
            Text.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(84:9)", "entry");
            Text.fontSize({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(88:9)", "entry");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(89:11)", "entry");
            Text.fontColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontSize({ "id": 16777256, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.textAlign(TextAlign.End);
            Text.width(StyleConstants.A_WIDTH_PERCENT);
            Text.padding({ right: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Slider.create({
                value: this.changeFontSize === CommonConstants.SET_SIZE_HUGE
                    ? CommonConstants.SET_SLIDER_MAX : this.changeFontSize,
                min: CommonConstants.SET_SLIDER_MIN,
                max: CommonConstants.SET_SLIDER_MAX,
                step: CommonConstants.SET_SLIDER_STEP,
                style: SliderStyle.InSet
            });
            Slider.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(97:11)", "entry");
            Slider.showSteps(true);
            Slider.width(StyleConstants.SLIDER_WIDTH_PERCENT);
            Slider.onChange(async (value: number) => {
                if (this.changeFontSize === 0) {
                    this.changeFontSize = await PreferencesUtil.getChangeFontSize();
                    this.fontSizeText = SetViewModel.getTextByFontSize(value);
                    return;
                }
                this.changeFontSize = (value === CommonConstants.SET_SLIDER_MAX ? CommonConstants.SET_SIZE_HUGE : value);
                this.fontSizeText = SetViewModel.getTextByFontSize(this.changeFontSize);
                PreferencesUtil.saveChangeFontSize(this.changeFontSize);
            });
        }, Slider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/SetFontSizePage.ets(118:11)", "entry");
            Text.fontColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontSize({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
            Text.width(StyleConstants.A_WIDTH_PERCENT);
            Text.padding({ left: { "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new SetFontSizePage(undefined, {}), "", { bundleName: "com.example.setappfontsize", moduleName: "entry", pagePath: "pages/SetFontSizePage", pageFullPath: "entry/src/main/ets/pages/SetFontSizePage", integratedHsp: "false" });
