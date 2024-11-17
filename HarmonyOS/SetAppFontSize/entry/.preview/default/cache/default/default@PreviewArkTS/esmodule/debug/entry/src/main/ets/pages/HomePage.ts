if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomePage_Params {
    settingArr?;
    changeFontSize?: number;
}
import router from "@ohos:router";
import SettingItemComponent from "@bundle:com.example.setappfontsize/entry/ets/view/SettingItemComponent";
import TitleBarComponent from "@bundle:com.example.setappfontsize/entry/ets/view/TitleBarComponent";
import HomeViewModel from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/HomeViewModel";
import CommonConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/StyleConstants";
import Logger from "@bundle:com.example.setappfontsize/entry/ets/common/utils/Logger";
import PreferencesUtil from "@bundle:com.example.setappfontsize/entry/ets/common/database/PreferencesUtil";
import type SettingData from '../viewmodel/SettingData';
const TAG = '[HomePage]';
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.settingArr = HomeViewModel.initSettingData();
        this.__changeFontSize = new ObservedPropertySimplePU(CommonConstants.SET_SIZE_NORMAL, this, "changeFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
        if (params.settingArr !== undefined) {
            this.settingArr = params.settingArr;
        }
        if (params.changeFontSize !== undefined) {
            this.changeFontSize = params.changeFontSize;
        }
    }
    updateStateVars(params: HomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private settingArr;
    private __changeFontSize: ObservedPropertySimplePU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    onPageShow() {
        PreferencesUtil.getChangeFontSize().then((value) => {
            this.changeFontSize = value;
            Logger.info(TAG, 'Get the value of changeFontSize: ' + this.changeFontSize);
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/HomePage.ets(45:5)", "entry");
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(StyleConstants.FULL_HEIGHT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBarComponent(this, { isBack: false, title: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 46, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            isBack: false,
                            title: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }
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
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/HomePage.ets(48:7)", "entry");
            __Row__blockBackground(StyleConstants.BLOCK_TOP_MARGIN_FIRST_PERCENT);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingItemComponent(this, {
                        setting: this.settingArr[CommonConstants.DISPLAY_INDEX],
                        changeFontSize: this.changeFontSize,
                        itemClick: () => { }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 49, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            setting: this.settingArr[CommonConstants.DISPLAY_INDEX],
                            changeFontSize: this.changeFontSize,
                            itemClick: () => { }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        changeFontSize: this.changeFontSize
                    });
                }
            }, { name: "SettingItemComponent" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/HomePage.ets(57:7)", "entry");
            __Row__blockBackground(StyleConstants.BLOCK_TOP_MARGIN_SECOND_PERCENT);
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingItemComponent(this, {
                        setting: this.settingArr[CommonConstants.VOICE_INDEX],
                        changeFontSize: this.changeFontSize,
                        itemClick: () => { }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 58, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            setting: this.settingArr[CommonConstants.VOICE_INDEX],
                            changeFontSize: this.changeFontSize,
                            itemClick: () => { }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        changeFontSize: this.changeFontSize
                    });
                }
            }, { name: "SettingItemComponent" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/HomePage.ets(66:7)", "entry");
            __Row__blockBackground(StyleConstants.BLOCK_TOP_MARGIN_SECOND_PERCENT);
        }, Row);
        this.SettingItems.bind(this)();
        Row.pop();
        Column.pop();
    }
    SettingItems(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/pages/HomePage.ets(77:5)", "entry");
            List.divider({
                strokeWidth: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                color: { "id": 16777220, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                startMargin: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                endMargin: StyleConstants.DIVIDER_END_MARGIN_PERCENT
            });
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
                        ListItem.debugLine("entry/src/main/ets/pages/HomePage.ets(80:9)", "entry");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new SettingItemComponent(this, { setting: item, changeFontSize: this.changeFontSize, itemClick: () => {
                                            if (index === CommonConstants.SET_FONT_INDEX) {
                                                router.pushUrl({
                                                    url: CommonConstants.SET_URL
                                                }).catch((error: Error) => {
                                                    Logger.info(TAG, 'HomePage push error' + JSON.stringify(error));
                                                });
                                            }
                                        } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 81, col: 11 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            setting: item,
                                            changeFontSize: this.changeFontSize,
                                            itemClick: () => {
                                                if (index === CommonConstants.SET_FONT_INDEX) {
                                                    router.pushUrl({
                                                        url: CommonConstants.SET_URL
                                                    }).catch((error: Error) => {
                                                        Logger.info(TAG, 'HomePage push error' + JSON.stringify(error));
                                                    });
                                                }
                                            }
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        changeFontSize: this.changeFontSize
                                    });
                                }
                            }, { name: "SettingItemComponent" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.settingArr.slice(CommonConstants.START_INDEX, CommonConstants.END_INDEX), forEachItemGenFunction, (item: SettingData) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "HomePage";
    }
}
function __Row__blockBackground(marginTop: string): void {
    Row.backgroundColor(Color.White);
    Row.borderRadius({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
    Row.margin({ top: marginTop });
    Row.width(StyleConstants.BLOCK_WIDTH_PERCENT);
    Row.padding({ top: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }, bottom: { "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } });
}
registerNamedRoute(() => new HomePage(undefined, {}), "", { bundleName: "com.example.setappfontsize", moduleName: "entry", pagePath: "pages/HomePage", pageFullPath: "entry/src/main/ets/pages/HomePage", integratedHsp: "false" });
