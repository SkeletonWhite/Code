if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    pageInfos?: NavPathStack;
    text?: string;
    index?: number;
    securityLevel?: distributedKVStore.SecurityLevel;
    encrypted?: boolean;
    kvStore?: KVStore | undefined;
    kvStoreAll?: KVStoreType[];
}
import distributedKVStore from "@ohos:data.distributedKVStore";
import KVStore from "@bundle:com.example.kvstore/entry/ets/common/utils/KVStore";
import type { KVStoreType } from '../viewmodel/KVStoreType';
import { ReadWrite } from "@bundle:com.example.kvstore/entry/ets/pages/ReadWritePage";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageInfos = new ObservedPropertyObjectPU(new NavPathStack(), this, "pageInfos");
        this.addProvidedVar("pageInfos", this.__pageInfos, false);
        this.__text = new ObservedPropertySimplePU('S1', this, "text");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.__securityLevel = new ObservedPropertySimplePU(distributedKVStore.SecurityLevel.S1, this, "securityLevel");
        this.__encrypted = this.createStorageLink('encrypted', false, "encrypted");
        this.__kvStore = this.createStorageLink('kvStore', undefined, "kvStore");
        this.__kvStoreAll = this.createStorageLink('kvStoreAll', [], "kvStoreAll");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.pageInfos !== undefined) {
            this.pageInfos = params.pageInfos;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.securityLevel !== undefined) {
            this.securityLevel = params.securityLevel;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageInfos.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__securityLevel.purgeDependencyOnElmtId(rmElmtId);
        this.__encrypted.purgeDependencyOnElmtId(rmElmtId);
        this.__kvStore.purgeDependencyOnElmtId(rmElmtId);
        this.__kvStoreAll.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageInfos.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        this.__securityLevel.aboutToBeDeleted();
        this.__encrypted.aboutToBeDeleted();
        this.__kvStore.aboutToBeDeleted();
        this.__kvStoreAll.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __pageInfos: ObservedPropertyObjectPU<NavPathStack>;
    get pageInfos() {
        return this.__pageInfos.get();
    }
    set pageInfos(newValue: NavPathStack) {
        this.__pageInfos.set(newValue);
    }
    private __text: ObservedPropertySimplePU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __index: ObservedPropertySimplePU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private __securityLevel: ObservedPropertySimplePU<distributedKVStore.SecurityLevel>;
    get securityLevel() {
        return this.__securityLevel.get();
    }
    set securityLevel(newValue: distributedKVStore.SecurityLevel) {
        this.__securityLevel.set(newValue);
    }
    private __encrypted: ObservedPropertyAbstractPU<boolean>;
    get encrypted() {
        return this.__encrypted.get();
    }
    set encrypted(newValue: boolean) {
        this.__encrypted.set(newValue);
    }
    private __kvStore: ObservedPropertyAbstractPU<KVStore | undefined>;
    get kvStore() {
        return this.__kvStore.get();
    }
    set kvStore(newValue: KVStore | undefined) {
        this.__kvStore.set(newValue);
    }
    private __kvStoreAll: ObservedPropertyAbstractPU<KVStoreType[]>;
    get kvStoreAll() {
        return this.__kvStoreAll.get();
    }
    set kvStoreAll(newValue: KVStoreType[]) {
        this.__kvStoreAll.set(newValue);
    }
    pageMap(name: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (name === 'readWritePage') {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ReadWrite(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 35, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ReadWrite" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pageInfos, { moduleName: "entry", pagePath: "entry/src/main/ets/pages/Index", isUserCreateStack: true });
            Navigation.debugLine("entry/src/main/ets/pages/Index.ets(40:5)", "entry");
            Navigation.title({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Navigation.width('100%');
            Navigation.height('100%');
            Navigation.hideToolBar(true);
            Navigation.navDestination({ builder: this.pageMap.bind(this) });
            Navigation.backgroundColor('#F1F3F5');
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(41:7)", "entry");
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.height('100%');
            Column.width('100%');
            Column.padding({
                left: 16,
                right: 16,
                bottom: 16
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(42:9)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(43:11)", "entry");
            Row.height(60);
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({
                top: 8,
                bottom: 12
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/Index.ets(44:13)", "entry");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Regular);
            Text.fontColor({ "id": 125830998, "type": 10001, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.lineHeight(20);
            Text.margin({
                top: 28,
                bottom: 12
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(53:13)", "entry");
            Row.height('100%');
            Row.margin({
                top: 28,
                bottom: 12
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'encrypt', group: 'checkboxGroup' });
            Checkbox.debugLine("entry/src/main/ets/pages/Index.ets(54:15)", "entry");
            Checkbox.select(false);
            Checkbox.height(20);
            Checkbox.width(20);
            Checkbox.selectedColor('#0A59F7');
            Checkbox.shape(CheckBoxShape.CIRCLE);
            Checkbox.onChange((value: boolean) => {
                this.encrypted = value;
            });
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/Index.ets(63:15)", "entry");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Regular);
            Text.fontColor({ "id": 125830998, "type": 10001, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.lineHeight(20);
            Text.margin({ left: 8 });
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Select.create([{ value: 'S1' },
                { value: 'S2' },
                { value: 'S3' },
                { value: 'S4' }]);
            Select.debugLine("entry/src/main/ets/pages/Index.ets(84:11)", "entry");
            Select.selected(this.index);
            Select.value(this.text);
            Select.font({
                size: 16,
                weight: 500
            });
            Select.fontColor({ "id": 125830982, "type": 10001, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Select.selectedOptionFont({
                size: 16,
                weight: 500
            });
            Select.optionFont({
                size: 16,
                weight: 500
            });
            Select.space(8);
            Select.width('100%');
            Select.arrowPosition(ArrowPosition.END);
            Select.menuAlign(MenuAlignType.START, { dx: 0, dy: 0 });
            Select.optionWidth(200);
            Select.optionHeight(300);
            Select.onSelect((index: number, text?: string) => {
                this.index = index;
                if (text) {
                    this.text = text;
                    if (text === 'S1') {
                        this.securityLevel = distributedKVStore.SecurityLevel.S1;
                    }
                    else if (text === 'S2') {
                        this.securityLevel = distributedKVStore.SecurityLevel.S2;
                    }
                    else if (text === 'S3') {
                        this.securityLevel = distributedKVStore.SecurityLevel.S3;
                    }
                    else if (text === 'S4') {
                        this.securityLevel = distributedKVStore.SecurityLevel.S4;
                    }
                }
            });
        }, Select);
        Select.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/Index.ets(126:9)", "entry");
            Button.width('100%');
            Button.height('40vp');
            Button.fontSize('16fp');
            Button.backgroundColor('#0A59F7');
            Button.fontWeight(FontWeight.Medium);
            Button.onClick(async () => {
                this.kvStoreAll = [];
                this.kvStore = undefined;
                this.kvStore = new KVStore(this.encrypted, this.securityLevel);
                setTimeout(() => {
                    this.pageInfos.pushPath(new NavPathInfo('readWritePage', []));
                }, 200);
            });
        }, Button);
        Button.pop();
        Column.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.kvstore", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
