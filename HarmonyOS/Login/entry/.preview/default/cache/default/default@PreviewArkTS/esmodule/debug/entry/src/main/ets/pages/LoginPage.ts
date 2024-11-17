if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface LoginBottom_Params {
    account?: string;
    password?: string;
}
interface LoginTitle_Params {
}
interface LoginPage_Params {
    currentDeviceSize?: string;
}
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import StyleConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/StyleConstants";
import CommonUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/CommonUtils";
import MultipleDevicesUtils from "@bundle:com.huawei.logindemo/entry/ets/common/utils/MultipleDevicesUtils";
class LoginPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentDeviceSize = this.createStorageProp('currentDeviceSize', CommonConstants.SM, "currentDeviceSize");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LoginPage_Params) {
    }
    updateStateVars(params: LoginPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentDeviceSize.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentDeviceSize.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentDeviceSize: ObservedPropertyAbstractPU<string>;
    get currentDeviceSize() {
        return this.__currentDeviceSize.get();
    }
    set currentDeviceSize(newValue: string) {
        this.__currentDeviceSize.set(newValue);
    }
    onPageShow() {
        MultipleDevicesUtils.register();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridRow.create({
                columns: {
                    sm: StyleConstants.COLUMNS_SM,
                    md: StyleConstants.COLUMNS_MD,
                    lg: StyleConstants.COLUMNS_LG
                },
                gutter: {
                    x: StyleConstants.GRID_GUTTER
                }
            });
            GridRow.debugLine("entry/src/main/ets/pages/LoginPage.ets(36:5)", "entry");
            GridRow.backgroundColor({ "id": 16777292, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, GridRow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            GridCol.create({
                span: {
                    sm: StyleConstants.SPAN_SM,
                    md: StyleConstants.SPAN_MD,
                    lg: StyleConstants.SPAN_LG
                }, offset: {
                    md: StyleConstants.OFFSET_MD,
                    lg: StyleConstants.OFFSET_LG
                }
            });
            GridCol.debugLine("entry/src/main/ets/pages/LoginPage.ets(46:7)", "entry");
        }, GridCol);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LoginPage.ets(56:9)", "entry");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Title component
                    LoginTitle(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/LoginPage.ets", line: 58, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "LoginTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Bottom component
                    LoginBottom(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/LoginPage.ets", line: 60, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "LoginBottom" });
        }
        Column.pop();
        GridCol.pop();
        GridRow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "LoginPage";
    }
}
class LoginTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LoginTitle_Params) {
    }
    updateStateVars(params: LoginTitle_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LoginPage.ets(72:5)", "entry");
            Column.backgroundColor({ "id": 16777292, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Column.justifyContent(FlexAlign.Center);
            Column.width(StyleConstants.FULL_PARENT);
            Column.height(StyleConstants.LOGIN_LOGO_HEIGHT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777389, "type": 20000, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/pages/LoginPage.ets(73:7)", "entry");
            Image.width({ "id": 16777349, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.height({ "id": 16777349, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Image.margin({ bottom: { "id": 16777350, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777240, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/LoginPage.ets(77:7)", "entry");
            Text.fontSize({ "id": 16777319, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor({ "id": 16777305, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777239, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/LoginPage.ets(81:7)", "entry");
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontColor({ "id": 16777302, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.margin({
                top: { "id": 16777366, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777365, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class LoginBottom extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__account = new ObservedPropertySimplePU('', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: LoginBottom_Params) {
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
    }
    updateStateVars(params: LoginBottom_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __account: ObservedPropertySimplePU<string>;
    get account() {
        return this.__account.get();
    }
    set account(newValue: string) {
        this.__account.set(newValue);
    }
    private __password: ObservedPropertySimplePU<string>;
    get password() {
        return this.__password.get();
    }
    set password(newValue: string) {
        this.__password.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LoginPage.ets(103:5)", "entry");
            Column.padding({
                left: { "id": 16777344, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                right: { "id": 16777345, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
            });
            Column.backgroundColor({ "id": 16777292, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Column.height(StyleConstants.LOGIN_BOTTOM_HEIGHT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/LoginPage.ets(104:7)", "entry");
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 16777348, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: { "id": 16777227, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            TextInput.debugLine("entry/src/main/ets/pages/LoginPage.ets(105:9)", "entry");
            TextInput.maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Number);
            __TextInput__inputStyle();
            TextInput.onChange((value: string) => {
                this.account = value;
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Line.create();
            Line.debugLine("entry/src/main/ets/pages/LoginPage.ets(113:9)", "entry");
            Line.width(StyleConstants.FULL_PARENT);
            Line.height({ "id": 16777334, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Line.margin({
                left: { "id": 16777335, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                right: { "id": 16777336, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Line.backgroundColor({ "id": 16777296, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
        }, Line);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: { "id": 16777281, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            TextInput.debugLine("entry/src/main/ets/pages/LoginPage.ets(122:9)", "entry");
            TextInput.maxLength(StyleConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange((value: string) => {
                this.password = value;
            });
        }, TextInput);
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/LoginPage.ets(133:7)", "entry");
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(StyleConstants.FULL_PARENT);
            Row.margin({ top: { "id": 16777320, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
            Row.padding({
                left: { "id": 16777321, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                right: { "id": 16777322, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777249, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/LoginPage.ets(134:9)", "entry");
            __Text__blueTextStyle();
            Text.onClick(() => {
                CommonUtils.showToastContent({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/LoginPage.ets(139:9)", "entry");
            __Text__blueTextStyle();
            Text.onClick(() => {
                CommonUtils.showToastContent({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777238, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.debugLine("entry/src/main/ets/pages/LoginPage.ets(153:7)", "entry");
            Button.id(CommonConstants.LOGIN_BUTTON_ID);
            Button.width(StyleConstants.FULL_PARENT);
            Button.height({ "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777297, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Button.margin({
                top: { "id": 16777346, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" },
                bottom: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" }
            });
            Button.onClick(() => {
                CommonUtils.loginArkTS(this.account, this.password);
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777285, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/pages/LoginPage.ets(167:7)", "entry");
            Text.fontColor({ "id": 16777293, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.onClick(() => {
                CommonUtils.showToastContent({ "id": 16777237, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
            });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __TextInput__inputStyle(): void {
    TextInput.placeholderColor({ "id": 16777303, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
    TextInput.height({ "id": 16777347, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
    TextInput.backgroundColor(Color.White);
    TextInput.margin({ top: { "id": 16777332, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" } });
    TextInput.padding({ left: StyleConstants.INPUT_PADDING_LEFT });
}
function __Text__blueTextStyle(): void {
    Text.fontColor({ "id": 16777293, "type": 10001, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
    Text.fontSize({ "id": 16777368, "type": 10002, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" });
    Text.fontWeight(FontWeight.Medium);
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(2, "LoginTitle", new LoginTitle(undefined, {}), "LoginBottom", new LoginBottom(undefined, {}));
    previewComponent();
}
else {
    registerNamedRoute(() => new LoginPage(undefined, {}), "", { bundleName: "com.huawei.logindemo", moduleName: "entry", pagePath: "pages/LoginPage", pageFullPath: "entry/src/main/ets/pages/LoginPage", integratedHsp: "false" });
}
