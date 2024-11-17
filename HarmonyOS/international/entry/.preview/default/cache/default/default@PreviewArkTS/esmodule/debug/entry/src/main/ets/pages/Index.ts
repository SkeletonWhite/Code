if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    operations?: Array<string>;
    context?: common.UIAbilityContext;
}
import router from "@ohos:router";
import type common from "@ohos:app.ability.common";
import TitleBar from "@bundle:ohos.samples.international/entry/ets/component/TitleBar";
import OperationView from "@bundle:ohos.samples.international/entry/ets/component/OperationView";
import ResourceUtil from "@bundle:ohos.samples.international/entry/ets/util/ResourceUtil";
const operationUrls: Array<string> = ['pages/Calendar', 'pages/TextProcessing'];
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__operations = new ObservedPropertyObjectPU([], this, "operations");
        this.context = getContext(this) as common.UIAbilityContext;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.operations !== undefined) {
            this.operations = params.operations;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__operations.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__operations.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __operations: ObservedPropertyObjectPU<Array<string>>;
    get operations() {
        return this.__operations.get();
    }
    set operations(newValue: Array<string>) {
        this.__operations.set(newValue);
    }
    private context: common.UIAbilityContext;
    aboutToAppear() {
        this.getOperation();
    }
    async getOperation() {
        this.operations = await ResourceUtil.getStringArray({ "id": 16777219, "type": 10009, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }.id, this.context);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(39:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBar(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 40, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/Index.ets(42:9)", "entry");
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.id(`operationView_${index}`);
                    __Common__.margin({ left: 12, right: 12, top: 12 });
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new OperationView(this, {
                                operationKey: item, handleClick: () => {
                                    router.pushUrl({
                                        url: operationUrls[index]
                                    });
                                }
                            }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 43, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    operationKey: item,
                                    handleClick: () => {
                                        router.pushUrl({
                                            url: operationUrls[index]
                                        });
                                    }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "OperationView" });
                }
                __Common__.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.operations, forEachItemGenFunction, (item: string) => item, true, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "ohos.samples.international", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
