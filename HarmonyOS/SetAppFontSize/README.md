# 数据和文件-应用内字体大小调节（ArkTS）

### 简介

基于Slider组件和首选项，实现通过拖动滑块调节应用内字体大小的功能。

效果图如下：

![](screenshots/device/SetAppFontSize.gif)

### 相关概念

- 字体大小调节原理 ：通过组件Slider滑动，获取滑动数值，将这个值通过首选项进行持久化，页面的字体通过这个值去改变大小。

- 首选项: 首选项为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。

### 相关权限

不涉及

### 使用说明

1.应用包含“设置”、“字体大小设置”两个页面。

2.“字体大小设置”页面左上角有一个返回按钮。

3.通过点击“设置”页的“设置字体大小”项，可以进入到“字体大小设置”页。

4.在“字体大小设置”页拖动滑块，“设置”页的设置项文字以及“字体大小设置”页的聊天文字大小会同步变化。

### 约束与限制

1. 本示例仅支持标准系统上运行，支持设备：华为手机。
2. HarmonyOS系统：HarmonyOS NEXT Developer Beta1及以上。
3. DevEco Studio版本：DevEco Studio NEXT Developer Beta1及以上。
4. HarmonyOS SDK版本：HarmonyOS NEXT Developer Beta1 SDK及以上。
