<script lang="ts" setup>
import {} from 'vue'
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './composables'

const props = defineProps(overlayProps)
const emits = defineEmits(overlayEmits)

const { overlayClass, overlayStyle, overlayClick } = useOverlay(props, emits)
</script>

<template>
  <view
    :class="[overlayClass]"
    :style="overlayStyle"
    @tap.stop="overlayClick"
    @touchmove.stop.prevent="() => {}"
  >
  <template v-if="props.destroyContent">
    <template v-if="props.show">
      <slot></slot>
    </template>
  </template>
  <template v-else>
    <slot></slot>
  </template>
  </view>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/overlay.scss';
</style>
