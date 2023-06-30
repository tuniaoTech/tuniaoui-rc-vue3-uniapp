import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../constants'
import { buildProps, definePropType, isArray, isBoolean } from '../../../utils'
import { basePickerProps } from '../../picker'

import type { ExtractPropTypes } from 'vue'

export type RegionPickerModelValueType = Array<string>

export const regionPickerProps = buildProps({
  ...basePickerProps,
  /**
   * @description 地区选择器绑定的值，可以传递省市区的code和name，["11", "1101", "110101"] || ["广东省", "广州市", "天河区"]
   */
  modelValue: {
    type: definePropType<RegionPickerModelValueType>(Array),
    default: [],
  },
  /**
   * @description 显示/隐藏地区选择器
   */
  open: Boolean,
})

export const regionPickerEmits = {
  [UPDATE_MODEL_EVENT]: (value: RegionPickerModelValueType) => isArray(value),
  'update:open': (value: boolean) => isBoolean(value),
  [CHANGE_EVENT]: (value: RegionPickerModelValueType) => isArray(value),
  confirm: (value: RegionPickerModelValueType) => isArray(value),
  cancel: () => true,
  close: () => true,
}

export type RegionPickerProps = ExtractPropTypes<typeof regionPickerProps>
export type RegionPickerEmits = typeof regionPickerEmits
