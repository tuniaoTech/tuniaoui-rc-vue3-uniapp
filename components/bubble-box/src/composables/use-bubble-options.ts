import { computed } from 'vue'
import { useComponentColor } from '../../../../hooks'

import type { BubbleBoxProps } from '../bubble-box'
import type { BubbleBoxOptionData } from '../types'

export const useBubbleOptions = (props: BubbleBoxProps) => {
  const bubbleOptions = computed<BubbleBoxOptionData>(() => {
    return props.options.map((item) => {
      const [textColorClass, textColorStyle] = useComponentColor(
        item.textColor ?? props.textColor,
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
