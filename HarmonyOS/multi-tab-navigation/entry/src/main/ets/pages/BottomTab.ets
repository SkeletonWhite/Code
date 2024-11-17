/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import { hilog } from '@kit.PerformanceAnalysisKit';
import { Constants } from '../common/Constants';

@Entry
@Component
struct BottomTab {
  @State currentIndex: number = 0;
  private tabsController: TabsController = new TabsController();

  @Builder
  tabBuilder(title: Resource, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === index ? selectedImg : normalImg)
        .width(24)
        .height(24)
        .objectFit(ImageFit.Contain)
      Text(title)
        .margin({ top: 4 })
        .fontSize(10)
        .fontColor(this.currentIndex === index ? '#3388ff' : '#E6000000')
    }
    .justifyContent(FlexAlign.Center)
    .height(52)
    .width('100%')
    .onClick(() => {
      this.currentIndex = index;
      this.tabsController.changeIndex(this.currentIndex);
    })
  }

  @Builder
  tabContentBuilder(text: Resource, index: number, selectedImg: Resource, normalImg: Resource) {
    TabContent() {
      Row() {
        Text(text)
          .height(300)
          .fontSize(30)
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
    }
    .padding({ left: 12, right: 12 })
    .backgroundColor(Color.White)
    .tabBar(this.tabBuilder(text, index, selectedImg, normalImg))
  }

  build() {
    Tabs({
      barPosition: BarPosition.End,
      controller: this.tabsController
    }) {
      this.tabContentBuilder($r('app.string.message'),
        Constants.TAB_INDEX_ZERO, $r('app.media.activeMessage'), $r('app.media.message'))
      this.tabContentBuilder($r('app.string.people'),
        Constants.TAB_INDEX_ONE, $r('app.media.activePeople'), $r('app.media.people'))
      this.tabContentBuilder($r('app.string.activity'),
        Constants.TAB_INDEX_TWO, $r('app.media.activeStar'), $r('app.media.star'))
    }
    .width('100%')
    .backgroundColor('#F3F4F5')
    .barHeight(52)
    .barMode(BarMode.Fixed)
    .onAnimationStart((index: number, targetIndex: number) => {
      hilog.info(0x0000, 'index', index.toString());
      this.currentIndex = targetIndex;
    })
  }
}