import { buildProps, isBoolean, isNumber, isString } from '../../../utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../constants'
import { useComponentCustomStyleProp, useFormSizeProps } from '../../base'

import type { ExtractPropTypes } from 'vue'

export const radioPropsBase = buildProps({
  /**
   * @description radio单选框尺寸
   */
  size: useFormSizeProps,
  /**
   * @description radio单选框是否禁用
   */
  disabled: Boolean,
  /**
   * @description radio禁止点击标签进行选择
   */
  labelDisabled: Boolean,
  /**
   * @description 是否显示边框
   */
  border: Boolean,
  /**
   * @description radio激活时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  activeColor: {
    type: String,
    default: '',
  },
} as const)

export const radioProps = buildProps({
  ...radioPropsBase,
  /**
   * @description radio单选框绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  /**
   * @description radio单选框的值，在使用单选组时，radio的值就是label
   */
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  /**
   * @description 自定义样式
   */
  customStyle: useComponentCustomStyleProp,
  /**
   * @description 自定义类名
   */
  customClass: String,
})
export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (value: string | number | boolean) =>
    isString(value) || isNumber(value) || isBoolean(value),
  [CHANGE_EVENT]: (value: string | number | boolean) =>
    isString(value) || isNumber(value) || isBoolean(value),
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
