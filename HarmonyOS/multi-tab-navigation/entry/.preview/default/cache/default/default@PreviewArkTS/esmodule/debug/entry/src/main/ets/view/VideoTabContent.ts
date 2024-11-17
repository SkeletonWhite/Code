if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VideoTabContent_Params {
    offsetX?: number;
    positionX?: number;
    isPlay?: boolean;
    playTime?: string;
    isTouch?: boolean;
    totalTime?: number;
    isTextButtonVisible?: boolean;
    videoController?: VideoController;
    panOption?: PanGestureOptions;
    screenW?: number;
}
import display from "@ohos:display";
import { Side } from "@bundle:com.example.multitabs/entry/ets/view/Side";
import { VideoDes } from "@bundle:com.example.multitabs/entry/ets/view/VideoDes";
import { TopView } from "@bundle:com.example.multitabs/entry/ets/view/TopView";
import { TabContentConstants } from "@bundle:com.example.multitabs/entry/ets/common/TabContentConstants";
export class VideoTabContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__offsetX = new ObservedPropertySimplePU(0, this, "offsetX");
        this.__positionX = new ObservedPropertySimplePU(0, this, "positionX");
        this.__isPlay = new ObservedPropertySimplePU(false, this, "isPlay");
        this.__playTime = new ObservedPropertySimplePU('', this, "playTime");
        this.__isTouch = new ObservedPropertySimplePU(false, this, "isTouch");
        this.__totalTime = new ObservedPropertySimplePU(0, this, "totalTime");
        this.__isTextButtonVisible = new ObservedPropertySimplePU(true, this, "isTextButtonVisible");
        this.videoController = new VideoController();
        this.panOption = new PanGestureOptions({
            direction: PanDirection.Left | PanDirection.Right
        });
        this.screenW = px2vp(display.getDefaultDisplaySync().width);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VideoTabContent_Params) {
        if (params.offsetX !== undefined) {
            this.offsetX = params.offsetX;
        }
        if (params.positionX !== undefined) {
            this.positionX = params.positionX;
        }
        if (params.isPlay !== undefined) {
            this.isPlay = params.isPlay;
        }
        if (params.playTime !== undefined) {
            this.playTime = params.playTime;
        }
        if (params.isTouch !== undefined) {
            this.isTouch = params.isTouch;
        }
        if (params.totalTime !== undefined) {
            this.totalTime = params.totalTime;
        }
        if (params.isTextButtonVisible !== undefined) {
            this.isTextButtonVisible = params.isTextButtonVisible;
        }
        if (params.videoController !== undefined) {
            this.videoController = params.videoController;
        }
        if (params.panOption !== undefined) {
            this.panOption = params.panOption;
        }
        if (params.screenW !== undefined) {
            this.screenW = params.screenW;
        }
    }
    updateStateVars(params: VideoTabContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__offsetX.purgeDependencyOnElmtId(rmElmtId);
        this.__positionX.purgeDependencyOnElmtId(rmElmtId);
        this.__isPlay.purgeDependencyOnElmtId(rmElmtId);
        this.__playTime.purgeDependencyOnElmtId(rmElmtId);
        this.__isTouch.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTime.purgeDependencyOnElmtId(rmElmtId);
        this.__isTextButtonVisible.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__offsetX.aboutToBeDeleted();
        this.__positionX.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__playTime.aboutToBeDeleted();
        this.__isTouch.aboutToBeDeleted();
        this.__totalTime.aboutToBeDeleted();
        this.__isTextButtonVisible.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // Used to record the real-time dragging distance.
    private __offsetX: ObservedPropertySimplePU<number>;
    get offsetX() {
        return this.__offsetX.get();
    }
    set offsetX(newValue: number) {
        this.__offsetX.set(newValue);
    }
    // Used to record the distance after dragging.
    private __positionX: ObservedPropertySimplePU<number>;
    get positionX() {
        return this.__positionX.get();
    }
    set positionX(newValue: number) {
        this.__positionX.set(newValue);
    }
    // Used to control the playback status.
    private __isPlay: ObservedPropertySimplePU<boolean>;
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue: boolean) {
        this.__isPlay.set(newValue);
    }
    // Used to record the current playback time.
    private __playTime: ObservedPropertySimplePU<string>;
    get playTime() {
        return this.__playTime.get();
    }
    set playTime(newValue: string) {
        this.__playTime.set(newValue);
    }
    private __isTouch: ObservedPropertySimplePU<boolean>;
    get isTouch() {
        return this.__isTouch.get();
    }
    set isTouch(newValue: boolean) {
        this.__isTouch.set(newValue);
    }
    // Used to record the total duration of a video.
    private __totalTime: ObservedPropertySimplePU<number>;
    get totalTime() {
        return this.__totalTime.get();
    }
    set totalTime(newValue: number) {
        this.__totalTime.set(newValue);
    }
    private __isTextButtonVisible: ObservedPropertySimplePU<boolean>;
    get isTextButtonVisible() {
        return this.__isTextButtonVisible.get();
    }
    set isTextButtonVisible(newValue: boolean) {
        this.__isTextButtonVisible.set(newValue);
    }
    private videoController: VideoController;
    // Sets the dragging direction.
    private panOption: PanGestureOptions;
    // Obtains the device width.
    private screenW: number;
    private dragAnimation() {
        Context.animateTo({
            duration: TabContentConstants.TAB_TOAST_DURATION,
            curve: Curve.EaseOut
        }, () => {
            this.isTouch = true;
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/view/VideoTabContent.ets(54:5)", "entry");
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Video.create({
                src: { "id": 0, "type": 30000, params: ['tab_play_video.MP4'], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                currentProgressRate: PlaybackSpeed.Speed_Forward_1_00_X,
                previewUri: { "id": 16777469, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                controller: this.videoController
            });
            Video.debugLine("entry/src/main/ets/view/VideoTabContent.ets(55:7)", "entry");
            Video.height({ "id": 16777276, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Video.width({ "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Video.objectFit(ImageFit.Cover);
            Video.autoPlay(false);
            Video.controls(false);
            Video.onPrepared((event) => {
                if (event !== undefined) {
                    this.totalTime = event.duration;
                }
            });
            Video.onFinish(() => {
                this.isPlay = false;
            });
            Video.onUpdate((event) => {
                if (event !== undefined) {
                    if (!this.isTouch) {
                        // The progress bar changes according to the playback progress.
                        this.offsetX =
                            event.time / this.totalTime * (this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER);
                        this.positionX = this.offsetX;
                    }
                }
            });
            Video.id(TabContentConstants.TAB_VIDEO);
            Video.alignRules({
                top: { anchor: TabContentConstants.TAB_CONTAINER, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            Video.onClick(() => {
                if (this.isPlay) {
                    this.isPlay = false;
                    this.videoController.pause();
                }
                else {
                    this.isPlay = true;
                    this.videoController.start();
                }
            });
        }, Video);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Play button.
            Image.create({ "id": 16777462, "type": 20000, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Image.debugLine("entry/src/main/ets/view/VideoTabContent.ets(99:7)", "entry");
            // Play button.
            Image.width({ "id": 16777309, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Play button.
            Image.height({ "id": 16777308, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Play button.
            Image.alignRules({
                top: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Top },
                bottom: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            // Play button.
            Image.id(TabContentConstants.TAB_IMAGE);
            // Play button.
            Image.onClick(() => {
                if (this.isPlay) {
                    this.isPlay = false;
                    this.videoController.pause();
                }
                else {
                    this.isPlay = true;
                    this.videoController.start();
                }
            });
            // Play button.
            Image.visibility(this.isPlay ? Visibility.Hidden : Visibility.Visible);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.alignRules({
                bottom: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            __Common__.id(TabContentConstants.TAB_VIDEO_DES);
            __Common__.margin({ bottom: { "id": 16777361, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            __Common__.visibility(this.isTouch ? Visibility.Hidden : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Displaying Video Information.
                    VideoDes(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/VideoTabContent.ets", line: 121, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "VideoDes" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.alignRules({
                top: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Center },
                right: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.End }
            });
            __Common__.id(TabContentConstants.TAB_SIDE);
            __Common__.margin({ top: { "id": 16777337, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } });
            __Common__.visibility(this.isTouch ? Visibility.Hidden : Visibility.Visible);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // Display information on the right of the video playback page.
                    Side(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/VideoTabContent.ets", line: 131, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Side" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.alignRules({
                top: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            __Common__.id(TabContentConstants.TAB_TOP_VIEW);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopView(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/VideoTabContent.ets", line: 140, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopView" });
        }
        __Common__.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Displaying the current time point when the progress bar is dragged.
            Text.create(TabContentConstants.TAB_PLAYTIME_TEXT + this.playTime);
            Text.debugLine("entry/src/main/ets/view/VideoTabContent.ets(148:7)", "entry");
            // Displaying the current time point when the progress bar is dragged.
            Text.fontSize({ "id": 16777322, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the current time point when the progress bar is dragged.
            Text.width({ "id": 16777325, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the current time point when the progress bar is dragged.
            Text.height({ "id": 16777323, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the current time point when the progress bar is dragged.
            Text.textAlign(TextAlign.End);
            // Displaying the current time point when the progress bar is dragged.
            Text.id(TabContentConstants.TAB_PLAYTIME_TEXT_ID);
            // Displaying the current time point when the progress bar is dragged.
            Text.fontColor({ "id": 16777389, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the current time point when the progress bar is dragged.
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Center }
            });
            // Displaying the current time point when the progress bar is dragged.
            Text.visibility(this.isTouch ? Visibility.Visible : Visibility.Hidden);
            // Displaying the current time point when the progress bar is dragged.
            Text.margin({
                left: { "id": 16777324, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                top: { "id": 16777324, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
        }, Text);
        // Displaying the current time point when the progress bar is dragged.
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Displaying the total video duration when the progress bar is dragged.
            Text.create(TabContentConstants.TAB_TOTAL_TIME_TEXT + this.totalTime);
            Text.debugLine("entry/src/main/ets/view/VideoTabContent.ets(165:7)", "entry");
            // Displaying the total video duration when the progress bar is dragged.
            Text.fontSize({ "id": 16777322, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the total video duration when the progress bar is dragged.
            Text.width({ "id": 16777325, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the total video duration when the progress bar is dragged.
            Text.height({ "id": 16777323, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the total video duration when the progress bar is dragged.
            Text.textAlign(TextAlign.Start);
            // Displaying the total video duration when the progress bar is dragged.
            Text.id(TabContentConstants.TAB_TOTAL_TIME_TEXT_ID);
            // Displaying the total video duration when the progress bar is dragged.
            Text.fontColor({ "id": 16777394, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            // Displaying the total video duration when the progress bar is dragged.
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_PLAYTIME_TEXT_ID, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_PLAYTIME_TEXT_ID, align: HorizontalAlign.End }
            });
            // Displaying the total video duration when the progress bar is dragged.
            Text.visibility(this.isTouch ? Visibility.Visible : Visibility.Hidden);
        }, Text);
        // Displaying the total video duration when the progress bar is dragged.
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.debugLine("entry/src/main/ets/view/VideoTabContent.ets(178:7)", "entry");
            RelativeContainer.id(TabContentConstants.TAB_RELATIVE_CONTAINER);
            RelativeContainer.alignRules({
                top: { anchor: TabContentConstants.TAB_VIDEO, align: VerticalAlign.Bottom },
                left: { anchor: TabContentConstants.TAB_CONTAINER, align: HorizontalAlign.Start }
            });
            RelativeContainer.width(this.screenW);
            RelativeContainer.height({ "id": 16777340, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Gesture.create(GesturePriority.Low);
            PanGesture.create(this.panOption);
            PanGesture.onActionStart(() => {
                this.dragAnimation();
                this.isTextButtonVisible = false;
            });
            PanGesture.onActionUpdate((event: GestureEvent) => {
                let playTime = Math.floor(this.offsetX / (this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER) * this.totalTime);
                this.offsetX = this.positionX + event.offsetX;
                if (this.offsetX <= TabContentConstants.TAB_ZERO) {
                    this.offsetX = TabContentConstants.TAB_ZERO;
                }
                if (this.offsetX >= this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER) {
                    this.offsetX = this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER;
                }
                if (playTime >= TabContentConstants.TAB_TEN) {
                    this.playTime = playTime.toString();
                }
                else {
                    this.playTime = TabContentConstants.TAB_TIME_ZERO + playTime.toString();
                }
                this.videoController.setCurrentTime(this.offsetX /
                    (this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER) * this.totalTime, SeekMode.Accurate);
            });
            PanGesture.onActionEnd(() => {
                this.positionX = this.offsetX;
                this.isTextButtonVisible = true;
                this.isTouch = false;
            });
            PanGesture.pop();
            Gesture.pop();
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("entry/src/main/ets/view/VideoTabContent.ets(179:9)", "entry");
            Text.width(this.screenW - TabContentConstants.TAB_INTERVAL_NUMBER);
            Text.height(this.isTouch ? { "id": 16777346, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777342, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.borderRadius(this.isTouch ? { "id": 16777345, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777341, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.backgroundColor({ "id": 16777391, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.translate({
                y: this.isTouch ? TabContentConstants.TAB_TEXT_TOUCH_TRANSLATE :
                    TabContentConstants.TAB_TEXT_TRANSLATE
            });
            Text.id(TabContentConstants.TAB_TEXT_ONE_ID);
            Text.margin({
                top: { "id": 16777344, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
                left: { "id": 16777343, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("entry/src/main/ets/view/VideoTabContent.ets(195:9)", "entry");
            Text.width(this.offsetX);
            Text.height(this.isTouch ? { "id": 16777346, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" } : { "id": 16777342, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.borderRadius({ "id": 16777341, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.backgroundColor({ "id": 16777392, "type": 10001, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.translate({
                y: this.isTouch ? TabContentConstants.TAB_TEXT_TOUCH_TRANSLATE :
                    TabContentConstants.TAB_TEXT_TRANSLATE
            });
            Text.id(TabContentConstants.TAB_TEXT_TWO_ID);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_TEXT_ONE_ID, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_TEXT_ONE_ID, align: HorizontalAlign.Start }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create();
            Text.debugLine("entry/src/main/ets/view/VideoTabContent.ets(210:9)", "entry");
            Text.width({ "id": 16777349, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.height({ "id": 16777348, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.borderRadius({ "id": 16777347, "type": 10007, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" });
            Text.backgroundColor(Color.White);
            Text.translate({ x: this.offsetX });
            Text.visibility(this.isTextButtonVisible ? Visibility.Visible : Visibility.None);
            Text.id(TabContentConstants.TAB_TEXT_THREE_ID);
            Text.alignRules({
                top: { anchor: TabContentConstants.TAB_TEXT_ONE_ID, align: VerticalAlign.Top },
                left: { anchor: TabContentConstants.TAB_TEXT_ONE_ID, align: HorizontalAlign.Start }
            });
            Text.margin({
                top: TabContentConstants.TAB_TEXT_THREE_MARGIN_TOP,
                left: TabContentConstants.TAB_TEXT_THREE_MARGIN_LEFT
            });
        }, Text);
        Text.pop();
        RelativeContainer.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
