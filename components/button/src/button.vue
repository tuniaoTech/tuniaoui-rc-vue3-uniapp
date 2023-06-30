<script lang="ts" setup>
import TnIcon from '../../icon/src/icon.vue'
import TnLoading from '../../loading/src/loading.vue'
import { buttonEmits, buttonProps } from './button'
import { useButton, useButtonCustomStyle } from './composables'

const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)

const { buttonClick, getPhoneNumber, openSetting, launchApp, openTypeError } =
  useButton(props, emits)
const { ns, buttonClass, buttonStyle } = useButtonCustomStyle(props)
</script>

<template>
  <button
    class="tn-u-btn-clear"
    :class="[buttonClass]"
    :style="buttonStyle"
    :hover-class="props.disabled || props.loading ? '' : hoverClass"
    :disabled="disabled"
    :form-type="formType"
    :open-type="openType"
    :app-parameter="appParameter"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    @tap.stop="buttonClick"
    @getphonenumber="getPhoneNumber"
    @opensetting="openSetting"
    @launchapp="launchApp"
    @error="openTypeError"
  >
    <!-- TODO: loading状态 -->
    <view v-if="loading" :class="[ns.m('loading')]">
      <TnLoading show animation mode="flower" color="tn-gray" />
    </view>
    <!-- icon显示 -->
    <view v-if="icon" :class="[ns.e('icon')]">
      <TnIcon :name="icon" />
    </view>
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/button.scss';
</style>
