import { promptAction } from '@kit.ArkUI';

class Toast {
  showToastMessage(message: Resource) {
    promptAction.showToast({
      message: message,
      duration: 3000
    });
  };
}