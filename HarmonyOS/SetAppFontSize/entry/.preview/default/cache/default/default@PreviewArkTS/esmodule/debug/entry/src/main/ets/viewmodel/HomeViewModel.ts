import SettingData from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/SettingData";
/**
 * Home view model, providing page display data.
 */
export class HomeViewModel {
    settingArr: Array<SettingData> = [];
    initSettingData(): Array<SettingData> {
        if (this.settingArr.length === 0) {
            this.settingArr = new Array();
            let settingData = new SettingData();
            settingData.settingName = { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777233, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777227, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777272, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777274, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777277, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
            settingData = new SettingData();
            settingData.settingName = { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            settingData.settingImage = { "id": 16777271, "type": 20000, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.settingArr.push(settingData);
        }
        return this.settingArr;
    }
}
export default new HomeViewModel();
