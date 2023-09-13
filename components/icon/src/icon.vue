<script lang="ts" setup>
import { iconEmits, iconProps } from './icon'
import { useIcon } from './composables'
// 依赖tn-icon样式(由于uniapp在小程序端支持svg有点问题，所以这里还是使用iconfont)
// #ifdef APP-PLUS
import '@tuniao/tn-icon/dist/https/index.css'
// #endif
// #ifndef APP-PLUS
import '@tuniao/tn-icon/dist/index.css'
// #endif

const props = defineProps(iconProps)
const emits = defineEmits(iconEmits)

const { isImg, iconClass, iconStyle } = useIcon(props)

// 图标点击事件
const handleClick = () => {
  emits('click')
}
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view :class="[iconClass]" :style="iconStyle" @tap="handleClick">
    <!-- 图片图标 -->
    <image v-if="isImg" class="image" :src="name" :mode="imgMode" />
    <!-- 正常图标 -->
    <text v-else :class="['icon', `tn-icon-${name}`]" />
  </view>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/icon.scss';
</style>
