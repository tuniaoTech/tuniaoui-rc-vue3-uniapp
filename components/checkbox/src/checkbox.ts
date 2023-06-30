import { buildProps, isBoolean, isNumber, isString } from '../../../utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../constants'
import { useComponentCustomStyleProp, useFormSizeProps } from '../../base'

import type { ExtractPropTypes } from 'vue'

export const checkboxCheckedShapes = ['square', 'circle'] as const

export type CheckboxValueType = string | number | boolean

export const checkboxBaseProps = buildProps({
  /**
   * @description 复选框尺寸
   */
  size: useFormSizeProps,
  /**
   * @description 复选框的形状
   */
  checkedShape: {
    type: String,
    values: checkboxCheckedShapes,
  },
  /**
   * @description 是否禁用
   */
  disabled: Boolean,
  /**
   * @description 是否禁用点击标签切换
   */
  labelDisabled: Boolean,
  /**
   * @description 是否显示边框
   */
  border: Boolean,
  /**
   * @description 激活时的颜色，以tn开头则使用图鸟内置的颜色只支持普通颜色
   */
  activeColor: {
    type: String,
    default: '',
  },
} as const)

export const checkboxProps = buildProps({
  ...checkboxBaseProps,
  /**
   * @description 绑定的值
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description 用于标记多个复选框时的唯一标识
   */
  label: {
    type: [String, Number],
  },
  /**
   * @description 用于标记当前复选框是否为不确定状态，一般用于全选
   */
  indeterminate: Boolean,
  /**
   * @description 复选框选中时的值
   */
  activeValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  /**
   * @description 复选框未选中时的值
   */
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  /**
   * @description 自定义样式
   */
  customStyle: useComponentCustomStyleProp,
  /**
   * @description 自定义类名
   */
  customClass: String,
  /**
   * @description 值发生修改时是否触发表单验证
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
})

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (value: CheckboxValueType) =>
    isString(value) || isNumber(value) || isBoolean(value),
  [CHANGE_EVENT]: (value: CheckboxValueType) =>
    isString(value) || isNumber(value) || isBoolean(value),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits

export type CheckboxCheckedShape = (typeof checkboxCheckedShapes)[number]
