if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Title_Params {
    currentYear?: number;
    currentMonth?: number;
    goToday?: () => void;
}
interface CalendarView_Params {
    currentYear?: number;
    currentMonth?: number;
    daysData?: Day[];
    calendar?;
    toDayY?: number;
    toDayM?: number;
    toDayD?: number;
}
import i18n from "@ohos:i18n";
import TitleBar from "@bundle:ohos.samples.international/entry/ets/component/TitleBar";
const WEEK_TITLE = [{ "id": 16777226, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777235, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777236, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777233, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777223, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777227, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }, { "id": 16777229, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }];
interface Day {
    isCurrentMonth: boolean;
    isToday: boolean;
    date: number;
}
;
class CalendarView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentYear = new ObservedPropertySimplePU(0, this, "currentYear");
        this.__currentMonth = new ObservedPropertySimplePU(0, this, "currentMonth");
        this.__daysData = new ObservedPropertyObjectPU([], this, "daysData");
        this.calendar = i18n.getCalendar('en-US');
        this.toDayY = this.calendar.get('year');
        this.toDayM = this.calendar.get('month');
        this.toDayD = this.calendar.get('date');
        this.setInitiallyProvidedValue(params);
        this.declareWatch("currentMonth", this.refreshData);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CalendarView_Params) {
        if (params.currentYear !== undefined) {
            this.currentYear = params.currentYear;
        }
        if (params.currentMonth !== undefined) {
            this.currentMonth = params.currentMonth;
        }
        if (params.daysData !== undefined) {
            this.daysData = params.daysData;
        }
        if (params.calendar !== undefined) {
            this.calendar = params.calendar;
        }
        if (params.toDayY !== undefined) {
            this.toDayY = params.toDayY;
        }
        if (params.toDayM !== undefined) {
            this.toDayM = params.toDayM;
        }
        if (params.toDayD !== undefined) {
            this.toDayD = params.toDayD;
        }
    }
    updateStateVars(params: CalendarView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentYear.purgeDependencyOnElmtId(rmElmtId);
        this.__currentMonth.purgeDependencyOnElmtId(rmElmtId);
        this.__daysData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentYear.aboutToBeDeleted();
        this.__currentMonth.aboutToBeDeleted();
        this.__daysData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentYear: ObservedPropertySimplePU<number>;
    get currentYear() {
        return this.__currentYear.get();
    }
    set currentYear(newValue: number) {
        this.__currentYear.set(newValue);
    }
    private __currentMonth: ObservedPropertySimplePU<number>;
    get currentMonth() {
        return this.__currentMonth.get();
    }
    set currentMonth(newValue: number) {
        this.__currentMonth.set(newValue);
    }
    private __daysData: ObservedPropertyObjectPU<Day[]>;
    get daysData() {
        return this.__daysData.get();
    }
    set daysData(newValue: Day[]) {
        this.__daysData.set(newValue);
    }
    private calendar;
    private toDayY: number;
    private toDayM: number;
    private toDayD: number;
    refreshData() {
        this.daysData = [];
        this.calendar.set(this.currentYear, this.currentMonth, 1);
        let currentMonthStartWeek = this.calendar.get('day_of_week');
        let currentMonthJulianDay = this.calendar.get('julian_day');
        let preYear = this.currentMonth - 1 >= 0 ? this.currentYear : this.currentYear - 1;
        let preMonth = this.currentMonth - 1 >= 0 ? this.currentMonth - 1 : 11;
        this.calendar.set(preYear, preMonth, 1);
        let preMonthJulianDay = this.calendar.get('julian_day');
        let nextYear = this.currentMonth + 1 < 12 ? this.currentYear : this.currentYear + 1;
        let nextMonth = this.currentMonth + 1 < 12 ? this.currentMonth + 1 : 0;
        this.calendar.set(nextYear, nextMonth, 1);
        let nextMonthJulianDay = this.calendar.get('julian_day');
        let preMonthDays = currentMonthJulianDay - preMonthJulianDay;
        let currentMonthDays = nextMonthJulianDay - currentMonthJulianDay;
        this.calendar.set(this.currentYear, this.currentMonth, currentMonthDays);
        let currentMonthEndWeek = this.calendar.get('day_of_week');
        for (let index = preMonthDays - ((currentMonthStartWeek + 5) % 7) + 1; index <= preMonthDays; index++) {
            this.daysData.push({
                isCurrentMonth: false,
                isToday: false,
                date: index
            });
        }
        for (let index = 1; index <= currentMonthDays; index++) {
            this.daysData.push({
                isCurrentMonth: true,
                isToday: this.toDayY === this.currentYear && this.toDayM === this.currentMonth && index === this.toDayD,
                date: index
            });
        }
        for (let index = 1; index <= (8 - currentMonthEndWeek) % 7; index++) {
            this.daysData.push({
                isCurrentMonth: false,
                isToday: false,
                date: index
            });
        }
    }
    aboutToAppear() {
        this.currentYear = this.toDayY;
        this.currentMonth = this.toDayM;
        this.refreshData();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(Color.White);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBar(this, { hasBackPress: true, title: { "id": 16777220, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Calendar.ets", line: 89, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            hasBackPress: true,
                            title: { "id": 16777220, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBar" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Title(this, {
                        currentYear: this.__currentYear,
                        currentMonth: this.__currentMonth,
                        goToday: () => {
                            if (this.currentYear === this.toDayY && this.currentMonth === this.toDayM) {
                                return;
                            }
                            this.currentYear = this.toDayY;
                            this.currentMonth = this.toDayM;
                        }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Calendar.ets", line: 90, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            currentYear: this.currentYear,
                            currentMonth: this.currentMonth,
                            goToday: () => {
                                if (this.currentYear === this.toDayY && this.currentMonth === this.toDayM) {
                                    return;
                                }
                                this.currentYear = this.toDayY;
                                this.currentMonth = this.toDayM;
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Title" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ wrap: FlexWrap.Wrap });
            Flex.padding({ left: 24, right: 24 });
            Flex.width('100%');
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Flex.create({ justifyContent: FlexAlign.SpaceBetween });
                    Flex.width('100%');
                    Flex.margin({ top: 16 });
                }, Flex);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const day = _item;
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(`${day.date}`);
                            Text.height(24);
                            Text.width(24);
                            Text.textAlign(TextAlign.Center);
                            Text.fontSize(14);
                            Text.fontColor(day.isToday ? Color.White : Color.Black);
                            Text.backgroundColor(day.isToday ? Color.Blue : '');
                            Text.borderRadius(20);
                            Text.opacity(day.isCurrentMonth ? 1.0 : 0.2);
                        }, Text);
                        Text.pop();
                    };
                    this.forEachUpdateFunction(elmtId, this.daysData.slice(index * WEEK_TITLE.length, (index + 1) * WEEK_TITLE.length), forEachItemGenFunction);
                }, ForEach);
                ForEach.pop();
                Flex.pop();
            };
            this.forEachUpdateFunction(elmtId, WEEK_TITLE, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "CalendarView";
    }
}
class Title extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentYear = new SynchedPropertySimpleTwoWayPU(params.currentYear, this, "currentYear");
        this.__currentMonth = new SynchedPropertySimpleTwoWayPU(params.currentMonth, this, "currentMonth");
        this.goToday = (): void => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Title_Params) {
        if (params.goToday !== undefined) {
            this.goToday = params.goToday;
        }
    }
    updateStateVars(params: Title_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentYear.purgeDependencyOnElmtId(rmElmtId);
        this.__currentMonth.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentYear.aboutToBeDeleted();
        this.__currentMonth.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentYear: SynchedPropertySimpleTwoWayPU<number>;
    get currentYear() {
        return this.__currentYear.get();
    }
    set currentYear(newValue: number) {
        this.__currentYear.set(newValue);
    }
    private __currentMonth: SynchedPropertySimpleTwoWayPU<number>;
    get currentMonth() {
        return this.__currentMonth.get();
    }
    set currentMonth(newValue: number) {
        this.__currentMonth.set(newValue);
    }
    private goToday: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(56);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ left: 5 });
            Row.height('100%');
            Row.aspectRatio(1);
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                this.currentYear = this.currentMonth - 1 >= 0 ? this.currentYear : this.currentYear - 1;
                this.currentMonth = this.currentMonth - 1 >= 0 ? this.currentMonth - 1 : 11;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777242, "type": 20000, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Image.id('pre_month');
            Image.height(24);
            Image.width(12);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.currentYear}-${this.currentMonth + 1 >= 10 ? '' : '0'}${this.currentMonth + 1}`);
            Text.fontSize(16);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height('100%');
            Row.aspectRatio(1);
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                this.currentYear = this.currentMonth + 1 < 12 ? this.currentYear : this.currentYear + 1;
                this.currentMonth = this.currentMonth + 1 < 12 ? this.currentMonth + 1 : 0;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Image.id('next_month');
            Image.height(24);
            Image.width(12);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height('100%');
            Row.aspectRatio(1);
            Row.onClick(() => {
                this.goToday();
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "ohos.samples.international", "moduleName": "entry" });
            Text.id('today');
            Text.fontColor(Color.Blue);
            Text.fontSize(16);
            Text.padding({ right: 24 });
        }, Text);
        Text.pop();
        Row.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ justifyContent: FlexAlign.SpaceBetween });
            Flex.width('100%');
            Flex.padding({ left: 24, right: 24 });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const str = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(str);
                    Text.fontSize(14);
                    Text.fontColor(Color.Black);
                    Text.opacity(0.5);
                    Text.height(24);
                    Text.width(24);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, WEEK_TITLE, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
registerNamedRoute(() => new CalendarView(undefined, {}), "", { bundleName: "ohos.samples.international", moduleName: "entry", pagePath: "pages/Calendar", pageFullPath: "entry/src/main/ets/pages/Calendar", integratedHsp: "false" });
