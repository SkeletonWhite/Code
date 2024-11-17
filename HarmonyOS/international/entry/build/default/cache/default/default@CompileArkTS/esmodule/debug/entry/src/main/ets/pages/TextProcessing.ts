if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TextProcessing_Params {
    textTypeResult?: string;
    textTypeValue?: string;
    areaTextValue?: string;
    areaTextResult?: string[];
    textTypes?: Array<string>;
    breakIterator?;
    context?: common.UIAbilityContext;
}
import i18n from "@ohos:i18n";
import type common from "@ohos:app.ability.common";
import TitleBar from "@bundle:ohos.samples.international/entry/ets/component/TitleBar";
import ResourceUtil from "@bundle:ohos.samples.international/entry/ets/util/ResourceUtil";
const types = ['U_UNASSIGNED', 'U_GENERAL_OTHER_TYPES', 'U_UPPERCASE_LETTER',
    'U_LOWERCASE_LETTER', 'U_TITLECASE_LETTER', 'U_MODIFIER_LETTER',
    'U_OTHER_LETTER', 'U_NON_SPACING_MARK', 'U_ENCLOSING_MARK',
    'U_COMBINING_SPACING_MARK', 'U_DECIMAL_DIGIT_NUMBER', 'U_LETTER_NUMBER',
    'U_OTHER_NUMBER', 'U_SPACE_SEPARATOR', 'U_LINE_SEPARATOR',
    'U_PARAGRAPH_SEPARATOR', 'U_CONTROL_CHAR', 'U_FORMAT_CHAR',
    'U_PRIVATE_USE_CHAR', 'U_SURROGATE', 'U_DASH_PUNCTUATION',
    'U_START_PUNCTUATION', 'U_END_PUNCTUATION', 'U_CONNECTOR_PUNCTUATION',
    'U_OTHER_PUNCTUATION', 'U_MATH_SYMBOL', 'U_CURRENCY_SYMBOL',
    'U_MODIFIER_SYMBOL', 'U_OTHER_SYMBOL', 'U_INITIAL_PUNCTUATION',
    'U_FINAL_PUNCTUATION', 'U_CHAR_CATEGORY_COUNT'];
const LOCALE = i18n.System.getSystemLocale();
const MAX = 60;
class TextProcessing extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__textTypeResult = new ObservedPropertySimplePU('', this, "textTypeResult");
        this.__textTypeValue = new ObservedPropertySimplePU('', this, "textTypeValue");
        this.__areaTextValue = new ObservedPropertySimplePU('', this, "areaTextValue");
        this.__areaTextResult = new ObservedPropertyObjectPU([], this, "areaTextResult");
        this.__textTypes = new ObservedPropertyObjectPU([], this, "textTypes");
        this.breakIterator = i18n.getLineInstance(LOCALE);
        this.context = getContext(this) as common.UIAbilityContext;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TextProcessing_Params) {
        if (params.textTypeResult !== undefined) {
            this.textTypeResult = params.textTypeResult;
        }
        if (params.textTypeValue !== undefined) {
            this.textTypeValue = params.textTypeValue;
        }
        if (params.areaTextValue !== undefined) {
            this.areaTextValue = params.areaTextValue;
        }
        if (params.areaTextResult !== undefined) {
            this.areaTextResult = params.areaTextResult;
        }
        if (params.textTypes !== undefined) {
            this.textTypes = params.textTypes;
        }
        if (params.breakIterator !== undefined) {
            this.breakIterator = params.breakIterator;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: TextProcessing_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__textTypeResult.purgeDependencyOnElmtId(rmElmtId);
        this.__textTypeValue.purgeDependencyOnElmtId(rmElmtId);
        this.__areaTextValue.purgeDependencyOnElmtId(rmElmtId);
        this.__areaTextResult.purgeDependencyOnElmtId(rmElmtId);
        this.__textTypes.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__textTypeResult.aboutToBeDeleted();
        this.__textTypeValue.aboutToBeDeleted();
        this.__areaTextValue.aboutToBeDeleted();
        this.__areaTextResult.aboutToBeDeleted();
        this.__textTypes.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __textTypeResult: ObservedPropertySimplePU<string>;
    get textTypeResult() {
        return this.__textTypeResult.get();
    }
    set textTypeResult(newValue: string) {
        this.__textTypeResult.set(newValue);
    }
    private __textTypeValue: ObservedPropertySimplePU<string>;
    get textTypeValue() {
        return this.__textTypeValue.get();
    }
    set textTypeValue(newValue: string) {
        this.__textTypeValue.set(newValue);
    }
    private __areaTextValue: ObservedPropertySimplePU<string>;
    get areaTextValue() {
        return this.__areaTextValue.get();
    }
    set areaTextValue(newValue: string) {
        this.__areaTextValue.set(newValue);
    }
    private __areaTextResult: ObservedPropertyObjectPU<string[]>;
    get areaTextResult() {
        return this.__areaTextResult.get();
    }
    set areaTextResult(newValue: string[]) {
        this.__areaTextResult.set(newValue);
    }
    private __textTypes: ObservedPropertyObjectPU<Array<string>>;
    get textTypes() {
        return this.__textTypes.get();
    }
    set textTypes(newValue: Array<string>) {
        this.__textTypes.set(newValue);
    }
    private breakIterator;
    private context: common.UIAbilityContext;
    async aboutToAppear() {
        this.textTypes = await ResourceUtil.getStringArray({ "id": 16777238, "type": 10009, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }.id, this.context);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.width('100%');
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBar(this, { hasBackPress: true, title: { "id": 16777232, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/TextProcessing.ets", line: 53, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            hasBackPress: true,
                            title: { "id": 16777232, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Text.padding({ top: 22, left: 24 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.margin({ left: 12, right: 12, top: 8 });
            Column.border({ radius: 16 });
            Column.height(106);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: { "id": 16777222, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" } });
            TextInput.id('short_text_input');
            TextInput.maxLength(1);
            TextInput.placeholderFont({ size: 16 });
            TextInput.backgroundColor(Color.Transparent);
            TextInput.fontColor(Color.Black);
            TextInput.fontSize(16);
            TextInput.width('100%');
            TextInput.height(50);
            TextInput.onChange((value) => {
                this.textTypeValue = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(1);
            Divider.opacity(0.05);
            Divider.margin({ left: 12, right: 12 });
            Divider.backgroundColor(Color.Black);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.textTypeResult);
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
            Text.padding({ top: 12, left: 12 });
            Text.fontColor(Color.Black);
            Text.opacity(0.9);
            Text.fontSize(16);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777228, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Button.id('show_character_type');
            Button.width(180);
            Button.height(36);
            Button.margin({ top: 12 });
            Button.onClick(() => {
                if (!this.textTypeValue) {
                    this.textTypeResult = '';
                    return;
                }
                let type = i18n.Unicode.getType(this.textTypeValue);
                this.textTypeResult = this.textTypes[types.indexOf(type)];
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Text.padding({ top: 22, left: 24 });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
            Column.margin({ left: 12, right: 12, top: 8 });
            Column.border({ radius: 16 });
            Column.height(232);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ placeholder: { "id": 16777224, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" } });
            TextArea.id('long_text_input');
            TextArea.placeholderFont({ size: 16 });
            TextArea.backgroundColor(Color.Transparent);
            TextArea.inputFilter(this.areaTextValue.length < MAX ? '' : '^$');
            TextArea.fontColor(Color.Black);
            TextArea.fontSize(16);
            TextArea.width('100%');
            TextArea.height(124);
            TextArea.onChange((value) => {
                this.areaTextValue = value;
            });
        }, TextArea);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.areaTextValue.length}`);
            Text.fontSize(16);
            Text.opacity(0.4);
            Text.padding(10);
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(1);
            Divider.opacity(0.05);
            Divider.margin({ left: 12, right: 12 });
            Divider.backgroundColor(Color.Black);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.width('100%');
            Text.height(84);
            Text.textAlign(TextAlign.Start);
            Text.padding({ top: 12, left: 12 });
            Text.opacity(0.9);
        }, Text);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const str = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Span.create(str);
                    Span.fontColor(Color.Black);
                    Span.fontSize(16);
                }, Span);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index !== this.areaTextResult.length - 1) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Span.create('/');
                                Span.fontColor(Color.Red);
                                Span.fontSize(16);
                            }, Span);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.areaTextResult, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777231, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Button.width(180);
            Button.height(36);
            Button.margin({ top: 12 });
            Button.onClick(() => {
                let tem: string[] = [];
                this.breakIterator.setLineBreakText(this.areaTextValue);
                this.breakIterator.first();
                let pos = this.breakIterator.next();
                let flag = 0;
                while (pos !== -1) {
                    tem.push(this.areaTextValue.slice(flag, pos));
                    flag = pos;
                    pos = this.breakIterator.next();
                }
                this.areaTextResult = tem;
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TextProcessing";
    }
}
registerNamedRoute(() => new TextProcessing(undefined, {}), "", { bundleName: "ohos.samples.international", moduleName: "entry", pagePath: "pages/TextProcessing", pageFullPath: "entry/src/main/ets/pages/TextProcessing", integratedHsp: "false" });
