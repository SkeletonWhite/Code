import preferences from "@ohos:data.preferences";
import { GlobalContext } from "@bundle:com.example.setappfontsize/entry/ets/common/utils/GlobalContext";
import Logger from "@bundle:com.example.setappfontsize/entry/ets/common/utils/Logger";
const TAG = '[PreferencesUtil]';
const PREFERENCES_NAME = 'myPreferences';
const KEY_APP_FONT_SIZE = 'appFontSize';
/**
 * The PreferencesUtil provides preferences of create, save and query.
 */
export class PreferencesUtil {
    createFontPreferences(context: Context) {
        let fontPreferences: Function = (() => {
            let preference: Promise<preferences.Preferences> = preferences.getPreferences(context, PREFERENCES_NAME);
            return preference;
        });
        GlobalContext.getContext().setObject('getFontPreferences', fontPreferences);
    }
    saveDefaultFontSize(fontSize: number) {
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        getFontPreferences().then((preferences: preferences.Preferences) => {
            preferences.has(KEY_APP_FONT_SIZE).then(async (isExist: boolean) => {
                Logger.info(TAG, 'preferences has changeFontSize is ' + isExist);
                if (!isExist) {
                    await preferences.put(KEY_APP_FONT_SIZE, fontSize);
                    preferences.flush();
                }
            }).catch((err: Error) => {
                Logger.error(TAG, 'Has the value failed with err: ' + err);
            });
        }).catch((err: Error) => {
            Logger.error(TAG, 'Get the preferences failed, err: ' + err);
        });
    }
    saveChangeFontSize(fontSize: number) {
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        getFontPreferences().then(async (preferences: preferences.Preferences) => {
            await preferences.put(KEY_APP_FONT_SIZE, fontSize);
            preferences.flush();
        }).catch((err: Error) => {
            Logger.error(TAG, 'put the preferences failed, err: ' + err);
        });
    }
    async getChangeFontSize() {
        let fontSize: number = 0;
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        // const preferences: dataPreferences.Preferences = await getFontPreferences();
        fontSize = await (await getFontPreferences()).get(KEY_APP_FONT_SIZE, fontSize);
        return fontSize;
    }
    async deleteChangeFontSize() {
        let getFontPreferences: Function = GlobalContext.getContext().getObject('getFontPreferences') as Function;
        const preferences: preferences.Preferences = await getFontPreferences();
        let deleteValue = preferences.delete(KEY_APP_FONT_SIZE);
        deleteValue.then(() => {
            Logger.info(TAG, 'Succeeded in deleting the key appFontSize.');
        }).catch((err: Error) => {
            Logger.error(TAG, 'Failed to delete the key appFontSize. Cause: ' + err);
        });
    }
}
export default new PreferencesUtil();
