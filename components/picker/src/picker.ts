import { CHANGE_EVENT, UPDATE_MODEL_EVENT, ZIndex } from '../../../constants'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isNumber,
  isString,
} from '../../../utils'

import type { ExtractPropTypes } from 'vue'
import type { Arrayable } from '../../../utils'

export type PickerValueType = Arrayable<string | number>
export type PickerDataType = string | number | object
export type PickerData = Arrayable<Array<PickerDataType> | object>

export const PickerModes = ['signle', 'multiple', 'cascade'] as const

export const basePickerProps = buildProps({
  /**
   * @description 显示取消按钮
   */
  showCancel: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 取消按钮的文本
   */
  cancelText: {
    type: String,
    default: '取 消',
  },
  /**
   * @description 取消按钮的字体颜色，支持图鸟内置的字体颜色
   */
  cancelColor: String,
  /**
   * @description 显示确定按钮
   */
  showConfirm: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 确定按钮的文本
   */
  confirmText: {
    type: String,
    default: '确 定',
  },
  /**
   * @description 确定按钮的字体颜色，支持图鸟内置的字体颜色
   */
  confirmColor: String,
  /**
   * @description 显示遮罩
   */
  mask: Boolean,
  /**
   * zIndex
   */
  zIndex: {
    type: Number,
    default: ZIndex.popup,
  },
} as const)

export const pickerProps = buildProps({
  ...basePickerProps,
  /**
   * @description picker绑定的值
   */
  modelValue: {
    type: definePropType<PickerValueType>([String, Number, Array]),
    default: '',
  },
  /**
   * @description 显示picker选项弹框
   */
  open: Boolean,
  /**
   * @description picker选项的数据
   */
  data: {
    type: definePropType<PickerData>([Array]),
    default: () => [],
  },
  /**
   * @description picker选项的数据label属性名
   */
  labelKey: {
    type: String,
    default: 'label',
  },
  /**
   * @description picker选项的数据value属性名
   */
  valueKey: {
    type: String,
    default: 'value',
  },
  /**
   * @description picker选项的数据children属性名, 在级联选择器模式下生效
   */
  childrenKey: {
    type: String,
    default: 'children',
  },
})

export const pickerEmits = {
  [UPDATE_MODEL_EVENT]: (value: PickerValueType) =>
    isString(value) || isNumber(value) || isArray(value),
  'update:open': (value: boolean) => isBoolean(value),
  [CHANGE_EVENT]: (value: PickerValueType, index: number) =>
    isString(value) || isNumber(value) || isArray(value) || isNumber(index),
  confirm: (value: PickerValueType) =>
    isString(value) || isNumber(value) || isArray(value),
  cancel: () => true,
  close: () => true,
}

export type PickerProps = ExtractPropTypes<typeof pickerProps>
export type PickerEmits = typeof pickerEmits

export type PickerMode = (typeof PickerModes)[number]
