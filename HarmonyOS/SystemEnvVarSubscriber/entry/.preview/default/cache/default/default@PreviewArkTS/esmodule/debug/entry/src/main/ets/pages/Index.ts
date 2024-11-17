if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EnvVarItem_Params {
    title?: ResourceStr;
    text?: string;
}
interface Index_Params {
    context?;
    systemLanguage?: string | undefined;
    colorMode?: ConfigurationConstant.ColorMode | undefined;
    hasPointerDevice?: boolean | undefined;
    fontSizeScale?: number | undefined;
    fontWeightScale?: number | undefined;
    screenDirection?: display.Orientation;
    screenDensity?: number;
    displayId?: number;
}
import type common from "@ohos:app.ability.common";
import type ConfigurationConstant from "@ohos:app.ability.ConfigurationConstant";
import display from "@ohos:display";
import Logger from "@normalized:N&&&entry/src/main/ets/common/Logger&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.context = getContext(this) as common.UIAbilityContext;
        this.__systemLanguage = this.createStorageLink('systemLanguage', this.context.config.language, "systemLanguage");
        this.__colorMode = this.createStorageLink('colorMode', this.context.config.colorMode, "colorMode");
        this.__hasPointerDevice = this.createStorageLink('hasPointerDevice', this.context.config.hasPointerDevice, "hasPointerDevice");
        this.__fontSizeScale = this.createStorageLink('fontSizeScale', this.context.config.fontSizeScale, "fontSizeScale");
        this.__fontWeightScale = this.createStorageLink('fontWeightScale', this.context.config.fontWeightScale, "fontWeightScale");
        this.__screenDirection = new ObservedPropertySimplePU(display.Orientation.PORTRAIT, this, "screenDirection");
        this.__screenDensity = new ObservedPropertySimplePU(0, this, "screenDensity");
        this.__displayId = new ObservedPropertySimplePU(0, this, "displayId");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.screenDirection !== undefined) {
            this.screenDirection = params.screenDirection;
        }
        if (params.screenDensity !== undefined) {
            this.screenDensity = params.screenDensity;
        }
        if (params.displayId !== undefined) {
            this.displayId = params.displayId;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__systemLanguage.purgeDependencyOnElmtId(rmElmtId);
        this.__colorMode.purgeDependencyOnElmtId(rmElmtId);
        this.__hasPointerDevice.purgeDependencyOnElmtId(rmElmtId);
        this.__fontSizeScale.purgeDependencyOnElmtId(rmElmtId);
        this.__fontWeightScale.purgeDependencyOnElmtId(rmElmtId);
        this.__screenDirection.purgeDependencyOnElmtId(rmElmtId);
        this.__screenDensity.purgeDependencyOnElmtId(rmElmtId);
        this.__displayId.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__systemLanguage.aboutToBeDeleted();
        this.__colorMode.aboutToBeDeleted();
        this.__hasPointerDevice.aboutToBeDeleted();
        this.__fontSizeScale.aboutToBeDeleted();
        this.__fontWeightScale.aboutToBeDeleted();
        this.__screenDirection.aboutToBeDeleted();
        this.__screenDensity.aboutToBeDeleted();
        this.__displayId.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private context;
    private __systemLanguage: ObservedPropertyAbstractPU<string | undefined>;
    get systemLanguage() {
        return this.__systemLanguage.get();
    }
    set systemLanguage(newValue: string | undefined) {
        this.__systemLanguage.set(newValue);
    }
    private __colorMode: ObservedPropertyAbstractPU<ConfigurationConstant.ColorMode | undefined>;
    get colorMode() {
        return this.__colorMode.get();
    }
    set colorMode(newValue: ConfigurationConstant.ColorMode | undefined) {
        this.__colorMode.set(newValue);
    }
    private __hasPointerDevice: ObservedPropertyAbstractPU<boolean | undefined>;
    get hasPointerDevice() {
        return this.__hasPointerDevice.get();
    }
    set hasPointerDevice(newValue: boolean | undefined) {
        this.__hasPointerDevice.set(newValue);
    }
    private __fontSizeScale: ObservedPropertyAbstractPU<number | undefined>;
    get fontSizeScale() {
        return this.__fontSizeScale.get();
    }
    set fontSizeScale(newValue: number | undefined) {
        this.__fontSizeScale.set(newValue);
    }
    private __fontWeightScale: ObservedPropertyAbstractPU<number | undefined>;
    get fontWeightScale() {
        return this.__fontWeightScale.get();
    }
    set fontWeightScale(newValue: number | undefined) {
        this.__fontWeightScale.set(newValue);
    }
    private __screenDirection: ObservedPropertySimplePU<display.Orientation>;
    get screenDirection() {
        return this.__screenDirection.get();
    }
    set screenDirection(newValue: display.Orientation) {
        this.__screenDirection.set(newValue);
    }
    private __screenDensity: ObservedPropertySimplePU<number>;
    get screenDensity() {
        return this.__screenDensity.get();
    }
    set screenDensity(newValue: number) {
        this.__screenDensity.set(newValue);
    }
    private __displayId: ObservedPropertySimplePU<number>;
    get displayId() {
        return this.__displayId.get();
    }
    set displayId(newValue: number) {
        this.__displayId.set(newValue);
    }
    getScreenData() {
        let displayInstance = display.getDefaultDisplaySync();
        this.screenDirection = displayInstance.orientation;
        this.screenDensity = displayInstance.densityDPI;
        this.displayId = displayInstance.id;
    }
    aboutToAppear(): void {
        this.getScreenData();
        display.on('change', (data: number) => {
            Logger.info(`Listening enabled. Data: ${data}`);
            this.getScreenData();
        });
    }
    aboutToDisappear(): void {
        display.off('change', (data: number) => {
            Logger.info(`Succeeded in unregistering the callback for display remove. Data: ${JSON.stringify(data)}`);
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(55:5)", "entry");
            Scroll.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.BOTTOM, SafeAreaEdge.TOP]);
            Scroll.backgroundColor('#F1F3F5');
            Scroll.width('100%');
            Scroll.height('100%');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(56:7)", "entry");
            Column.justifyContent(FlexAlign.Start);
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/Index.ets(57:9)", "entry");
            Text.width('100%');
            Text.fontWeight(700);
            Text.fontSize(30);
            Text.textAlign(TextAlign.Start);
            Text.fontColor({ "id": 125829186, "type": 10001, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" });
            Text.padding({
                left: 12,
                top: 64,
                right: 20,
                bottom: 8
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.debugLine("entry/src/main/ets/pages/Index.ets(70:9)", "entry");
            List.divider({
                strokeWidth: 1,
                color: '#F5F5F5'
            });
            List.borderRadius(16);
            List.width('calc(100% - 32vp)');
            List.height(391);
            List.backgroundColor(Color.White);
            List.margin({ top: 18 });
            List.padding({
                left: 12,
                right: 12
            });
        }, List);
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(71:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.systemLanguage }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 72, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.systemLanguage
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.systemLanguage
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(75:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.colorMode?.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 76, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.colorMode?.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.colorMode?.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(79:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.screenDirection.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 80, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.screenDirection.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.screenDirection.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(83:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.screenDensity.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 84, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.screenDensity.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.screenDensity.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(87:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.displayId.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 88, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.displayId.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.displayId.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(91:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.hasPointerDevice?.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 92, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.hasPointerDevice?.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.hasPointerDevice?.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(95:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.fontSizeScale?.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 96, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.fontSizeScale?.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.fontSizeScale?.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                ListItem.debugLine("entry/src/main/ets/pages/Index.ets(99:11)", "entry");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new EnvVarItem(this, { title: { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" }, text: this.fontWeightScale?.toString() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 100, col: 13 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    title: { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" },
                                    text: this.fontWeightScale?.toString()
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: this.fontWeightScale?.toString()
                            });
                        }
                    }, { name: "EnvVarItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        List.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
class EnvVarItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = '';
        this.__text = new SynchedPropertySimpleOneWayPU(params.text, this, "text");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnvVarItem_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
    }
    updateStateVars(params: EnvVarItem_Params) {
        this.__text.reset(params.text);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__text.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__text.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: ResourceStr;
    private __text: SynchedPropertySimpleOneWayPU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(134:5)", "entry");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.height(48);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(135:7)", "entry");
            Text.fontWeight(500);
            Text.fontSize(16);
            Text.fontColor({ "id": 125829210, "type": 10001, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.text);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(139:7)", "entry");
            Text.fontWeight(400);
            Text.fontSize(14);
            Text.fontColor({ "id": 125829216, "type": 10001, params: [], "bundleName": "com.example.systemenvvarsubscriber", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.systemenvvarsubscriber", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
