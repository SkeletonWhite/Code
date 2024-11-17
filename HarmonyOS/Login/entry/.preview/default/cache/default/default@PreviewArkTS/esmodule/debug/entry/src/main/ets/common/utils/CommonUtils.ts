import router from "@ohos:router";
import promptAction from "@ohos:promptAction";
import libCheckNapi from "@app:com.huawei.logindemo/entry/entry";
import CommonConstants from "@bundle:com.huawei.logindemo/entry/ets/common/constants/CommonConstants";
import Logger from "@bundle:com.huawei.logindemo/entry/ets/common/utils/Logger";
/**
 * Common operation tools.
 */
export class CommonUtils {
    /**
     * ArkTS login account and password.
     *
     * @param {string} account account
     * @param {string} password password
     */
    public loginArkTS(account: string, password: string): void {
        let check: Resource | string = this.loginCheckArkTS(account, password);
        if (CommonConstants.LOGIN_TEXT !== check) {
            Logger.error(CommonConstants.TAG_COMMON_UTILS, 'login account or password is empty');
            this.showToastContent(check);
            return;
        }
        this.routerPage(CommonConstants.MAIN_PAGE_URL);
    }
    /**
     * Native login account and password.
     *
     * @param {string} account account
     * @param {string} password password
     */
    public loginNative(account: string, password: string): void {
        let check: string = this.loginCheckNative(account, password);
        if (CommonConstants.LOGIN_TEXT !== check) {
            Logger.error(CommonConstants.TAG_COMMON_UTILS, 'login account or password is empty');
            this.showToastContent(check);
            return;
        }
        this.routerPage(CommonConstants.MAIN_PAGE_URL);
    }
    /**
     * CHeck account and password is it empty.
     *
     * @param {string} account account
     * @param {string} password password
     * @return {Resource|string} return check result
     */
    private loginCheckArkTS(account: string, password: string): Resource | string {
        let check: string = '';
        if (account === '') {
            return { "id": 16777282, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" };
        }
        else if (password === '') {
            return { "id": 16777283, "type": 10003, params: [], "bundleName": "com.huawei.logindemo", "moduleName": "entry" };
        }
        else {
            check = CommonConstants.LOGIN_TEXT;
        }
        return check;
    }
    /**
     * Native login account and password.
     *
     * @param {string} account account
     * @param {string} password password
     * @return {string} return  check result
     */
    private loginCheckNative(account: string, password: string): string {
        let check: string = libCheckNapi.nativeCheck(account, password);
        return check;
    }
    /**
     * Router page
     *
     * @param {string} url page url
     */
    public routerPage(url: string): void {
        router.replaceUrl({
            url: url
        }).catch((error: Error) => {
            Logger.error(CommonConstants.TAG_COMMON_UTILS, 'replace url error ' + JSON.stringify(error));
        });
    }
    /**
     * Show toast content.
     *
     * @param {Resource | string} content content to show
     */
    public showToastContent(content: Resource | string): void {
        promptAction.showToast({
            message: content,
            duration: CommonConstants.TOAST_DURATION
        });
    }
}
export default new CommonUtils();
