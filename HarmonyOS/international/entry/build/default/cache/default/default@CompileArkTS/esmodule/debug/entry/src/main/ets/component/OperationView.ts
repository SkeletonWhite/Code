if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OperationView_Params {
    operationKey?: string | Resource;
    showArrow?: boolean;
    handleClick?: () => void;
}
export default class OperationView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.operationKey = '';
        this.showArrow = true;
        this.handleClick = (): void => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OperationView_Params) {
        if (params.operationKey !== undefined) {
            this.operationKey = params.operationKey;
        }
        if (params.showArrow !== undefined) {
            this.showArrow = params.showArrow;
        }
        if (params.handleClick !== undefined) {
            this.handleClick = params.handleClick;
        }
    }
    updateStateVars(params: OperationView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private operationKey: string | Resource;
    private showArrow: boolean;
    private handleClick: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(56);
            Row.padding(12);
            Row.border({ radius: 16 });
            Row.backgroundColor(Color.White);
            Row.onClick(this.handleClick);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.operationKey);
            Text.fontSize(16);
            Text.fontColor(Color.Black);
            Text.height('100%');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showArrow) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
                        Image.height(24);
                        Image.width(12);
                    }, Image);
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
