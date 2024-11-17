import CommonConstants from "@bundle:com.example.setappfontsize/entry/ets/common/constants/CommonConstants";
import ChatData from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/ChatData";
import { ItemDirection } from "@bundle:com.example.setappfontsize/entry/ets/viewmodel/ItemDirection";
/**
 * Set view model, providing page display data.
 */
export class SetViewModel {
    chatArr: Array<ChatData> = [];
    initChatData(): Array<ChatData> {
        if (this.chatArr.length === 0) {
            this.chatArr = new Array();
            let chatData = new ChatData();
            chatData.itemDirection = ItemDirection.RIGHT;
            chatData.content = { "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.chatArr.push(chatData);
            chatData = new ChatData();
            chatData.itemDirection = ItemDirection.LEFT;
            chatData.content = { "id": 16777237, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.chatArr.push(chatData);
            chatData = new ChatData();
            chatData.itemDirection = ItemDirection.RIGHT;
            chatData.content = { "id": 16777238, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.chatArr.push(chatData);
            chatData = new ChatData();
            chatData.itemDirection = ItemDirection.LEFT;
            chatData.content = { "id": 16777239, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
            this.chatArr.push(chatData);
        }
        return this.chatArr;
    }
    getTextByFontSize(fontSize: number) {
        let fontSizeText: Resource | string = '';
        switch (fontSize) {
            case CommonConstants.SET_SIZE_SMALL:
                fontSizeText = { "id": 16777245, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
                break;
            case CommonConstants.SET_SIZE_NORMAL:
                fontSizeText = { "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
                break;
            case CommonConstants.SET_SIZE_LARGE:
                fontSizeText = { "id": 16777243, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
                break;
            case CommonConstants.SET_SIZE_EXTRA_LARGE:
                fontSizeText = { "id": 16777241, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
                break;
            case CommonConstants.SET_SIZE_HUGE:
                fontSizeText = { "id": 16777242, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
                break;
            default:
                fontSizeText = { "id": 16777244, "type": 10003, params: [], "bundleName": "com.example.setappfontsize", "moduleName": "entry" };
        }
        return fontSizeText;
    }
}
export default new SetViewModel();
