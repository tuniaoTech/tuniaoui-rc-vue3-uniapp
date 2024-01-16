### 0.0.1-beta1

_2023-04-11_

#### Add

- 测试版本发布

### 0.0.1-beta2

_2023-05-30_

#### Add

- 新增`TnActionSheet`组件
- 新增`TnAvatar`、`TnAvatarGroup`组件
- 新增`TnBadge`组件
- 新增`TnButton`组件
- 新增`TnCalendar`组件
- 新增`TnCheckBox`、`TnCheckBoxGroup`组件
- 新增`TnCollapse`组件
- 新增`TnDateTimePicker`组件
- 新增`TnEmpty`组件
- 新增`TnForm`组件
- 新增`TnIcon`组件
- 新增`TnImageUpload`组件
- 新增`TnInput`组件
- 新增`TnLazyLoad`组件
- 新增`TnList`组件
- 新增`TnLoading`组件
- 新增`TnModal`组件
- 新增`TnNavbar`组件
- 新增`TnNoticeBar`组件
- 新增`TnNotify`组件
- 新增`TnNumberBox`组件
- 新增`TnOverlay`组件
- 新增`TnPhotoAlbum`组件
- 新增`TnPicker`组件
- 新增`TnPopup`组件
- 新增`TnProgress`组件
- 新增`TnCircleProgress`组件
- 新增`TnLineProgress`组件
- 新增`TnRadio`组件
- 新增`TnRate`组件
- 新增`TnReadMore`组件
- 新增`TnRegionPicker`组件
- 新增`TnScrollList`组件
- 新增`TnSlider`组件
- 新增`TnSteps`组件
- 新增`TnSticky`组件
- 新增`TnSwipeAction`组件
- 新增`TnSwitch`组件
- 新增`TnTabbar`组件
- 新增`TnTabs`组件
- 新增`TnTitle`组件
- 新增`TnWeekCalendar`组件

### 0.0.1-beta3

_2023-06-08_

#### Add

- 新增`TnWaterFall`瀑布流组件
- 新增`TnKeyboard`软键盘组件
- 新增`TnSubsection`分段器组件
- 新增`TnCountDown`倒计时组件
- 新增`TnBubbleBox`气泡弹框组件
- 新增`TnFooter`页脚组件
- 新增`TnSearchBox`搜索框组件
- 新增`TnIndexList`索引列表组件
- 新增`TnGraphicCard`图文卡片组件
- 新增`TnSwitchTab`选项卡切换组件


#### Fixed

- 修复`TnLazyload`在父容器没有高度时无法渲染的问题
- 修复`TnAvatarGroup`组件的便宜问题
- 修复resetFields无效的bug


#### 优化

- 优化`TnNumberBox`长按事件
- 修改FormInstance导出的名称
- 优化依赖，减少依赖包


### 0.0.1-beta4

_2023-06-08_

#### Fixed

- 修复打包后缺少部份文件的问题


### 0.0.1-beta5

_2023-06-09_

#### Fixed

- 修复`TnTabbar`组件无法初始化当前选中项的问题


### 0.0.1-beta6

_2023-06-11_

#### Add

- 新增`TnTag`标签组件


#### 优化

- 优化`TnTabbar`的样式


### 0.0.1-beta7

_2023-06-11_

#### 新增

- 新增`TnTabbar`组件的`placeholder`属性


#### 优化

- 优化`TnTag`组件代码


### 0.0.1-beta8

_2023-06-13_

#### Fixed

- 修复`TnTabs`滑块位置不正确的问题


### 0.0.1-beta9

_2023-06-13_


#### 优化

- 优化`TnSearchBox`组件的样式

#### Fixed

- 修复`TnTabs`动态修改`TnTabsItem`时无法初始化滑块和激活的问题


### 0.0.1-beta10

_2023-06-13_


#### Fixed

- 修复`TnTabs`无法通过`v-model`绑定的问题


### 0.0.1-beta11

_2023-06-13_


#### 优化

- 优化父子组件的绑定和移除逻辑


### 0.0.1-beta12

_2023-06-14_


#### 新增

- `TnButton`新增`text`和`plain`属性代替`shape`中的`text`和`border`属性


#### 优化

- 优化`TnButton`组件的样式


### 0.0.1-beta13

_2023-06-14_

#### 新增

- 新增`TnButton`组件的`type`可以设置为空字符串


### 0.0.1-beta14
### 0.0.1-beta15

_2023-06-14_

#### 优化

- 优化`TnButton`组件多参数同时设置的样式


### 0.0.1-beta16

_2023-06-14_

#### 优化

- `formatDomSizeValue`工具支持calc表达式


### 0.0.1-beta17

_2023-06-14_

#### Fixed

- 修复`TnAvatar`无法设置角标的位置的问题


### 0.0.1-beta18

_2023-06-14_

#### Fixed

- 修复`TnAvatarGroup`头像组位置偏移导致宽度错误的问题


### 0.0.1-beta19

_2023-06-15_

#### Fixed

- 修复`TnAvatarGroup`头像组无法全部一起设置头像属性的问题


### 0.0.1-beta20

_2023-06-15_

#### 优化

- 优化`tnNavBack`和`tnNavPage`函数返回Promise


### 0.0.1-beta21

_2023-06-15_

#### Fixed

- 修复`TnFooter`无法通过给`size`属性传递指定尺寸来设置大小的bug


### 0.0.1-beta22

_2023-06-15_

#### 优化

- 优化`TnList`组件的样式


### 0.0.1-beta23

_2023-06-15_

#### 优化

- 优化`TnCollapse`组件的样式


### 0.0.1-beta24

_2023-06-15_


#### 优化

- 优化`TnCollapse`处理面板展开与折叠代码，在没有传递`v-model`时也可以使用


### 0.0.1-beta25

_2023-06-15_

#### 优化

- 优化`TnCollapse`组件的样式


### 0.0.1-beta26

_2023-06-15_

#### 优化

- 优化`TnSubsection`组件处理激活项的逻辑，在没有传递`v-model`时也可以使用


### 0.0.1-beta27

_2023-06-16_

#### 优化

- 优化`TnSearchBox`组件样式


### 0.0.1-beta28

_2023-06-16_


#### 优化

- 优化`TnPopup`组件top偏移量的值默认单位为px


### 0.0.1-beta29

_2023-06-16_


#### Fixed

- 优化`TnPopup`组件的在设置top后height不正确问题


### 0.0.1-beta30

_2023-06-16_


#### Fixed

- 修改`TnModal`无法修改取消按钮的样式

#### 优化

- 优化`TnModal`组件的样式


### 0.0.1-beta31

_2023-06-16_


#### Fixed

- 修复解析样式hooks无法更新从有值到无值的问题


### 0.0.1-beta32

_2023-06-16_


#### Fixed

- 修复`TnNotify`组件无法设置`type`属性的问题

#### 优化

- 优化`TnModal`组件的样式


### 0.0.1-beta33

_2023-06-17_


#### Fixed

- 修复`TnActionSheet`组件多次调用时没有清楚上一次的数据的问题


### 0.0.1-beta34
### 0.0.1-beta35

_2023-06-17_


#### 优化

- 优化`TnBubbleBox`弹出处理逻辑


### 0.0.1-beta36

_2023-06-17_


#### 新增

- `TnBubbleBox`新增`option-item-padding`选项内边距属性


### 0.0.1-beta37

_2023-06-17_


#### 优化

- 优化`TnSwipeAction`组件的样式
- 优化`TnSwipeAction`组件的滑动逻辑，打开、关闭菜单逻辑


### 0.0.1-beta38

_2023-06-17_


#### Fixed

- 修复`TnSwipeActionItem`在`disabled`下初始化时不会自动关闭的问题


### 0.0.1-beta39

_2023-06-17_


#### Fixed

- 修复`TnSwipeActionItem`在`disabled`下可以滑动的问题


### 0.0.1-beta40

_2023-06-18_


#### 优化

- 优化`TnTabbar`中`v-model`绑定值的处理逻辑


### 0.0.1-beta41
### 0.0.1-beta42

_2023-06-18_


#### Fixed

- 修复`TnButton`和`TnTag`引入sass时使用了@use导致无法使用的问题
- 修复`TnTabbar`zIndex设置无效


### 0.0.1-beta43

_2023-06-18_


#### 优化

- 优化`TnTabs`样式


### 0.0.1-beta44
### 0.0.1-beta45

_2023-06-18_


#### 优化

- 优化`TnTabs`v-model绑定值的处理逻辑


### 0.0.1-beta46

_2023-06-19_


#### Fixed

- 修复`TnSteps`在数值模式和点图标模式下，如果自定义了颜色导致元素无法正常显示的问题


### 0.0.1-beta47

_2023-06-19_


#### 新增

- `TnNavbar`新增`placeholder`属性控制是否开启占位空间


### 0.0.1-beta48
### 0.0.1-beta50

_2023-06-19_


#### 优化

- 优化`TnIndexList`在设置`sticky-offset-top`后样式不正确的问题


### 0.0.1-beta51

_2023-06-20_


#### Fixed

- 修复`TnCircleProgress`在进度为0时进度条显示不正确的问题



### 0.0.1-beta52

_2023-06-20_


#### 优化

- 修改组件关于image-mode的默认属性修改为`aspectFill`


### 0.0.1-beta53

_2023-06-20_


#### 优化

- 优化`TnGraphiCard`样式


### 0.0.1-beta54

_2023-06-20_


#### Fixed

- 修复`TnKeyboard`在设置`v-model`的时候内部的值没有更新的问题


### 0.0.1-beta55

_2023-06-21_


#### 优化

- 优化`TnKeyboard`小数键盘时的临界值处理逻辑


### 0.0.1-beta56

_2023-06-21_


#### Fixed

- 修复`TnForm`和`TnInput`在`h5`下无法使用`Instance`的问题


### 0.0.1-beta57

_2023-06-21_


#### 优化

- 优化`TnInput`的样式


### 0.0.1-beta58

_2023-06-21_


#### Fixed

- 修复`TnInput`在`password`下如果设置了`show-password`为`false`后密码失效的问题


### 0.0.1-beta59
### 0.0.1-beta60

_2023-06-21_


#### Fixed

- 修复`TnNumberBox`设置最小值后初始化时没有设置正确的值的问题


### 0.0.1-beta61

_2023-06-21_


#### Fixed

- 修复`TnRadio`设置激活颜色不生效的问题


### 0.0.1-beta62

_2023-06-21_


#### Fixed

- 修复`TnCheckbox`无法设置选框形状和激活时的颜色的问题


### 0.0.1-beta63
### 0.0.1-beta64
### 0.0.1-beta65

_2023-06-22_


#### Fixed

- 修复`TnSlider`在设置`min`和`max`之后初始化时没有更新`model-value`的问题


### 0.0.1-beta66
### 0.0.1-beta67

_2023-06-23_


#### Fixed

- 修复`TnPicker`在`data`为单数组对象时无法识别为单列的问题


### 0.0.1-beta69

_2023-06-23_


#### Fixed

- 修复`TnDateTimePicker`切换年份后生成的日期没有更新的问题


### 0.0.1-beta70
### 0.0.1-beta71

_2023-06-23_


#### 优化

- 移除`TnDateTimePicker`设置最小、最大年份的参数，统一通过`min-time`和`max-time`设置


### 0.0.1-beta72

_2023-06-24_


#### 优化

- 移除`TnRegionPicker`的街道信息减少包大小


### 0.0.1-beta73

_2023-06-25_


#### Fixed

- 修复`TnImageUpload`在默认处理下上传图片失败后处理无效的问题


### 0.0.1-beta74

_2023-06-25_


#### 新增

- `TnUploadImage`新增`uploadImage`插槽用于自定义上传后展示的列表


### 0.0.1-beta75

_2023-06-26_


#### Fixed

- 修复`TnRate`在`readonly`下颜色不正确的问题


### 0.0.1-beta76

_2023-06-26_


#### Fixed

- 修复`TnRate`在`readonly`下可以滑动的问题


### 0.0.1-beta77
### 0.0.1-beta78

_2023-06-26_


#### Fixed

- 修复`TnCalendar`修改`v-model`的之后没有更新的问题


### 0.0.1-beta79

_2023-06-26_


#### 优化

- 优化`TnCalendar`的样式


### 0.0.1-beta81

_2023-06-26_


#### Fixed

- 修复`TnCalendar`配合`TnPopup`无法正常显示的问题


### 0.0.1-beta82
### 0.0.1-beta83
### 0.0.1-beta84

_2023-06-26_


#### 优化

- 优化`TnWeekCalendar`的样式


### 0.0.1-beta85

_2023-06-26_


#### Fixed

- 修复`TnWeekCalendar`在指定了年月之后如果不是当前年月时数据状态不正确的问题


### 0.0.1-beta86

_2023-06-26_


#### 优化

- 优化`TnFormItem`的样式


### 0.0.1-beta87

_2023-06-26_


#### 新增

- `TnCheckboxGroup`和`TnRadioGroup`新增`wrap`参数设置对应的选项内容是否独占一行


### 0.0.1-beta88

_2023-06-26_

#### 新增

- `TnFormItem`新增`label-position`属性可以针对单个表单项设置对应的`label`的位置


### 0.0.1-beta89

_2023-06-26_


#### Fixed

- 修复`TnSlider`滑动条有初始值的情况下对应位置没有初始化的问题


### 0.0.1-beta90

_2023-06-26_


#### Fixed

- 修复`TnSlider`在规则校验失败后跑出异常的问题


### 0.0.1-beta91

_2023-06-26_


#### 优化

- 将`TnButton`的`debounce`默认值改为`false`


### 0.0.1-beta92

_2023-06-28_


#### 优化

- 优化`TnOverlay`和`TnPopup`关闭时的动画效果


### 0.0.1-beta93

_2023-06-28_


#### Fixed

- 修复`TnIndexList`点击索引后滚动位置不正确的问题


#### 优化

- 优化`TnSwipeAction`垂直滚动打开菜单的判断逻辑


### 0.0.1-beta94

_2023-06-29_


#### Fixed

- 修复`TnCalendar`通过按钮切换月份时存在卡顿的问题
- 修复`TnPicker`在快速滑动时存在值没有切换的问题，并且会导致弹框重复打开的问题


#### 优化

- 优化`TnTabs`在没有数据是滑块没有隐藏的问题


### 0.0.1-beta95

_2023-06-29_

#### Fixed

- 修复`TnIndexList`点击索引后滚动位置不正确的问题


### 0.0.1-beta96
### 0.0.1-beta97
### 0.0.1-beta98
### 0.0.1-beta99
### 0.0.1-beta100

_2023-06-29_


#### Fixed

- 修复在Windows系统下`TnForm`无法使用的问题


### 1.0.0-rc.1

_2023-06-29_

#### 版本号更新

##### 在内测期间多谢图鸟UI的各位小伙伴进行测试，图鸟UI-vue3的第一个候选版本正式发布，后续会持续更新，敬请期待。

- 版本号更新为`1.0.0`，进入稳定版本，后续版本号规则为`主版本号.次版本号.修订号 - [alpha|beta|rc].[版本号]`


### 1.0.1-alpha.2

_2023-07-01_

#### Fixed

- 修复`TnIcon`在app环境下无法正常使用的问题
- 修复在app环境下无法正常获取容器的节点的信息的问题


### 1.0.1-alpha.3

_2023-07-01_


#### Fixed

- 修复`TnTabs`初始化时滑块位置不正确的问题
- 修复`TnSubsection`初始化时滑块位置不正确的问题
- 修复`TnRate`点击时位置不对应的问题
- 修复`TnIndexList`在app环境下无法正常使用的问题


### 1.0.1-alpha.4

_2023-07-02_


#### Fixed

- 修复`TnWeekCalendar`周日历在app环境下无法正常使用的问题


### 1.0.2-alpha.1

_2023-07-03_


#### Fixed

- 修复`TnTitle`无法在H5和APP环境下宽度不正确的问题


### 1.0.2-alpha.2

_2023-07-04_


#### Fixed

- 修复`TnRate`无法全选的问题
- 修复`TnCalendar`在App端下无法正常使用的问题


### 1.0.4-alpha.1

_2023-07-05_


#### 新增

- 新增`TnCountTo`组件
- 新增`TnCountDown`组件

#### 修改

- 新增`ButtonInstance`为`TnButtonInstance`


### 1.0.4-alpha.2

_2023-07-06_


#### Fixed

- 修复`TnInput`无法初始化和无法根据modelValue动态更新的问题
- 修复`TnPicker`在在无法动态修改级联数据的问题


### 1.0.4-alpha.4

_2023-07-06_


#### 新增

- `TnInput` `type` 新增 `picker` 并且新增 `click`事件


### 1.0.4-alpha.7

_2023-07-06_


#### 优化

- 兼容TypeScript 5.0 以上的版本


### 1.0.4-alpha.9

_2023-07-07_


#### Change

- 将`TnInput` `type` `picker` 改为 `select`

#### Fixed

- 修复`TnForm`校验无法通过的问题

#### 新增

- `TnSearchBox`新增点击键盘搜索触发事件`search`


### 1.0.5-beta.1

_2023-07-11_

#### Fixed

- 修复`TnNavbar`透明度无法设置为0的问题


### 1.0.5-beta.2

_2023-07-12_

#### Fixed

- 修复`TnCalendar`选择日期范围后数据没有更新的问题


### 1.0.5-beta.3

_2023-07-12_

#### 修改`step`组件名称为`steps-item`


### 1.0.6-beta.1

_2023-07-13_

#### 新增

- `TnImageUpload`组件新增`auto-remove-faild-file`属性，当上传失败时是否自动移除文件

#### Fixed

- 修复`TnLazyLoad`有默认背景，在现在透明图片时带了背景颜色的问题
- 修复`TnRate`在一定条件下会返回Nan的问题
- 修复`TnRate`配合`TnPopup`会获取容器信息失效的问题
- 修复`TnNumberBox`在disabled状态下能点击的问题
- 修复`TnNumberBox`在输入模式下输入的值大于最大值时回显失败的问题
- 修复`TnDateTimePicker`在`time`下默认值不滚动到对应位置的问题


### 1.0.6-beta.2

_2023-07-14_

#### 新增

- 新增`TnSwiper`组件


### 1.0.6-beta.3

_2023-07-15_

#### Fixed

- 修复`TnSearchBox` v-model 无法更新内部值的问题
- 修复`TnSearchBox` 在内容为空时点击search无法触发事件的问题
- 修复`TnEmpty`在自定义内容时无法正常显示的问题


### 1.0.7-alpha.1
### 1.0.7-alpha.2
### 1.0.7-alpha.3
### 1.0.7-alpha.4
### 1.0.7-alpha.5
### 1.0.7-alpha.6
### 1.0.7-alpha.7
### 1.0.7-alpha.8

_2023-07-18_

#### 修复支付宝上无法正常使用的问题


### 1.0.7-beta.1

_2023-07-21_

#### 新增

- `TnWaterFall`新增`reset`方法重置列表

#### 优化

- 优化`TnCollapse`点击内容时阻止收起事件
- 优化`TnBubbleBox`样式

#### Fixed

- 修复`TnWaterFall`在`data`为空时没有重置列表的问题

### 1.0.7-beta.2

_2023-07-24_

#### 优化

- 优化部分hooks的处理逻辑

### 1.0.7-beta.3
### 1.0.7-beta.4

_2023-07-25_

#### Fixed

- 修复`TnInput`在textarea模式下无法设置自动高度和指定高度的问题

### 1.0.7-beta.5

_2023-07-25_

#### 新增

- `TnGraphicCard`组件新增`more-click`事件

#### 修改

- `TnGraphicCard`组件事件名称统一修改为`-`连接，`avatarClick`->`avatar-click` \ `viewClick` -> `view-click` \ `commentClick` -> `comment-click` \ `likeClick` -> `like-click`

### 1.0.8-beta.1

_2023-07-26_

#### Fixed

- 修复`TnTabbar`在元素少于5个时凸起按钮无法正常显示的问题
- 修复`TnDateTimePicker`和`TnRegionPicker`部分参数无效的问题
- 修复`TnWaterFall`在`calc`模式下数据会被清空的问题

### 1.0.9-beta.1

_2023-07-27_

#### 新增

- `TnPicker` `change`和`confirm`事件新增返回传递的数据
- `TnRegionPicker` `change`和`confirm`事件新增返回具体地区的数据

#### Fixed

- 修复`TnPicker`点击取消后值依旧发生改变的问题

### 1.0.9-beta.2

_2023-07-28_

#### Fixed

- 修复`TnTabbar`无法设置图标大小的问题

### 1.0.9-beta.3

_2023-07-28_

#### 优化

- 优化hooks处理逻辑


### 1.0.9-beta.4

_2023-07-28_

#### Fixed

- 修复`TnAvatarGroup`下的`TnAvatar`初始化失败的问题

### 1.0.9-beta.5

_2023-07-29_

#### 优化

- 优化`TnAvatar`样式

### 1.0.9-beta.6

_2023-07-29_

#### 新增

- `TnSwiper`新增`previous-margin`和`next-margin`属性

### 1.0.9-beta.7

_2023-07-30_

#### Fixed

- 修复`TnButton` `border-color`无法设置为内置颜色外的其他颜色的问题
- 修复`TnButton` `border-bold`无效的问题

#### 优化

- 优化`TnButton`样式

### 1.0.9-beta.8

_2023-07-30_

#### 优化

- 优化`TnPopup`弹出/隐藏动画

### 1.0.9-beta.9

_2023-07-30_

#### 优化

- 优化`TnSwiper`样式

### 1.0.9-beta.10

_2023-07-31_

#### 删除

- 删除`TnGraphicCard`组件，以第三方组件的形式提供

### 1.0.9-beta.11

_2023-07-31_

#### 新增

- `TnTabs`新增`active-bold`参数设置激活时是否加粗字体

### 1.0.9-alpha.1

_2023-08-03_

#### Fixed

- 修复在部份情况下组件会编译到全局目录下的问题

### 1.0.10-beta.1
### 1.0.10-beta.2

_2023-08-05_

#### Fixed

- 修复`TnFormItem`在没有`label`是会报错的问题

### 优化

- `TnPicker`、`TnDateTimePicker`、`TnRegionPicker`组件取消之后不会自动恢复到上一次的位置

### 1.0.10-beta.3

_2023-08-10_

#### 新增

- `TnTabbarItem`新增`name`属性可以设置唯一标识
- `TnTabbarItem`新增`badge`和`badge-config`属性设置和配置角标
- `TnTabsItem`新增`name`属性可以设置唯一标识

### 1.0.10-beta.4
### 1.0.10-beta.5

_2023-08-18_

#### 新增

- `TnImageUpload`新增`upload`方法用于手动上传图片
- `TnButton`新增`only-button`参数设置按钮为纯按钮，不外加任何样式

#### Fixed

- 修复`TnTabbarItem`的`bulge-bg-color`属性无效的问题

#### 优化

- 优化`TnNoticeBar`样式

### 1.0.10-beta.6
### 1.0.10-beta.7

_2023-08-21_

#### 新增

- `TnDateTimePicker`新增`format`参数格式化回显的日期时间
- `TnDateTimePicker`新增`init-current-date-time`参数是否在初始化时为空时设置为当前时间

#### Fixed

- 修复`TnDateTimePicker`动态修改最小最大时间后picker数据没有发生改变的问题

### 1.0.10-beta.8

_2023-08-22_

#### 新增

- `TnInput`新增`show-word-limit`和`word-limit-color`属性显示字数统计以及设置字数统计颜色

### 1.0.12-beta.1

_2023-08-24_

#### Fixed

- 修复`TnPopup`在结合部份组件一起使用的时候会闪烁的问题

### 1.0.12-beta.2
### 1.0.12-beta.3
### 1.0.12-beta.4

_2023-08-25_

#### 新增

- `TnWaterFall`插槽返回值中新增`index`属性返回当前元素的索引

### 1.0.12-beta.5

_2023-08-28_

#### 新增

- `TnNavbar`新增`right-operation-width`参数设置右边操作区域的宽度，配合`right`插槽实现自定义右边显示的内容

### 1.0.12-beta.6

_2023-08-28_

#### 优化

- `TnNavbar`优化标题居中效果


### 1.0.12-beta.7

_2023-08-30_

#### 优化

- 优化`TnImageUpload`、`TnCheckBox`、`TnRadio`样式

### 1.0.12-beta.8
### 1.0.12-beta.9

_2023-08-30_

#### 优化

- 优化`TnButton`样式

### 1.0.12-beta.10

_2023-08-30_

#### 优化

- `TnNavbar`优化标题居中效果

### 1.0.12-beta.11
### 1.0.12-beta.12
### 1.0.12-beta.13
### 1.0.12-beta.14

_2023-09-01_

#### 新增

- `TnTabs`、`TnTabsItem`新增`active-font-size``参数设置激活时的字体大小

### 1.0.12-beta.15

_2023-09-05_

#### 优化

- 优化`TnAvatar`、`TnButton`组件的点击事件

### 1.0.12-beta.16

_2023-09-05_

#### 新增

- `TnButton`新增`getUserInfo`、`chooseAvatar`、`agreePrivacyAuthorization`的open-type类型支持
- `TnNoticeBar`新增`left-icon-size`和`right-icon-size`参数设置左右图标的大小
- `TnSwiper`新增`blank-count`参数创建空白swiper参数


#### Fixed

- 修复`TnPopup`在初始化时为`true`时无法弹出弹框的问题

### 1.0.12-beta.17
### 1.0.12-beta.18
### 1.0.12-beta.19

_2023-09-10_

#### 优化

- 优化`TnIndexList`数据类型


### 1.0.14-beta.1

#### Fixed

- 修复`TnNavbar`无法初始化的问题
- 修复`TnWeekCalendar`动态修改`custom-data`后没有同步渲染的问题

#### 优化

- 优化`TnImageUpload`组件上传图片的进度样式

### 1.0.14-beta.2
### 1.0.14-beta.3

#### Fixed

- 修复无法识别`vw`和`vh`单位
  
### 1.0.15-beta.1

#### Fixed

- 修复`TnInput`配合`TnFormItem`时无法隐藏校验状态的问题
- 修复`TnInput`无法处理number类型的数值的问题
- 修复`TnTabbar`无法初始化`v-model`的问题

#### 新增

- `TnInput`中`confirm-type`新增参数

### 1.0.15-beta.2

#### Fixed

- 修复`TnPopup`无法触发`open`事件的问题
- 修复`TnNoticeBar`在垂直滚动时设置`font-size`高度无效的问题
- 修复`TnImageUpload`无法预览图片的问题

#### 优化

- 优化`TnImageUpload`内置信息显示控制参数
- 优化`TnPicker`超过长度的文本显示省略号

### 1.0.16-beta.1

#### Fixed

- 修复`TnTabs`组件修改了尺寸后滑块位置不正确的问题
- 修复`TnCalendar`在APP下切换年份后月份切换会失败的问题

### 1.0.16-beta.2
### 1.0.16-beta.3
### 1.0.16-beta.4

#### 优化

- 优化`TnTabbar`突起按钮的样式

### 1.0.16-beta.5

#### 优化

- 优化`TnSwiper`样式

### 1.0.16-beta.6

#### Fixed

- 修复`TnLazyLoad`无法显示加载中的问题

### 1.0.16-beta.7

#### Fixed

- 修复`TnPicker`value值为0时无法正常显示的问题

#### 优化

- 优化`TnPicker`返回的原始数据

### 1.0.16-beta.8

#### Fixed

- 修复`TnNotify`修改颜色失败的问题
- 修复`TnTabs`在支付宝小程序端出错的问题

### 1.0.17-beta.1

#### Fixed

- 修复`TnTabs`设置`active-font-size`无效的问题
- 修复`TnPicker`不选择后直接点击确认会报错的问题

### 1.0.17-beta.2

#### 新增

- `TnButton`新增`getRealtimePhoneNumber`type类型
- `TnButton`新增`phoneNumberNoQuotaToast`参数
- `TnButton`新增`getrealtimephonenumber`事件

### 1.0.17-beta.4

#### 新增

- `TnButton`新增`contact`事件

### 1.0.17-beta.5

#### Fixed

- 修复`TnCountDown`无法动态修改倒计时的问题

### 1.0.18-beta.1

#### 新增

- `TnDateTimePicker` `mode`新增`datetimeNoSecond`和`timeNoSecond`模式

### 1.0.18-beta.2

#### 新增

- `TnButton`新增`click-modifiers`参数设置点击事件的修饰符

#### 优化

- 优化`TnPopup`在ios端的显示效果

### 1.0.18-beta.3

#### Fixed

- 修复`TnInput`在`select`模式下`H5`端无法点击的问题
- 修复`TnInput`在`textarea`模式下无法换行的问题

#### 新增

- `TnInput`新增`underline`参数

### 1.0.18-beta.4

#### Fixed

- 修复`TnInput`在`number`模式下手动删除数据会出现`NaN`的问题
- 修复`TnTabbar`无法初始化选择`TabbarItem`的问题
- 修复`TnInput`在`textarea`模式下初始化值的时候无法统计字数的问题
- 修复`TnPopup`初始化时会触发`close`和`open`方法的问题

