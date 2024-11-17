/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { inputMethod } from '@kit.IMEKit';
import { abilityDelegatorRegistry, Driver, ON } from '@kit.TestKit';
import { describe, expect, it } from '@ohos/hypium';
import { loginCheck } from '../testability/pages/Index';
import Logger from '../../../main/ets/common/utils/Logger';

const delegator = abilityDelegatorRegistry.getAbilityDelegator();
const waitUiReadyMs = 1000;

export default function LoginFunctionTest() {

  describe('loginFunctionTest', () => {
    it('emptyPasswordTest', 0, () => {
      expect(loginCheck("123", "")).assertEqual(true);
    })

    it('emptyAccountTest', 0, () => {
      expect(loginCheck("", "123456")).assertEqual(false);
    })

    it('notEmptyTest', 0, () => {
      expect(loginCheck("123", "123456")).assertEqual(false);
    })
  });

  describe('verifyLoginTest', () => {
    it('loginTest', 0, async () => {
      await startAbility('com.huawei.logindemo', 'EntryAbility');
      let driver = Driver.create();
      await driver.delayMs(waitUiReadyMs);
      let input = await driver.findComponents(ON.type('TextInput'));
      await input[0].inputText('123');
      await driver.delayMs(waitUiReadyMs);
      await input[1].inputText('123456');
      await driver.delayMs(waitUiReadyMs);
      inputMethod.getController().stopInputSession();
      let btn = await driver.findComponent(ON.id('loginButtonId'));
      await btn.click();
      await driver.delayMs(waitUiReadyMs);
    });
  });
}

async function startAbility(bundleName: string, abilityName: string) {
  await delegator.executeShellCommand(`aa start -b ${bundleName} -a ${abilityName}`)
    .then((result: abilityDelegatorRegistry.ShellCmdResult) => {
      Logger.info(`UiTestCase, start abilityFinished: ${JSON.stringify(result)}`);
    }).catch((err: Error) => {
      Logger.error(`UiTestCase, start abilityFailed: ${JSON.stringify(err)}`);
    })
}
