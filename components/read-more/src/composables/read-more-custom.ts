import { computed } from 'vue'
import { useComponentColor, useNamespace } from '../../../../hooks'

import type { CSSProperties } from 'vue'
import type { ReadMoreProps } from '../read-more'

export const useReadMoreCustomStyle = (props: ReadMoreProps) => {
  const ns = useNamespace('read-more')

  // 解析颜色
  const [tipsColorClass, tipsColorStyle] = useComponentColor(
    props.tipColor,
    'text'
  )

  // 操作区域的类
  const operationAreaClass = computed<string>(() => {
    const cls: string[] = [ns.e('operation-area')]

    if (tipsColorClass.value) cls.push(tipsColorClass.value)

    return cls.join(' ')
  })
  // 操作区域的样式
  const operationAreaStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (!tipsColorClass.value) {
      style.color = tipsColorStyle.value || 'var(--tn-color-primary)'
    }

    return style
  })

  return {
    ns,
    operationAreaClass,
    operationAreaStyle,
  }
}
