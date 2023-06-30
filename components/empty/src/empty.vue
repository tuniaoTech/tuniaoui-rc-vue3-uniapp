<script lang="ts" setup>
import { computed } from 'vue'
import TnIcon from '../../icon/src/icon.vue'
import { emptyDefaultTips } from '../libs'
import { emptyProps } from './empty'
import { useEmptyCustomStyle } from './composables'

const props = defineProps(emptyProps)

const { ns, emptyClass, emptyStyle, iconTextStyle } = useEmptyCustomStyle(props)

// 根据类型获取默认提示
const emptyTips = computed<string>(() =>
  props.mode ? emptyDefaultTips[props.mode] : ''
)
</script>

<template>
  <view :class="[emptyClass]" :style="emptyStyle">
    <!-- 图标 -->
    <view :class="[ns.e('icon')]" :style="iconTextStyle('icon')">
      <slot name="icon">
        <TnIcon :name="`empty-${mode}`" />
      </slot>
    </view>
    <!-- 提示文字 -->
    <view
      v-if="showTips || $slots.tips"
      :class="[ns.e('tips')]"
      :style="iconTextStyle('tips')"
    >
      <slot name="tips">
        {{ emptyTips }}
      </slot>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/empty.scss';
</style>
