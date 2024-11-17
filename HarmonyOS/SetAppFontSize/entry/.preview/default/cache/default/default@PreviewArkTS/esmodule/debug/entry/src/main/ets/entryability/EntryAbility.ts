import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type { BusinessError } from "@ohos:base";
import type window from "@ohos:window";
import CommonConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/CommonConstants";
import Logger from "@bundle:com.example.setappfontsize/entry/ets/common/utils/Logger";
import PreferencesUtil from "@bundle:com.example.setappfontsize/entry/ets/common/database/PreferencesUtil";
import { GlobalContext } from "@bundle:com.example.setappfontsize/entry/ets/common/utils/GlobalContext";
const TAG = '[entryAbility]';
/**
 * Lift cycle management of Ability.
 */
export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        Logger.info(TAG, 'onCreate');
        GlobalContext.getContext().setObject('abilityWant', want);
        PreferencesUtil.createFontPreferences(this.context);
        // 设置字体默认大小
        PreferencesUtil.saveDefaultFontSize(CommonConstants.SET_SIZE_NORMAL);
    }
    onDestroy() {
        Logger.info(TAG, 'onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        Logger.info(TAG, 'onWindowStageCreate');
        windowStage.loadContent('pages/HomePage', (err: BusinessError<void>, data) => {
            if (err.code) {
                Logger.error(TAG, 'Failed to load the content. Cause:' + JSON.stringify(err));
                return;
            }
            Logger.info(TAG, 'Succeeded in loading the content. Data: ' + JSON.stringify(data));
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        Logger.info(TAG, 'onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        Logger.info(TAG, 'onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        Logger.info(TAG, 'onBackground');
    }
}
;
