import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import Logger from '../common/utils/Logger';
import { WindowUtil } from '../common/utils/WindowUtil';

const TAG = '[EntryAbility]';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    WindowUtil.setMissionContinueActive(this.context, false);
    AppStorage.setOrCreate('systemColorMode', this.context.config.colorMode);
    Logger.info(TAG, 'Ability onCreate');
  }

  onDestroy(): void {
    Logger.info(TAG, 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    Logger.info(TAG, 'Ability onWindowStageCreate');
    WindowUtil.requestFullScreen(windowStage, this.context);
    windowStage.loadContent('pages/SplashPage', (err) => {
      if (err.code) {
        Logger.error(TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      Logger.info(TAG, 'Succeeded in loading the content.');
    });
  }

  onWindowStageRestore(windowStage: window.WindowStage): void {
    WindowUtil.requestFullScreen(windowStage, this.context);
    Logger.info(TAG, 'Ability onWindowStageRestore');
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    Logger.info(TAG, 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    Logger.info(TAG, 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    Logger.info(TAG, 'Ability onBackground');
  }
}
