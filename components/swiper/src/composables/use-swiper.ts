import { computed, nextTick, ref, watch } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../../constants'
import { isEmptyVariableInDefault } from '../../../../utils'

import type { SetupContext } from 'vue'
import type { SwiperEmits, SwiperProps } from '../swiper'

export const useSwiper = (
  props: SwiperProps,
  emits: SetupContext<SwiperEmits>['emit']
) => {
  // 当前选中的SwiperItem索引
  const currentSwiperIndex = ref<number>(
    isEmptyVariableInDefault(props?.modelValue, 0)
  )

  watch(
    () => props.modelValue,
    (value) => (currentSwiperIndex.value = isEmptyVariableInDefault(value, 0))
  )

  // 轮播数据
  const swiperData = computed<any[]>(() => {
    if (props.data?.length) return props.data
    if (props.blankCount)
      return Array.from({ length: props.blankCount }).map((_, i) => i)
    return []
  })

  // swiper数量
  const swiperCount = computed<number>(() => swiperData.value?.length || 0)

  // 处理swiper滑动事件
  const swiperChangeHandle = (event: any) => {
    const { current } = event.detail
    if (props.modelValue === undefined || props.modelValue === 0)
      currentSwiperIndex.value = current
    emits(UPDATE_MODEL_EVENT, current)
    nextTick(() => {
      emits(CHANGE_EVENT, current)
    })
  }

  // 处理item点击事件
  const itemClickHandle = () => {
    emits('item-click', currentSwiperIndex.value)
  }

  return {
    swiperData,
    currentSwiperIndex,
    swiperCount,
    swiperChangeHandle,
    itemClickHandle,
  }
}
