if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ChatContent_Params {
    item?: ChatData;
    changeFontSize?: number;
    isLineFeed?: boolean;
}
interface ChatItemComponent_Params {
    item?: ChatData;
    changeFontSize?: number;
}
import ChatData from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/ChatData";
import { ItemDirection } from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/ItemDirection";
import StyleConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/StyleConstants";
export default class ChatItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = new ChatData();
        this.__changeFontSize = new SynchedPropertySimpleOneWayPU(params.changeFontSize, this, "changeFontSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ChatItemComponent_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.changeFontSize === undefined) {
            this.__changeFontSize.set(0);
        }
    }
    updateStateVars(params: ChatItemComponent_Params) {
        this.__changeFontSize.reset(params.changeFontSize);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item: ChatData;
    private __changeFontSize: SynchedPropertySimpleOneWayPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/ChatItemComponent.ets(29:5)", "entry");
            Row.alignItems(VerticalAlign.Top);
            Row.width(StyleConstants.FULL_WIDTH);
            Row.direction(this.item.itemDirection === ItemDirection.RIGHT ? Direction.Rtl : Direction.Ltr);
            Row.margin({ top: StyleConstants.CHAT_TOP_MARGIN_PERCENT });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.item.itemDirection === ItemDirection.RIGHT ? { "id": 16777275, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } : { "id": 16777270, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/ChatItemComponent.ets(30:7)", "entry");
            Image.width(StyleConstants.SET_CHAT_HEAD_SIZE_PERCENT);
            Image.aspectRatio(StyleConstants.HEAD_ASPECT_RATIO);
            Image.margin({
                left: this.item.itemDirection === ItemDirection.RIGHT
                    ? StyleConstants.HEAD_LEFT_PERCENT : StyleConstants.HEAD_RIGHT_PERCENT,
                right: this.item.itemDirection === ItemDirection.RIGHT
                    ? StyleConstants.HEAD_RIGHT_PERCENT : StyleConstants.HEAD_LEFT_PERCENT
            });
        }, Image);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ChatContent(this, { item: this.item, changeFontSize: this.changeFontSize }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/ChatItemComponent.ets", line: 40, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            item: this.item,
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
            }, { name: "ChatContent" });
        }
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ChatContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.item = new ChatData();
        this.__changeFontSize = new SynchedPropertySimpleOneWayPU(params.changeFontSize, this, "changeFontSize");
        this.__isLineFeed = new ObservedPropertySimplePU(false, this, "isLineFeed");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ChatContent_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.changeFontSize === undefined) {
            this.__changeFontSize.set(0);
        }
        if (params.isLineFeed !== undefined) {
            this.isLineFeed = params.isLineFeed;
        }
    }
    updateStateVars(params: ChatContent_Params) {
        this.__changeFontSize.reset(params.changeFontSize);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__changeFontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__isLineFeed.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__changeFontSize.aboutToBeDeleted();
        this.__isLineFeed.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private item: ChatData;
    private __changeFontSize: SynchedPropertySimpleOneWayPU<number>;
    get changeFontSize() {
        return this.__changeFontSize.get();
    }
    set changeFontSize(newValue: number) {
        this.__changeFontSize.set(newValue);
    }
    private __isLineFeed: ObservedPropertySimplePU<boolean>;
    get isLineFeed() {
        return this.__isLineFeed.get();
    }
    set isLineFeed(newValue: boolean) {
        this.__isLineFeed.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/view/ChatItemComponent.ets(57:5)", "entry");
            Row.constraintSize({ maxWidth: StyleConstants.MAX_CHAT_WIDTH_PERCENT });
            Row.direction(Direction.Ltr);
            Row.padding({
                left: { "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                right: { "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                top: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" },
                bottom: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" }
            });
            Row.backgroundColor(this.item.itemDirection === ItemDirection.RIGHT
                ? { "id": 16777219, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" } : { "id": 16777218, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Row.borderRadius({ "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.content);
            Text.debugLine("entry/src/main/ets/view/ChatItemComponent.ets(58:7)", "entry");
            Text.fontColor({ "id": 16777221, "type": 10001, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" });
            Text.fontSize(this.changeFontSize + StyleConstants.UNIT_FP);
            Text.fontWeight(FontWeight.Medium);
            Text.onAreaChange((oldValue: Area, newValue: Area) => {
                this.isLineFeed = newValue.height > StyleConstants.DOUBLE_ROW_MIN;
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isLineFeed) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Blank.create();
                        Blank.debugLine("entry/src/main/ets/view/ChatItemComponent.ets(66:9)", "entry");
                        Blank.layoutWeight(StyleConstants.WEIGHT_FULL);
                    }, Blank);
                    Blank.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
