/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

/**
 * Common constants for all features.
 */
export default class CommonConstants {
  /**
   * 布尔值是
   * Boolean true.
   */
  static readonly BOOLEAN_TRUE: boolean = true;

  /**
   * 布尔值否
   * Boolean false.
   */
  static readonly BOOLEAN_FALSE: boolean = false;

  /**
   * 空资源
   * Empty resource.
   */
  static readonly EMPTY: Resource = $r('app.string.empty');

  /**
   * 标题栏文字 首页
   * The text of title bar homepage.
   */
  static readonly TITLE_BAR_HOMEPAGE: Resource = $r('app.string.title_bar_homepage');

  /**
   * 标题栏文字 设置
   * The text of title bar setting.
   */
  static readonly TITLE_BAR_SETTING: Resource = $r('app.string.title_bar_setting');

  /**
   * 底部导航栏1
   * Tab index0.
   */
  static readonly BOTTOM_TAB_INDEX_ZERO: number = 0;

  /**
   * 底部导航栏2
   * Tab index1.
   */
  static readonly BOTTOM_TAB_INDEX_ONE: number = 1;

  /**
   * 底部导航栏3
   * Tab index2.
   */
  static readonly BOTTOM_TAB_INDEX_TWO: number = 2;

  /**
   * 底部导航栏4
   * Tab index3.
   */
  static readonly BOTTOM_TAB_INDEX_THREE: number = 3;

  /**
   * 底部导航栏文字首页
   * The text of bottom tab homepage.
   */
  static readonly BOTTOM_TAB_HOMEPAGE: Resource = $r('app.string.bottom_tab_homepage');

  /**
   * 底部导航栏文字日历
   * The text of bottom tab calendarpage.
   */
  static readonly BOTTOM_TAB_CALENDAR: Resource = $r('app.string.bottom_tab_calendar');

  /**
   * 底部导航栏文字统计
   * The text of bottom tab summarypage.
   */
  static readonly BOTTOM_TAB_SUMMARY: Resource = $r('app.string.bottom_tab_summary');

  /**
   * 底部导航栏文字设置
   * The text of bottom tab settingpage.
   */
  static readonly BOTTOM_TAB_SETTING: Resource = $r('app.string.bottom_tab_setting');

  /**
   * 日历页回到今天
   * The text back today of Calendarpage.
   */
  static readonly CALENDAR_BACKTODAY: Resource = $r('app.string.calendar_backtoday');

}