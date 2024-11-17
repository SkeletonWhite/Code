if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Side_Params {
    likeCount?: number;
    commentCount?: number;
    favoriteCount?: number;
    isFocus?: boolean;
    isLike?: boolean;
    isFavorite?: boolean;
    utils?;
    head?: Resource;
}
import { TabContentConstants } from "@bundle:com.example.multitabs/entry/ets/common/TabContentConstants";
import { Utils } from "@bundle:com.example.multitabs/entry/ets/common/Utils";
export class Side extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__likeCount = new ObservedPropertySimplePU(TabContentConstants.SIDE_NUMBER, this, "likeCount");
        this.__commentCount = new ObservedPropertySimplePU(TabContentConstants.SIDE_NUMBER, this, "commentCount");
        this.__favoriteCount = new ObservedPropertySimplePU(TabContentConstants.SIDE_NUMBER, this, "favoriteCount");
        this.__isFocus = new ObservedPropertySimplePU(false, this, "isFocus");
        this.__isLike = new ObservedPropertySimplePU(false, this, "isLike");
        this.__isFavorite = new ObservedPropertySimplePU(false, this, "isFavorite");
        this.utils = new Utils();
        this.head = { "id": 16777450, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Side_Params) {
        if (params.likeCount !== undefined) {
            this.likeCount = params.likeCount;
        }
        if (params.commentCount !== undefined) {
            this.commentCount = params.commentCount;
        }
        if (params.favoriteCount !== undefined) {
            this.favoriteCount = params.favoriteCount;
        }
        if (params.isFocus !== undefined) {
            this.isFocus = params.isFocus;
        }
        if (params.isLike !== undefined) {
            this.isLike = params.isLike;
        }
        if (params.isFavorite !== undefined) {
            this.isFavorite = params.isFavorite;
        }
        if (params.utils !== undefined) {
            this.utils = params.utils;
        }
        if (params.head !== undefined) {
            this.head = params.head;
        }
    }
    updateStateVars(params: Side_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__likeCount.purgeDependencyOnElmtId(rmElmtId);
        this.__commentCount.purgeDependencyOnElmtId(rmElmtId);
        this.__favoriteCount.purgeDependencyOnElmtId(rmElmtId);
        this.__isFocus.purgeDependencyOnElmtId(rmElmtId);
        this.__isLike.purgeDependencyOnElmtId(rmElmtId);
        this.__isFavorite.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__likeCount.aboutToBeDeleted();
        this.__commentCount.aboutToBeDeleted();
        this.__favoriteCount.aboutToBeDeleted();
        this.__isFocus.aboutToBeDeleted();
        this.__isLike.aboutToBeDeleted();
        this.__isFavorite.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __likeCount: ObservedPropertySimplePU<number>;
    get likeCount() {
        return this.__likeCount.get();
    }
    set likeCount(newValue: number) {
        this.__likeCount.set(newValue);
    }
    private __commentCount: ObservedPropertySimplePU<number>;
    get commentCount() {
        return this.__commentCount.get();
    }
    set commentCount(newValue: number) {
        this.__commentCount.set(newValue);
    }
    private __favoriteCount: ObservedPropertySimplePU<number>;
    get favoriteCount() {
        return this.__favoriteCount.get();
    }
    set favoriteCount(newValue: number) {
        this.__favoriteCount.set(newValue);
    }
    private __isFocus: ObservedPropertySimplePU<boolean>;
    get isFocus() {
        return this.__isFocus.get();
    }
    set isFocus(newValue: boolean) {
        this.__isFocus.set(newValue);
    }
    private __isLike: ObservedPropertySimplePU<boolean>;
    get isLike() {
        return this.__isLike.get();
    }
    set isLike(newValue: boolean) {
        this.__isLike.set(newValue);
    }
    private __isFavorite: ObservedPropertySimplePU<boolean>;
    get isFavorite() {
        return this.__isFavorite.get();
    }
    set isFavorite(newValue: boolean) {
        this.__isFavorite.set(newValue);
    }
    private utils;
    private head: Resource;
    // Callback function for clicking the like button.
    private changeLikeCount() {
        if (!this.isLike) {
            this.likeCount++;
        }
        else {
            this.likeCount--;
        }
        Context.animateTo({ duration: TabContentConstants.TAB_DURATION, curve: Curve.EaseInOut }, () => {
            this.isLike = !this.isLike;
        });
    }
    // Callback function for clicking the favorites button.
    private changeFavoriteCount() {
        if (!this.isFavorite) {
            this.favoriteCount++;
        }
        else {
            this.favoriteCount--;
        }
        Context.animateTo({ duration: TabContentConstants.TAB_DURATION, curve: Curve.EaseInOut }, () => {
            this.isFavorite = !this.isFavorite;
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/view/Side.ets(55:5)", "entry");
            RelativeContainer.height({ "id": 16777326, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            RelativeContainer.width({ "id": 16777327, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.head);
            Image.debugLine("entry/src/main/ets/view/Side.ets(56:7)", "entry");
            Image.width({ "id": 16777307, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777306, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.borderRadius(TabContentConstants.TAB_HEAD_IMAGE_BORDER_RADIUS);
            Image.border({
                width: { "id": 16777305, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                color: Color.White
            });
            Image.id(TabContentConstants.TAB_HEAD_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            Image.margin({ left: TabContentConstants.TAB_HEAD_IMAGE_MARGIN_LEFT });
            Image.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isFocus ? { "id": 16777440, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777365, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/Side.ets(73:7)", "entry");
            Image.width({ "id": 16777303, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777301, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.borderRadius({ "id": 16777300, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.margin({
                top: { "id": 16777302, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                left: { "id": 16777302, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
            Image.onClick(() => {
                Context.animateTo({ duration: TabContentConstants.TAB_DURATION, curve: Curve.EaseInOut }, () => {
                    this.isFocus = !this.isFocus;
                });
            });
            Image.id(TabContentConstants.TAB_FOCUS_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_HEAD_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_HEAD_IMAGE, align: HorizontalAlign.Center }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isLike ? { "id": 16777459, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777288, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/Side.ets(91:7)", "entry");
            Image.width({ "id": 16777313, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777311, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.objectFit(ImageFit.ScaleDown);
            Image.onClick(() => {
                this.changeLikeCount();
            });
            Image.id(TabContentConstants.TAB_LIKE_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_FOCUS_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Image.margin({ top: { "id": 16777312, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.likeCount.toString());
            Text.debugLine("entry/src/main/ets/view/Side.ets(105:7)", "entry");
            Text.fontSize({ "id": 16777314, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.opacity(TabContentConstants.TAB_TEXT_OPACITY);
            Text.id(TabContentConstants.TAB_LIKE_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_LIKE_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Text.margin({ top: { "id": 16777315, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777367, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/Side.ets(117:7)", "entry");
            Image.width({ "id": 16777313, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777311, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.objectFit(ImageFit.ScaleDown);
            Image.id(TabContentConstants.TAB_COMMENT_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_LIKE_TEXT, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Image.margin({ top: { "id": 16777312, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Image.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.commentCount.toString());
            Text.debugLine("entry/src/main/ets/view/Side.ets(131:7)", "entry");
            Text.fontSize({ "id": 16777314, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.opacity(TabContentConstants.TAB_TEXT_OPACITY);
            Text.id(TabContentConstants.TAB_COMMENT_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_COMMENT_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Text.margin({ top: { "id": 16777315, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.isFavorite ? { "id": 16777451, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777368, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/Side.ets(143:7)", "entry");
            Image.width({ "id": 16777313, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777311, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.onClick(() => {
                this.changeFavoriteCount();
            });
            Image.id(TabContentConstants.TAB_FAVORITE_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_COMMENT_TEXT, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Image.margin({ top: { "id": 16777312, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.favoriteCount.toString());
            Text.debugLine("entry/src/main/ets/view/Side.ets(157:7)", "entry");
            Text.fontSize({ "id": 16777314, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.opacity(TabContentConstants.TAB_TEXT_OPACITY);
            Text.id(TabContentConstants.TAB_FAVORITE_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_FAVORITE_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Text.margin({ top: { "id": 16777315, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777399, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/Side.ets(169:7)", "entry");
            Image.width({ "id": 16777313, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.height({ "id": 16777311, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.objectFit(ImageFit.ScaleDown);
            Image.id(TabContentConstants.TAB_SHARE_IMAGE);
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_FAVORITE_TEXT, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Image.margin({ top: { "id": 16777312, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            Image.onClick(() => {
                this.utils.showPromptAction();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777272, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/Side.ets(183:7)", "entry");
            Text.fontSize({ "id": 16777314, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.opacity(TabContentConstants.TAB_TEXT_OPACITY);
            Text.id(TabContentConstants.TAB_SHARE_TEXT);
            Text.textAlign(TextAlign.Center);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_SHARE_IMAGE, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            Text.margin({ top: { "id": 16777315, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
