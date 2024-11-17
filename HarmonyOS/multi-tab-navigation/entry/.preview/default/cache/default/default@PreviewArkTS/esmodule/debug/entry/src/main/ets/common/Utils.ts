import promptAction from "@ohos:promptAction";
import { TabContentConstants } from "@bundle:com.example.multitabs/entry/ets/common/TabContentConstants";
export class Utils {
    showPromptAction() {
        promptAction.showToast({
            message: { "id": 16777273, "type": 10003, params: [], "bundleName": "com.example.multitabs", "moduleName": "entry" },
            duration: TabContentConstants.TAB_DURATION
        });
    }
}
