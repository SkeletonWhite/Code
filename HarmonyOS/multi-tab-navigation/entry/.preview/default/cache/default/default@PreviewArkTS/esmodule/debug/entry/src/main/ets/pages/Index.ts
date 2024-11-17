if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    routes?: Route[];
}
import router from "@ohos:router";
import { Constants } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
import type { Route, ChildRoute } from "@bundle:com.example.multitabs/entry/ets/common/Constants";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.routes = Constants.ROUTES;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.routes !== undefined) {
            this.routes = params.routes;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private routes: Route[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(25:5)", "entry");
            Column.padding({ top: { "id": 16777427, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Column.backgroundColor({ "id": 16777379, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Column.width(Constants.FULL_WIDTH);
            Column.height(Constants.FULL_HEIGHT);
            Column.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP]);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/Index.ets(26:7)", "entry");
            Row.width(Constants.INDEX_CONTENT_WIDTH);
            Row.height(Constants.INDEX_TITLE_HEIGHT);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777280, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/Index.ets(27:9)", "entry");
            Text.fontWeight(FontWeight.Bold);
            Text.fontSize({ "id": 16777436, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.width(Constants.FULL_WIDTH);
            Text.fontColor({ "id": 16777397, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("entry/src/main/ets/pages/Index.ets(36:7)", "entry");
            Scroll.height({ "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/Index.ets(37:9)", "entry");
            Column.width(Constants.FULL_WIDTH);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("entry/src/main/ets/pages/Index.ets(39:13)", "entry");
                    Row.height(Constants.CARD_TITLE_HEIGHT);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.debugLine("entry/src/main/ets/pages/Index.ets(40:15)", "entry");
                    Text.width(Constants.INDEX_CONTENT_WIDTH);
                    Text.fontSize({ "id": 16777404, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                    Text.fontColor({ "id": 16777377, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("entry/src/main/ets/pages/Index.ets(47:13)", "entry");
                    Column.margin({ top: { "id": 16777414, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }, bottom: { "id": 16777413, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
                    Column.borderRadius(Constants.BORDER_RADIUS_INDEX_LIST);
                    Column.backgroundColor(Color.White);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index: number) => {
                        const itemChild = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("entry/src/main/ets/pages/Index.ets(49:17)", "entry");
                            Column.onClick(() => {
                                router.pushUrl({
                                    url: 'pages/' + itemChild.to
                                });
                            });
                            Column.width(Constants.INDEX_CONTENT_WIDTH);
                            Column.height(Constants.CARD_TEXT_HEIGHT);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(itemChild.text);
                            Text.debugLine("entry/src/main/ets/pages/Index.ets(50:19)", "entry");
                            Text.width(Constants.FULL_WIDTH);
                            Text.height(Constants.CARD_TEXT_HEIGHT);
                            Text.fontWeight(FontWeight.Medium);
                            Text.padding({ left: { "id": 16777424, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
                            Text.fontSize({ "id": 16777435, "type": 10002, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (item.child.length - 1 !== index) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        Row.create();
                                        Row.debugLine("entry/src/main/ets/pages/Index.ets(58:21)", "entry");
                                        Row.height(Constants.DIVIDER_HEIGHT);
                                        Row.backgroundColor({ "id": 16777376, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
                                        Row.width(Constants.DIVIDER_WIDTH);
                                    }, Row);
                                    Row.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                });
                            }
                        }, If);
                        If.pop();
                        Column.pop();
                    };
                    this.forEachUpdateFunction(elmtId, item.child, forEachItemGenFunction, (item: ChildRoute, index: number) => JSON.stringify(item) + index, true, true);
                }, ForEach);
                ForEach.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.routes, forEachItemGenFunction, (item: Route, index: number) => JSON.stringify(item) + index, false, true);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.multitabs", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
