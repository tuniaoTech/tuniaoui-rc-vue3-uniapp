import { buildProps, isNumber, isString } from '../../../utils'

import type { ExtractPropTypes } from 'vue'

export const baseTabbarItemProps = buildProps({
  /**
   * @description 未选中时的颜色
   */
  inactiveColor: String,
  /**
   * @description 选中时的颜色
   */
  activeColor: String,
  /**
   * @description 图标大小
   */
  iconSize: String,
  /**
   * @description 文字大小
   */
  fontSize: String,
} as const)

export const tabbarItemProps = buildProps({
  ...baseTabbarItemProps,
  /**
   * @description item的唯一标识，与modelValue对应
   */
  name: {
    type: [String, Number],
  },
  /**
   * @description 图标
   */
  icon: String,
  /**
   * @description 选中时的图标
   */
  activeIcon: String,
  /**
   * @description 文字
   */
  text: String,
  /**
   * @description item是否凸起
   */
  bulge: Boolean,
  /**
   * @description 凸起按钮背景颜色
   */
  bulgeBgColor: String,
  /**
   * @description 凸起按钮字体颜色
   */
  bulgeTextColor: String,
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
})

export const tabbatItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true,
}

export type TabbarItemProps = ExtractPropTypes<typeof tabbarItemProps>
export type TabbarItemEmits = typeof tabbatItemEmits
