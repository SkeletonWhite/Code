if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TitleBar_Params {
    title?: string | Resource;
    hasBackPress?: boolean;
}
import router from "@ohos:router";
export default class TitleBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.title = { "id": 16777217, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" };
        this.hasBackPress = false;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TitleBar_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.hasBackPress !== undefined) {
            this.hasBackPress = params.hasBackPress;
        }
    }
    updateStateVars(params: TitleBar_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string | Resource;
    private hasBackPress: boolean;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/component/TitleBar.ets(24:5)", "entry");
            Row.width('100%');
            Row.height(56);
            Row.backgroundColor(Color.Transparent);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.hasBackPress) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.debugLine("entry/src/main/ets/component/TitleBar.ets(26:9)", "entry");
                        Row.height('100%');
                        Row.aspectRatio(1);
                        Row.margin({ left: 24 });
                        Row.onClick(() => {
                            router.back();
                        });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777244, "type": 20000, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
                        Image.debugLine("entry/src/main/ets/component/TitleBar.ets(27:11)", "entry");
                        Image.id('btnBack');
                        Image.width(24);
                        Image.height(24);
                    }, Image);
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("entry/src/main/ets/component/TitleBar.ets(39:7)", "entry");
            Text.fontSize(20);
            Text.fontColor(Color.Black);
            Text.margin(this.hasBackPress ? {} : { left: 24 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("entry/src/main/ets/component/TitleBar.ets(43:7)", "entry");
        }, Blank);
        Blank.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
