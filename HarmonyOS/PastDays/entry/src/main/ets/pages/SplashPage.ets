import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import { router, window } from '@kit.ArkUI';
import Logger from '../common/utils/Logger';
import { BusinessError } from '@kit.BasicServicesKit';
import ColorConstants from '../common/constants/ColorConstants';
import { WindowUtil } from '../common/utils/WindowUtil';
import { ConfigurationConstant } from '@kit.AbilityKit';

const TAG: string = '[SplashPage]';

@Entry
@Component
struct SplashPage {
  aboutToAppear(): void {
    setTimeout(() => {
      router.pushUrl({ url:'pages/MainPage' }).then(() => {
        Logger.info(TAG,'Successfully jump to the MainPage.')
      }).catch((e: BusinessError) => {
        Logger.error(TAG,`Jump to the MainPage failed, cause: ${e}`)
      })
    },CommonConstants.SPLASHPAGE_ROUTER_DELAY)
  }

  onPageShow() {
    WindowUtil.updateStatusBarColor(getContext(this), true);
    Logger.info(TAG, 'onPageShow');
  }

  onPageHide() {
    Logger.info(TAG, 'onPageHide');
    WindowUtil.updateStatusBarColor(getContext(this),
      AppStorage.get('currentColorMode') === ConfigurationConstant.ColorMode.COLOR_MODE_DARK);
  }

  build() {
    RelativeContainer() {
      Image($r("app.media.ic_splashpage_logo"))
        .width(StyleConstants.HALF_WIDTH)
        .alignRules({
          bottom: { anchor: CommonConstants.RELATIVE_CONTAINER, align: VerticalAlign.Center },
          middle: { anchor: CommonConstants.RELATIVE_CONTAINER, align: HorizontalAlign.Center }
        })
        .margin({ bottom:  StyleConstants.SPLASHPAGE_LOGO_MARGIN_BOTTOM})
    }
    .width(StyleConstants.FULL_WIDTH)
    .height(StyleConstants.FULL_HEIGHT)
    .backgroundColor(ColorConstants.APP_BACKGROUND_COLOR)
  }
}