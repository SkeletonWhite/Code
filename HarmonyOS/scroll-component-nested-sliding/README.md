# Scroll组件嵌套滑动

### 介绍

该示例通过nestedScroll属性，实现了上滑Scroll容器，滑至Tabs子组件处，Tabs吸顶，List子组件中内容可继续滑动的功能。

### 效果预览

![](screenshots/device/ceiling.gif)

使用说明：
1. 启动应用，向上滑动，Tabs组件会吸顶。
2. 再向上滑动，List组件的内容会继续向上滚动。
3. 点击tab导航栏栏可以左右切换不同的内容。

### 工程目录

```
├──entry/src/main/ets/
│  ├──common/constant
│  │  └──CommonConstants.ets            // 公共常量类
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口类
│  ├──page                  
│  │  └──Index.ets                      // 首页
│  └──viewmodel                  
│     └──InitData.ets                   // 数据
└──entry/src/main/resource              // 应用静态资源目录
```

### 具体实现

* 页面在List组件上添加nestedScroll属性，对它的两个参数scrollForward和scrollBackward分别设置PARENT_FIRST和SELF_FIRST ，从而实现往末尾端滚动时父组件先滚动，往起始端滚动时自身先滚动的效果，源码参考[index.ets](https://codehub-y.huawei.com/Codelab_Team/HarmonyOS_Codelab/files?ref=master&filePath=20240330%2FScrollComponentNestedSliding%2Fentry%2Fsrc%2Fmain%2Fets%2Fpages%2FIndex.ets&isFile=true)。


### 相关权限
不涉及

### 依赖
不涉及

### 约束与限制

1. 本示例仅支持标准系统上运行，支持设备：华为手机。

2. HarmonyOS系统：HarmonyOS NEXT Developer Beta1及以上。

3. DevEco Studio版本：DevEco Studio NEXT Developer Beta1及以上。

4. HarmonyOS SDK版本：HarmonyOS NEXT Developer Beta1 SDK及以上。