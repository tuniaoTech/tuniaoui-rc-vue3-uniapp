import { computed, getCurrentInstance, ref, watch } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../../constants'

import type { PopupProps } from '../popup'

export const usePopup = (props: PopupProps) => {
  const { emit } = getCurrentInstance()!
  const iosDevice = computed<boolean>(() => {
    const systemInfo = uni.getSystemInfoSync()
    return systemInfo.osName === 'ios' || systemInfo.osName === 'macos'
  })

  // 是否显示遮罩层
  const showOverlay = ref(false)
  // 是否显示弹框
  const showPopup = ref(false)
  const visiblePopup = ref(false)
  let initPopupModelValue = false
  watch(
    () => props.modelValue,
    (value) => {
      if (value) {
        visiblePopup.value = true
        if (iosDevice.value) {
          setTimeout(() => {
            showPopup.value = true
            if (props.overlay) showOverlay.value = true
            initPopupModelValue && emit('open')
          }, 0)
        } else {
          showPopup.value = true
          if (props.overlay) showOverlay.value = true
          initPopupModelValue && emit('open')
        }
      } else {
        showPopup.value = false
        showOverlay.value = false
        setTimeout(() => {
          visiblePopup.value = false
        }, 250)
        initPopupModelValue && emit('close')
      }
      initPopupModelValue = true
    },
    {
      immediate: true,
    }
  )

  // 更新模态框的状态
  const updateModelValue = (value: boolean) => {
    emit(UPDATE_MODEL_EVENT, value)

    // nextTick(() => {
    //   emit(value ? 'open' : 'close')
    // })
  }

  // 点击关闭按钮
  const onClickCloseBtn = () => {
    updateModelValue(false)
  }

  // 点击遮罩层关闭模态框
  const onClickOverlay = () => {
    if (props.overlayCloseable) updateModelValue(false)
  }

  return {
    iosDevice,
    showOverlay,
    showPopup,
    visiblePopup,
    updateModelValue,
    onClickCloseBtn,
    onClickOverlay,
  }
}
