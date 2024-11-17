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
 * Style constants for all features.
 */
export default class ColorConstants {
  /**
   * 浅色模式全局背景
   * Background color in light mode.
   */
  static readonly BACKGROUND_COLOR_LIGHT: Resource = $r('app.color.background_light');

  /**
   * 深色模式全局背景
   * Background color in dark mode.
   */
  static readonly BACKGROUND_COLOR_DARK: Resource = $r('app.color.background_dark');

  /**
   * 浅色模式标题栏字体颜色
   * Title bar font color in light mode.
   */
  static readonly TITLE_BAR_FONTCOLOR_LIGHT : Color = Color.Black;

  /**
   * 深色模式标题栏字体颜色
   * Title bar font color in light mode.
   */
  static readonly TITLE_BAR_FONTCOLOR_DARK : Color = Color.White;

  /**
   * 浅色模式分隔线
   * Divider color in light mode.
   */
  static readonly DIVIDER_LIGHT_MODE: Color = Color.Black;

  /**
   * 深色模式分隔线
   * Divider color in light mode.
   */
  static readonly DIVIDER_DARK_MODE: Color = Color.Grey;

  /**
   * 底部导航栏字体颜色(黑)
   * Bottom tab font color black.
   */
  static readonly BOTTOM_TAB_FONTCOLOR_BLACK : Color = Color.Black;

  /**
   * 底部导航栏字体颜色(白)
   * Bottom tab font color black.
   */
  static readonly BOTTOM_TAB_FONTCOLOR_WHITE : Color = Color.White;

  /**
   * 底部导航栏字体颜色(灰)
   * Bottom tab font color black.
   */
  static readonly BOTTOM_TAB_FONTCOLOR_GREY : Resource = $r('app.color.bottom_tab_fontcolor_grey');

  /**
   * 日历回到今天字体颜色
   * Backtoday fontcolor in Calendarpage released.
   */
  static readonly CALENDAR_BACKTODAY_FONTCOLOR_RELEASED : Resource = $r('app.color.calendar_backtoday_fontcolor_released');

  /**
   * 日历回到今天被按下时字体颜色
   * Backtoday fontcolor in Calendarpage touched.
   */
  static readonly CALENDAR_BACKTODAY_FONTCOLOR_TOUCHED : Resource = $r('app.color.calendar_backtoday_fontcolor_touched');


  /**
   * 浅色模式日历星期字体颜色
   * Week fontcolor in light mode.
   */
  static readonly CALENDAR_WEEK_DAY_FONTCOLOR_LIGHT : Color = Color.Grey;

  /**
   * 深色模式日历星期字体颜色
   * Week fontcolor in dark mode.
   */
  static readonly CALENDAR_WEEK_DAY_FONTCOLOR_DARK : Color = Color.White;
}