if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ReadWrite_Params {
    isInsetShow?: boolean;
    isEditShow?: boolean;
    editData?: KVStoreType | undefined;
    kvStoreAll?: KVStoreType[];
    kvStore?: KVStore | undefined;
    text?: string;
    index?: number;
    inputKey?: string;
    inputValue?: Uint8Array | string | number | boolean;
}
import buffer from "@ohos:buffer";
import util from "@ohos:util";
import type KVStore from '../common/utils/KVStore';
import type { KVStoreType } from '../viewmodel/KVStoreType';
function __Text__tableStyle(): void {
    Text.maxLines(1);
    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
    Text.fontSize(14);
    Text.fontWeight(400);
    Text.fontColor('#e6000000');
    Text.lineHeight(20);
    Text.textAlign(TextAlign.Center);
}
function __Text__tableHeaderStyle(): void {
    Text.fontSize(18);
    Text.fontWeight(700);
    Text.fontColor({ "id": 125830998, "type": 10001, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
    Text.height(37);
    Text.textAlign(TextAlign.Center);
}
export class ReadWrite extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__isInsetShow = this.createStorageLink('isInsetShow', false, "isInsetShow");
        this.__isEditShow = this.createStorageLink('isEditShow', false, "isEditShow");
        this.__editData = this.createStorageLink('editData', undefined, "editData");
        this.__kvStoreAll = this.createStorageLink('kvStoreAll', [], "kvStoreAll");
        this.__kvStore = this.createStorageLink('kvStore', undefined, "kvStore");
        this.__text = new ObservedPropertySimplePU('number', this, "text");
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.inputKey = '';
        this.inputValue = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ReadWrite_Params) {
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
        if (params.inputKey !== undefined) {
            this.inputKey = params.inputKey;
        }
        if (params.inputValue !== undefined) {
            this.inputValue = params.inputValue;
        }
    }
    updateStateVars(params: ReadWrite_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isInsetShow.purgeDependencyOnElmtId(rmElmtId);
        this.__isEditShow.purgeDependencyOnElmtId(rmElmtId);
        this.__editData.purgeDependencyOnElmtId(rmElmtId);
        this.__kvStoreAll.purgeDependencyOnElmtId(rmElmtId);
        this.__kvStore.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isInsetShow.aboutToBeDeleted();
        this.__isEditShow.aboutToBeDeleted();
        this.__editData.aboutToBeDeleted();
        this.__kvStoreAll.aboutToBeDeleted();
        this.__kvStore.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __isInsetShow: ObservedPropertyAbstractPU<boolean>;
    get isInsetShow() {
        return this.__isInsetShow.get();
    }
    set isInsetShow(newValue: boolean) {
        this.__isInsetShow.set(newValue);
    }
    private __isEditShow: ObservedPropertyAbstractPU<boolean>;
    get isEditShow() {
        return this.__isEditShow.get();
    }
    set isEditShow(newValue: boolean) {
        this.__isEditShow.set(newValue);
    }
    private __editData: ObservedPropertyAbstractPU<KVStoreType | undefined>;
    get editData() {
        return this.__editData.get();
    }
    set editData(newValue: KVStoreType | undefined) {
        this.__editData.set(newValue);
    }
    private __kvStoreAll: ObservedPropertyAbstractPU<KVStoreType[]>;
    get kvStoreAll() {
        return this.__kvStoreAll.get();
    }
    set kvStoreAll(newValue: KVStoreType[]) {
        this.__kvStoreAll.set(newValue);
    }
    private __kvStore: ObservedPropertyAbstractPU<KVStore | undefined>;
    get kvStore() {
        return this.__kvStore.get();
    }
    set kvStore(newValue: KVStore | undefined) {
        this.__kvStore.set(newValue);
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
    private inputKey: string;
    private inputValue: Uint8Array | string | number | boolean;
    menuBuilder(kvStore: KVStoreType, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
            Flex.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(54:5)", "entry");
            Flex.width(224);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(55:7)", "entry");
            Column.padding({
                top: 4,
                bottom: 4,
                left: 16,
                right: 16
            });
            Column.height(80);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(56:9)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.Start);
            Row.align(Alignment.Center);
            Row.onClick(() => {
                this.isEditShow = true;
                this.editData = kvStore;
                if (kvStore.type === 'Uint8Array') {
                    let uint8Array: Uint8Array = this.editData.value as Uint8Array;
                    let textDecoderOptions: util.TextDecoderOptions = {
                        fatal: false,
                        ignoreBOM: true
                    };
                    let decodeToStringOptions: util.DecodeToStringOptions = {
                        stream: false
                    };
                    let textDecoder = util.TextDecoder.create('utf-8', textDecoderOptions);
                    let retStr = textDecoder.decodeToString(uint8Array, decodeToStringOptions);
                    this.editData.value = retStr.slice(1, -1);
                }
                this.text = this.editData.type;
                switch (this.editData.type) {
                    case 'number':
                        this.index = 0;
                        break;
                    case 'string':
                        this.index = 1;
                        break;
                    case 'boolean':
                        this.index = 2;
                        break;
                    case 'Uint8Array':
                        this.index = 3;
                        break;
                    default:
                        break;
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831625, "type": 40000, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(57:11)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.margin({ right: 8 });
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(60:11)", "entry");
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.lineHeight(21);
            Text.fontColor('#e6000000');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(105:9)", "entry");
            Divider.height(10);
            Divider.width('100%');
            Divider.color('#0d000000');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(110:9)", "entry");
            Row.width('100%');
            Row.height(30);
            Row.justifyContent(FlexAlign.Start);
            Row.align(Alignment.Center);
            Row.onClick(async () => {
                this.kvStore?.delete(kvStore.key);
                setTimeout(async () => {
                    await this.kvStore?.getAll().then((data: KVStoreType[]) => {
                        this.kvStoreAll = data;
                    });
                }, 200);
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831543, "type": 40000, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(111:11)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.margin({ right: 8 });
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(114:11)", "entry");
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.lineHeight(21);
            Text.fontColor('#e6000000');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Flex.pop();
    }
    insertBindSheet(editData?: KVStoreType | undefined, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(146:5)", "entry");
            Column.height('100%');
            Column.justifyContent(FlexAlign.SpaceBetween);
            Column.padding({
                left: 16,
                right: 16,
                bottom: 16
            });
            Column.borderRadius(10);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(editData ? { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" } : { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(147:7)", "entry");
            Text.width('100%');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.lineHeight(37);
            Text.padding({
                left: 16,
                right: 16
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Select.create([{ value: 'number' },
                { value: 'string' },
                { value: 'boolean' },
                { value: 'Uint8Array' }]);
            Select.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(157:7)", "entry");
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
                }
            });
        }, Select);
        Select.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(189:7)", "entry");
            Text.width('100%');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.lineHeight(37);
            Text.padding({
                left: 16,
                right: 16
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: editData?.key });
            TextInput.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(198:7)", "entry");
            TextInput.width('100%');
            TextInput.enabled(editData ? false : true);
            TextInput.onChange((value) => {
                this.inputKey = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(205:7)", "entry");
            Text.width('100%');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.lineHeight(37);
            Text.padding({
                left: 16,
                right: 16
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.text === 'number') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '', text: editData ? editData.value.toString() : '' });
                        TextInput.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(215:9)", "entry");
                        TextInput.type(InputType.Number);
                        TextInput.width('100%');
                        TextInput.onChange((value: string) => {
                            this.inputValue = value;
                        });
                    }, TextInput);
                });
            }
            else if (this.text === 'boolean') {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(222:9)", "entry");
                        Column.width('100%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(223:11)", "entry");
                        Row.width('100%');
                        Row.padding({ left: 12 });
                        Row.justifyContent(FlexAlign.Start);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Radio.create({ value: 'true', group: 'radioGroup' });
                        Radio.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(224:13)", "entry");
                        Radio.checked(editData && editData.value === true ? true : false);
                        Radio.height(20);
                        Radio.width(20);
                        Radio.onChange((isChecked: boolean) => {
                            if (isChecked) {
                                this.inputValue = true;
                            }
                        });
                    }, Radio);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('true');
                        Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(233:13)", "entry");
                        Text.fontSize(16);
                        Text.margin({ right: 50 });
                    }, Text);
                    Text.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(241:11)", "entry");
                        Row.width('100%');
                        Row.padding({ left: 12 });
                        Row.justifyContent(FlexAlign.Start);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Radio.create({ value: 'false', group: 'radioGroup' });
                        Radio.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(242:13)", "entry");
                        Radio.checked(editData && editData.value === false ? true : false);
                        Radio.height(20);
                        Radio.width(20);
                        Radio.onChange((isChecked: boolean) => {
                            if (isChecked) {
                                this.inputValue = false;
                            }
                        });
                    }, Radio);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('false');
                        Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(251:13)", "entry");
                        Text.fontSize(16);
                    }, Text);
                    Text.pop();
                    Row.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '', text: editData ? editData.value.toString() : '' });
                        TextInput.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(260:9)", "entry");
                        TextInput.width('100%');
                        TextInput.onChange((value) => {
                            this.inputValue = value;
                        });
                    }, TextInput);
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(267:7)", "entry");
            Button.width('100%');
            Button.height(40);
            Button.margin({
                top: 16,
                bottom: 16
            });
            Button.fontSize(16);
            Button.backgroundColor('#0A59F7');
            Button.fontWeight(FontWeight.Medium);
            Button.onClick(async () => {
                let newArray: Uint8Array | undefined = undefined;
                if (this.text === 'number') {
                    this.inputValue = Number(this.inputValue);
                }
                else if (this.text === 'Uint8Array') {
                    newArray = new Uint8Array(buffer.from(JSON.stringify(this.inputValue), 'utf-8').buffer);
                }
                await this.kvStore?.put(editData ? editData.key : this.inputKey, newArray ? newArray : this.inputValue);
                setTimeout(async () => {
                    await this.kvStore?.getAll().then((data) => {
                        this.kvStoreAll = data;
                    });
                    this.isInsetShow = false;
                    this.isEditShow = false;
                    this.editData = undefined;
                }, 200);
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    async aboutToAppear() {
        await this.kvStore?.getAll().then((data) => {
            this.kvStoreAll = data;
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(313:7)", "entry");
                    Column.padding(16);
                    Column.width('100%');
                    Column.height('100%');
                    Column.justifyContent(FlexAlign.SpaceBetween);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create();
                    Scroll.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(314:9)", "entry");
                    Scroll.borderRadius(12);
                    Scroll.align(Alignment.TopStart);
                    Scroll.scrollBar(BarState.Auto);
                    Scroll.height('90%');
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(315:11)", "entry");
                    Column.padding(12);
                    Column.width('100%');
                    Column.borderRadius(12);
                    Column.backgroundColor(Color.White);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(316:13)", "entry");
                    Row.padding({ right: 11 });
                    Row.width('100%');
                    Row.height(44);
                    Row.justifyContent(FlexAlign.SpaceBetween);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(317:15)", "entry");
                    Text.width(50);
                    __Text__tableHeaderStyle();
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(320:15)", "entry");
                    Text.width(80);
                    __Text__tableHeaderStyle();
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(323:15)", "entry");
                    Text.width(76);
                    __Text__tableHeaderStyle();
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                    Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(326:15)", "entry");
                    Text.width(40);
                    __Text__tableHeaderStyle();
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Divider.create();
                    Divider.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(335:13)", "entry");
                    Divider.padding({
                        left: 11,
                        right: 11
                    });
                    Divider.width('100%');
                    Divider.color('#0d000000');
                }, Divider);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(343:13)", "entry");
                    Column.width('100%');
                    Column.bindSheet(this.isEditShow, { builder: () => {
                            this.insertBindSheet.call(this, ObservedObject.GetRawObject(this.editData));
                        } }, {
                        height: 440,
                        title: { title: { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" } },
                        onDisappear: async () => {
                            if (this.text === 'Uint8Array') {
                                let newArray = new Uint8Array(buffer.from(JSON.stringify(this.inputValue), 'utf-8').buffer);
                                this.editData!.value = newArray;
                            }
                            this.isEditShow = false;
                            this.editData = undefined;
                        }
                    });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const kvStore = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(345:17)", "entry");
                            Row.margin({
                                top: 8,
                                bottom: 12
                            });
                            Row.width('100%');
                            Row.height(20);
                            Row.justifyContent(FlexAlign.SpaceBetween);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(kvStore.key);
                            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(346:19)", "entry");
                            Text.width(50);
                            __Text__tableStyle();
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(kvStore.value.toString());
                            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(349:19)", "entry");
                            Text.width(80);
                            __Text__tableStyle();
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(kvStore.type);
                            Text.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(352:19)", "entry");
                            Text.width(76);
                            __Text__tableStyle();
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            SymbolGlyph.create({ "id": 125831713, "type": 40000, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                            SymbolGlyph.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(355:19)", "entry");
                            SymbolGlyph.fontSize(20);
                            SymbolGlyph.fontColor(['#99000000']);
                            SymbolGlyph.bindMenu({ builder: () => {
                                    this.menuBuilder.call(this, kvStore);
                                } });
                            SymbolGlyph.width(40);
                            SymbolGlyph.height(20);
                        }, SymbolGlyph);
                        Row.pop();
                    };
                    this.forEachUpdateFunction(elmtId, this.kvStoreAll, forEachItemGenFunction, (kvStore: KVStoreType) => JSON.stringify(kvStore), false, false);
                }, ForEach);
                ForEach.pop();
                Column.pop();
                Column.pop();
                Scroll.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(395:9)", "entry");
                    Column.width('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" });
                    Button.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(396:11)", "entry");
                    Button.width('100%');
                    Button.onClick(() => {
                        this.isInsetShow = true;
                        this.text = 'number';
                        this.index = 0;
                    });
                    Button.bindSheet(this.isInsetShow, { builder: () => {
                            this.insertBindSheet.call(this);
                        } }, {
                        height: 440,
                        title: { title: { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" } },
                        onDisappear: () => {
                            this.isInsetShow = false;
                        }
                    });
                }, Button);
                Button.pop();
                Column.pop();
                Column.pop();
            }, { moduleName: "entry", pagePath: "entry/src/main/ets/pages/ReadWritePage" });
            NavDestination.width('100%');
            NavDestination.height('100%');
            NavDestination.title(getContext(this).resourceManager.getStringSync({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.kvstore", "moduleName": "entry" }));
            NavDestination.backgroundColor('#F1F3F5');
            NavDestination.debugLine("entry/src/main/ets/pages/ReadWritePage.ets(312:5)", "entry");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
