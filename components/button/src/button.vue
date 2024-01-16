<script lang="ts" setup>
import TnIcon from '../../icon/src/icon.vue'
import TnLoading from '../../loading/src/loading.vue'
import { buttonEmits, buttonProps } from './button'
import { useButton, useButtonCustomStyle } from './composables'

const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)

const {
  buttonClick,
  getPhoneNumber,
  getRealTimePhoneNumber,
  openSetting,
  launchApp,
  getUserInfo,
  chooseAvatar,
  agreePrivacyAuthorization,
  contact,
  openTypeError,
} = useButton(props, emits)
const { ns, buttonClass, buttonStyle } = useButtonCustomStyle(props)
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
  <button
    v-if="props.clickModifiers === 'stop'"
    class="tn-u-btn-clear"
    :class="[buttonClass]"
    :style="buttonStyle"
    :hover-class="
      props.disabled || props.loading || props.onlyButton ? '' : hoverClass
    "
    :disabled="disabled"
    :form-type="formType"
    :open-type="openType"
    :app-parameter="appParameter"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :phone-number-no-quota-toast="phoneNumberNoQuotaToast"
    @tap.stop="buttonClick"
    @getphonenumber="getPhoneNumber"
    @getrealtimephonenumber="getRealTimePhoneNumber"
    @opensetting="openSetting"
    @launchapp="launchApp"
    @getuserinfo="getUserInfo"
    @chooseavatar="chooseAvatar"
    @agreeprivacyauthorization="agreePrivacyAuthorization"
    @contact="contact"
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
  <button
    v-else
    class="tn-u-btn-clear"
    :class="[buttonClass]"
    :style="buttonStyle"
    :hover-class="
      props.disabled || props.loading || props.onlyButton ? '' : hoverClass
    "
    :disabled="disabled"
    :form-type="formType"
    :open-type="openType"
    :app-parameter="appParameter"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :phone-number-no-quota-toast="phoneNumberNoQuotaToast"
    @tap="buttonClick"
    @getphonenumber="getPhoneNumber"
    @getrealtimephonenumber="getRealTimePhoneNumber"
    @opensetting="openSetting"
    @launchapp="launchApp"
    @getuserinfo="getUserInfo"
    @chooseavatar="chooseAvatar"
    @agreeprivacyauthorization="agreePrivacyAuthorization"
    @contact="contact"
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
