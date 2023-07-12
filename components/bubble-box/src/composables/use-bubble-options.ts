import { computed, ref } from 'vue'
import { useComponentColor } from '../../../../hooks'

import type { BubbleBoxProps } from '../bubble-box'
import type { BubbleBoxOptionData } from '../types'

export const useBubbleOptions = (props: BubbleBoxProps) => {
  const bubbleOptions = computed<BubbleBoxOptionData>(() => {
    return props.options.map((item) => {
      const textColor = ref(item.textColor ?? props.textColor)
      const [textColorClass, textColorStyle] = useComponentColor(
        textColor,
        'text'
      )
      return {
        text: item.text || '',
        icon: item?.icon || '',
        disabled: props.disabled || item.disabled || false,
        color: {
          class: textColorClass.value,
          style: textColorStyle.value,
        },
      }
    })
  })

  return {
    bubbleOptions,
  }
}
