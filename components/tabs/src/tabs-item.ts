import { buildProps, definePropType } from '../../../utils'

import type { ExtractPropTypes } from 'vue'
import type { BadgeProps } from '../../badge'

export type TabsItemBadgeConfig = Partial<Pick<BadgeProps, 'dot'>> & {
  value?: string | number
}

export const baseTabsItemProps = buildProps({
  /**
   * @description 默认颜色，以tn开头时使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 选中颜色，以tn开头时使用图鸟内置的颜色
   */
  activeColor: String,
  /**
   * @description 字体大小
   */
  fontSize: String,
} as const)

export const tabsItemProps = buildProps({
  ...baseTabsItemProps,
  /**
   * @description 标题
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * @description 角标配置
   */
  badgeConfig: {
    type: definePropType<TabsItemBadgeConfig>(Object),
    default: () => ({}),
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
})

export const tabsItemEmits = {
  /**
   * @description 点击事件
   */
  click: () => true,
}

export type TabsItemProps = ExtractPropTypes<typeof tabsItemProps>
export type TabsItemEmits = typeof tabsItemEmits
