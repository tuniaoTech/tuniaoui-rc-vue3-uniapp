import { buildProps, isString } from '../../../utils'

import type { ExtractPropTypes } from 'vue'

export const subsectionItemBaseProps = buildProps({
  /**
   * @description 默认颜色，以tn开头使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 激活时的颜色，以tn开头使用图鸟内置的颜色
   */
  activeColor: String,
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
} as const)

export const subsectionItemProps = buildProps({
  ...subsectionItemBaseProps,
  /**
   * @description 标题
   */
  title: String,
})

export const subsectionItemEmits = {
  /**
   * @description 点击事件
   */
  click: (title: string) => isString(title),
}

export type SubsectionItemProps = ExtractPropTypes<typeof subsectionItemProps>
export type SubsectionItemEmits = typeof subsectionItemEmits
