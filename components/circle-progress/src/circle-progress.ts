import { buildProps } from '../../../utils'
import { progressProps } from '../../progress'

import type { ExtractPropTypes } from 'vue'

export const circleProgressProps = buildProps({
  ...progressProps,
  /**
   * @description 圆环的半径，单位 px，只支持传递固定的值
   */
  radius: {
    type: Number,
    default: 50,
  },
  /**
   * @description 圆环的宽度，单位 px，只支持传递固定的值
   */
  ringWidth: {
    type: Number,
    default: 7,
  },
})

export type CircleProgressProps = ExtractPropTypes<typeof circleProgressProps>
