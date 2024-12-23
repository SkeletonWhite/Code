if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TopView_Params {
    utils?;
}
import { TabContentConstants } from "@bundle:com.example.multitabs/entry/ets/common/TabContentConstants";
import { Utils } from "@bundle:com.example.multitabs/entry/ets/common/Utils";
export class TopView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.utils = new Utils();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TopView_Params) {
        if (params.utils !== undefined) {
            this.utils = params.utils;
        }
    }
    updateStateVars(params: TopView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private utils;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/view/TopView.ets(24:5)", "entry");
            RelativeContainer.height({ "id": 16777354, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777458, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/TopView.ets(25:7)", "entry");
            Image.width({ "id": 16777335, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777334, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.id(TabContentConstants.TAB_SEARCH_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            Image.margin({
                top: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                left: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
            Image.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777262, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/TopView.ets(40:7)", "entry");
            Text.fontColor({ "id": 16777387, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontSize({ "id": 16777339, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.width({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.id(TabContentConstants.TAB_FOLLOW_TEXT);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_SEARCH_IMAGE, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_SEARCH_IMAGE, align: HorizontalAlign.End }
            });
            Text.textAlign(TextAlign.Center);
            Text.margin({ left: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Text.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777271, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/TopView.ets(54:7)", "entry");
            Text.fontColor(Color.White);
            Text.fontSize({ "id": 16777339, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.width({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.id(TabContentConstants.TAB_SELECTED_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_FOLLOW_TEXT, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_FOLLOW_TEXT, align: HorizontalAlign.End }
            });
            Text.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777269, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/TopView.ets(67:7)", "entry");
            Text.fontColor({ "id": 16777387, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontSize({ "id": 16777339, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.width({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.id(TabContentConstants.TAB_RECOMMENDATION_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_SELECTED_TEXT, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_SELECTED_TEXT, align: HorizontalAlign.End }
            });
            Text.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777270, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/TopView.ets(80:7)", "entry");
            Text.fontColor({ "id": 16777387, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontSize({ "id": 16777339, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.width({ "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.id(TabContentConstants.TAB_SCREENING_HALL_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_RECOMMENDATION_TEXT, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_RECOMMENDATION_TEXT, align: HorizontalAlign.End }
            });
            Text.margin({ right: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Text.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("entry/src/main/ets/view/TopView.ets(94:7)", "entry");
            Divider.width({ "id": 16777338, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Divider.strokeWidth(TabContentConstants.TAB_TWO);
            Divider.color(Color.White);
            Divider.margin({ top: { "id": 16777299, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Divider.id(TabContentConstants.TAB_TOP_VIEW_DIVIDER);
            Divider.alignRules({
                top: { anchor: TabContentConstants.TAB_SELECTED_TEXT, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_SELECTED_TEXT, align: HorizontalAlign.Center }
            });
            Divider.margin({
                top: { "id": 16777353, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                left: { "id": 16777352, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777446, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/TopView.ets(108:7)", "entry");
            Image.width({ "id": 16777335, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777334, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.id(TabContentConstants.TAB_ADD_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Top },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Image.margin({
                top: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                right: { "id": 16777336, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
            Image.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Image);
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
