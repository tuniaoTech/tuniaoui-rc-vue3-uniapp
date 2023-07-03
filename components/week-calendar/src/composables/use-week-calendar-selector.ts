import { getCurrentInstance, nextTick, onMounted, ref } from 'vue'

import { useSelectorQuery } from '../../../../hooks'
import { debugWarn, generateId } from '../../../../utils'

export const useWeekCalendarSelector = () => {
  const instance = getCurrentInstance()
  if (!instance) {
    debugWarn('TnWeekCalendar', '请在 setup 中使用 useWeekCalendarSelector')
  }

  const componentDateItemId = `twcdi-${generateId()}`

  const { getSelectorNodeInfo } = useSelectorQuery(instance)

  // 存放日期节点容器的高度
  const dateItemContainerHeight = ref<number>(0)

  let initCount = 0
  // 获取日期节点信息
  const getDateItemNodeInfo = async () => {
    try {
      const nodeInfo = await getSelectorNodeInfo(`#${componentDateItemId}-0-0`)
      if (!nodeInfo) {
        if (initCount > 10) {
          initCount = 0
          throw new Error('获取日期节点信息失败')
        }
        initCount++
        setTimeout(() => {
          getDateItemNodeInfo()
        }, 150)
        return
      }

      dateItemContainerHeight.value = nodeInfo.height || 0
      dateItemContainerHeight.value += uni.upx2px(16)
    } catch (err) {
      debugWarn('TnWeekCalendar', `获取日期节点信息失败：${err}`)
    }
  }

  onMounted(() => {
    // #ifndef APP-PLUS || H5
    nextTick(() => {
      getDateItemNodeInfo()
    })
    // #endif
    // #ifdef APP-PLUS || H5
    setTimeout(() => {
      getDateItemNodeInfo()
    }, 150)
    // #endif
  })

  return {
    componentDateItemId,
    dateItemContainerHeight,
  }
}
