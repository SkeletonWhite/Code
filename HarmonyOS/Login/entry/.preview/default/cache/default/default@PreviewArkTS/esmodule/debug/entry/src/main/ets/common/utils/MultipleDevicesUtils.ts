import mediaquery from "@ohos:mediaquery";
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
class MultipleDevicesUtils {
    private currentDeviceSize: string = '';
    private smListener?: mediaquery.MediaQueryListener;
    private mdListener?: mediaquery.MediaQueryListener;
    private lgListener?: mediaquery.MediaQueryListener;
    private updateCurrentDeviceSize(deviceSize: string): void {
        if (this.currentDeviceSize !== deviceSize) {
            this.currentDeviceSize = deviceSize;
            AppStorage.set<string>('currentDeviceSize', this.currentDeviceSize);
        }
    }
    private isDeviceSizeSM = (mediaQueryResult: mediaquery.MediaQueryResult) => {
        if (mediaQueryResult.matches) {
            this.updateCurrentDeviceSize(CommonConstants.SM);
        }
    };
    private isDeviceSizeMD = (mediaQueryResult: mediaquery.MediaQueryResult) => {
        if (mediaQueryResult.matches) {
            this.updateCurrentDeviceSize(CommonConstants.MD);
        }
    };
    private isDeviceSizeLG = (mediaQueryResult: mediaquery.MediaQueryResult) => {
        if (mediaQueryResult.matches) {
            this.updateCurrentDeviceSize(CommonConstants.LG);
        }
    };
    public register(): void {
        this.smListener = mediaquery.matchMediaSync(CommonConstants.WIDTH_CONDITION_SM);
        this.smListener.on('change', this.isDeviceSizeSM);
        this.mdListener = mediaquery.matchMediaSync(CommonConstants.WIDTH_CONDITION_MD);
        this.mdListener.on('change', this.isDeviceSizeMD);
        this.lgListener = mediaquery.matchMediaSync(CommonConstants.WIDTH_CONDITION_LG);
        this.lgListener.on('change', this.isDeviceSizeLG);
    }
    public unregister(): void {
        this.smListener?.off('change', this.isDeviceSizeSM);
        this.mdListener?.off('change', this.isDeviceSizeMD);
        this.lgListener?.off('change', this.isDeviceSizeLG);
    }
}
export default new MultipleDevicesUtils();
