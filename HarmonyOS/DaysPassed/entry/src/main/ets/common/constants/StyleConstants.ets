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
export default class StyleConstants {
  /**
   * 宽度铺满
   * Full the width.
   */
  static readonly FULL_WIDTH: string = '100%';

  /**
   * 高度铺满
   * Full the height.
   */
  static readonly FULL_HEIGHT: string = '100%';

  /**
   * 标题栏高度
   * The percentage of title bar height.
   */
  static readonly TITLE_BAR_HEIGHT: string = '6%';

  /**
   * 标题栏字体大小
   * The fontsize of title bar text.
   */
  static readonly TITLE_BAR_FONTSIZE: Resource = $r('sys.float.ohos_id_text_size_headline7');

  /**
   * 标题栏字体大小(小一点)
   * The fontsize of title bar text.(smaller)
   */
  static readonly TITLE_BAR_FONTSIZE_SMALLER: Resource = $r('sys.float.ohos_id_text_size_headline9');


  /**
   * 标题栏字间距
   * The letterSpacing of title bar text.
   */
  static readonly TITLE_BAR_LETTER_SPACING: string = '15vp';

  /**
   * 标题栏图标大小
   * The size of title bar icon.
   */
  static readonly TITLE_BAR_ICON_SIZE: Resource = $r('app.float.title_ic_size');

  /**
   * 标题栏图标大小(小一点)
   * The size of title bar icon.(smaller)
   */
  static readonly TITLE_BAR_ICON_SIZE_SMALLER: Resource = $r('app.float.title_ic_size_smaller');

  /**
   * 标题栏图标内边距
   * The margin of title bar icon.
   */
  static readonly TITLE_BAR_ICON_MARGIN: Resource = $r('app.float.title_ic_margin');

  /**
   * 分隔线宽度
   * The width of divider.
   */
  static readonly DIVIDER_WIDTH: string = '100%';

  /**
   * 分隔线高度
   * The height of divider.
   */
  static readonly DIVIDER_STROKEWIDTH: string = '1vp';

  /**
   * 标签页高度
   * The height of tab content.
   */
  static readonly TAB_HEIGHT: string = '100%';

  /**
   * 底部导航栏高度
   * The height of bottom tab.
   */
  static readonly BOTTOM_TAB_HEIGHT: string = '7.2%';

  /**
   * 底部导航栏高度
   * The height of bottom tab.
   */
  static readonly BOTTOM_TAB_FONTSIZE: string = '11fp';

  /**
   * 日历回到今天字体大小
   * Backtoday fontsize in Calendarpage.
   */
  static readonly CALENDAR_BACKTODAY_FONTSIZE: string = '14fp';

  /**
   * 日历回到今天字体透明度
   * Backtoday opacity in Calendarpage.
   */
  static readonly CALENDAR_BACKTODAY_OPACITY: number = 0.8;

  /**
   * 日历文字左右内边距
   * Day text padding in Calendarpage.
   */
  static readonly CALENDAR_DAY_PADDING: number = 24;

  /**
   * 日历星期文字框高度
   * Week text height in Calendarpage.
   */
  static readonly CALENDAR_WEEK_DAY_TEXT_HEIGHT: number = 24;

  /**
   * 日历星期文字框宽度
   *  Week text width in Calendarpage.
   */
  static readonly CALENDAR_WEEK_DAY_TEXT_WIDTH: number = 24;

  /**
   * 日历星期字体大小
   * Week fontsize in Calendarpage.
   */
  static readonly CALENDAR_WEEK_DAY_FONTSIZE: string = '14fp';

  /**
   * 日历星期字体透明度
   * Week opacity in Calendarpage.
   */
  static readonly CALENDAR_WEEK_DAY_FONT_OPACITY: number = 0.8;

  /**
   * 日历星期上外边距
   *  Week margin top in Calendarpage.
   */
  static readonly CALENDAR_WEEK_DAY_MARGINTOP: number = 14;

  /**
   * 日历日期文字框高度
   * Date text height in Calendarpage.
   */
  static readonly CALENDAR_DATE_DAY_TEXT_HEIGHT: number = 24;

  /**
   * 日历日期文字框宽度
   *  Date text width in Calendarpage.
   */
  static readonly CALENDAR_DATE_DAY_TEXT_WIDTH: number = 24;


  /**
   * 日历日期字体大小
   *  Date fontsize in Calendarpage.
   */
  static readonly CALENDAR_DATE_DAY_FONTSIZE: string = '14fp';

  /**
   * 日历日期边框弧度
   *  Date border radius in Calendarpage.
   */
  static readonly CALENDAR_DATE_DAY_BORDERRADIUS: number = 20;

  /**
   * 日历日期上外边距
   *  Date margin top in Calendarpage.
   */
  static readonly CALENDAR_DATE_DAY_MARGINTOP: number = 16;

  /**
   * 设置列表间距
   * Setting list space.
   */
  static readonly LIST_SPACE: number = 12;
}