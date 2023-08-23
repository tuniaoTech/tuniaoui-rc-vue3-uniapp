import { getCurrentInstance, nextTick, ref, watch } from 'vue'
import dayjs from '../../../../libs/dayjs'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../../constants'
import { innerDefaultDateTimeFormat } from '../types'
import { useDateTimeData } from './use-date-time-data'
import { useHandleMinMaxTime } from './use-handle-min-max-time'

import type { Dayjs } from '../../../../libs/dayjs'
import type { DateTimePickerProps } from '../date-time-picker'
import type { TnPickerInstance } from '../../../picker'

export const MIN_MAX_VALUE = (
  minValue: number,
  maxValue: number,
  currentValue: number
) => Math.min(Math.max(minValue, currentValue), maxValue)

export const useDateTimePicker = (props: DateTimePickerProps) => {
  const { emit } = getCurrentInstance()!

  const {
    pickerData,
    minTimeDayjs,
    maxTimeDayjs,
    generatePickerData,
    fillDateTime,
  } = useDateTimeData(props)

  const { handlePickerChangeMinMaxTime } = useHandleMinMaxTime(
    minTimeDayjs,
    maxTimeDayjs
  )

  const pickerRef = ref<TnPickerInstance>()

  // 显示/隐藏日期时间选择器
  const showPicker = ref(false)
  watch(
    () => props.open,
    (val) => {
      showPicker.value = val
    }
  )
  const _closePicker = () => {
    emit('update:open', false)
  }
  // picker弹框关闭事件
  const handlePickerCloseEvent = () => {
    _closePicker()
    initDateTimePicker(false)
    emit('close')
  }
  // 如果最小值/最大值发生改变，则重新初始化日期时间选择器
  watch(
    () => [props.minTime, props.maxTime, props.modelValue],
    () => {
      initDateTimePicker(false)
    }
  )

  // picker选中的数据
  const pickerSelectData = ref<Array<string | number>>([])

  // 获取picker选中的值
  const getDateTimeValue = (dateTime: Dayjs) => {
    const year = dateTime.year()
    const month = String(dateTime.month() + 1).padStart(2, '0')
    const date = String(dateTime.date()).padStart(2, '0')
    const hour = String(dateTime.hour()).padStart(2, '0')
    const minute = String(dateTime.minute()).padStart(2, '0')
    const second = String(dateTime.second()).padStart(2, '0')
    if (props.mode === 'year') return `${year}`
    if (props.mode === 'yearmonth')
      return dayjs(`${year}/${month}`).format(props.format || 'YYYY/MM')
    if (props.mode === 'date')
      return dayjs(`${year}/${month}/${date}`).format(
        props.format || 'YYYY/MM/DD'
      )
    if (props.mode === 'time') return `${hour}:${minute}:${second}`
    return dayjs(`${year}/${month}/${date} ${hour}:${minute}:${second}`).format(
      props.format || innerDefaultDateTimeFormat
    )
  }

  // 设置默认picker选中的值
  const setDefaultPickerSelectValue = (dateTime: Dayjs) => {
    const year = dateTime.year()
    const month = dateTime.month() + 1
    const date = dateTime.date()
    const hour = dateTime.hour()
    const minute = dateTime.minute()
    const second = dateTime.second()
    if (props.mode === 'year') pickerSelectData.value = [year]
    if (props.mode === 'yearmonth') pickerSelectData.value = [year, month]
    if (props.mode === 'date') pickerSelectData.value = [year, month, date]
    if (props.mode === 'time') pickerSelectData.value = [hour, minute, second]
    if (props.mode === 'datetime')
      pickerSelectData.value = [year, month, date, hour, minute, second]
  }
  // 初始化日期时间选择器
  const initDateTimePicker = (updateModelValue = true) => {
    let defaultTime = dayjs()
    // 如果有传递默认值，则使用默认值，没有则使用当前时间
    if (props.modelValue) {
      defaultTime = fillDateTime(props.modelValue, props.format)
    }
    // 设置defaultTime最小和最大时间
    if (props.mode !== 'time') {
      defaultTime = defaultTime.year(
        MIN_MAX_VALUE(
          minTimeDayjs.value.year(),
          maxTimeDayjs.value.year(),
          defaultTime.year()
        )
      )
      if (defaultTime.year() === minTimeDayjs.value.year()) {
        if (defaultTime.month() < minTimeDayjs.value.month()) {
          defaultTime = defaultTime
            .month(minTimeDayjs.value.month())
            .date(minTimeDayjs.value.date())
            .hour(minTimeDayjs.value.hour())
            .minute(minTimeDayjs.value.minute())
            .second(minTimeDayjs.value.second())
        } else if (defaultTime.month() > maxTimeDayjs.value.month()) {
          defaultTime = defaultTime
            .month(maxTimeDayjs.value.month())
            .date(1)
            .hour(0)
            .minute(0)
            .second(0)
        } else {
          if (defaultTime.date() < minTimeDayjs.value.date()) {
            defaultTime = defaultTime
              .date(minTimeDayjs.value.date())
              .hour(minTimeDayjs.value.hour())
              .minute(minTimeDayjs.value.minute())
          } else if (defaultTime.date() > maxTimeDayjs.value.date()) {
            defaultTime = defaultTime
              .date(maxTimeDayjs.value.date())
              .hour(maxTimeDayjs.value.hour())
              .minute(maxTimeDayjs.value.minute())
          }
        }
      }
    } else {
      defaultTime = defaultTime.hour(
        MIN_MAX_VALUE(
          minTimeDayjs.value.hour(),
          maxTimeDayjs.value.hour(),
          defaultTime.hour()
        )
      )
      if (defaultTime.hour() === minTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(
          Math.max(minTimeDayjs.value.minute(), defaultTime.minute())
        )
        if (defaultTime.minute() === minTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(
            Math.max(minTimeDayjs.value.second(), defaultTime.second())
          )
        }
      }
      if (defaultTime.hour() === maxTimeDayjs.value.hour()) {
        defaultTime = defaultTime.minute(
          Math.min(maxTimeDayjs.value.minute(), defaultTime.minute())
        )
        if (defaultTime.minute() === maxTimeDayjs.value.minute()) {
          defaultTime = defaultTime.second(0)
        }
      }
    }
    generatePickerData(defaultTime)

    // 设置默认picker选中的值
    setDefaultPickerSelectValue(defaultTime)

    // 更新用户modelValue
    if (updateModelValue) {
      emit(UPDATE_MODEL_EVENT, getDateTimeValue(defaultTime))
    }
  }

  // 获取修改填充后的日期时间Dayjs对象
  const getFillDateTimeDayjs = (value: (string | number)[]): Dayjs => {
    let dateTimeValue = ''
    if (props.mode === 'year') {
      dateTimeValue = `${value[0]}`
    }
    if (props.mode === 'yearmonth') {
      dateTimeValue = `${value[0]}/${value[1]}`
    }
    if (props.mode === 'date') {
      const year = Number(value[0])
      const month = Number(value[1])
      const date = Math.min(
        dayjs()
          .year(year)
          .month(month - 1)
          .daysInMonth(),
        Number(value[2])
      )
      dateTimeValue = `${value[0]}/${month}/${date}`
    }
    if (props.mode === 'time') {
      dateTimeValue = `${value[0]}:${value[1]}:${value[2]}`
    }
    if (props.mode === 'datetime') {
      const year = Number(value[0])
      const month = Number(value[1])
      const date = Math.min(
        dayjs()
          .year(year)
          .month(month - 1)
          .daysInMonth(),
        Number(value[2])
      )
      dateTimeValue = `${value[0]}/${month}/${date} ${value[3]}:${value[4]}:${value[5]}`
    }
    return fillDateTime(dateTimeValue)
  }

  // picker选择发生改变回调
  const pickerValueChangeEvent = (
    value: string | number | (string | number)[]
  ) => {
    let timeValue = getFillDateTimeDayjs(value as (string | number)[])
    // 处理最小/最大值
    timeValue = handlePickerChangeMinMaxTime(props.mode, timeValue)

    // 回填处理后的数据
    if (props.mode === 'year') {
      pickerSelectData.value = [timeValue.year()]
    }
    if (props.mode === 'yearmonth') {
      pickerSelectData.value = [timeValue.year(), timeValue.month() + 1]
    }
    if (props.mode === 'date') {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date(),
      ]
    }
    if (props.mode === 'time') {
      pickerSelectData.value = [
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second(),
      ]
    }
    if (props.mode === 'datetime') {
      pickerSelectData.value = [
        timeValue.year(),
        timeValue.month() + 1,
        timeValue.date(),
        timeValue.hour(),
        timeValue.minute(),
        timeValue.second(),
      ]
    }

    // 重新生成数据
    nextTick(() => {
      generatePickerData(timeValue)
    })

    const dateTimeValue = getDateTimeValue(timeValue)
    // emit(UPDATE_MODEL_EVENT, dateTimeValue)
    emit(CHANGE_EVENT, dateTimeValue)
  }

  // 确认日期时间回调
  const handlePickerConfirmEvent = (
    value: string | number | (string | number)[]
  ) => {
    const timeValue = getFillDateTimeDayjs(value as (string | number)[])
    const dateTimeValue = getDateTimeValue(timeValue)
    emit(UPDATE_MODEL_EVENT, dateTimeValue)
    nextTick(() => {
      emit('confirm', dateTimeValue)
    })
    _closePicker()
  }

  // 取消日期时间回调
  const handlePickerCancelEvent = () => {
    initDateTimePicker(false)
    emit('cancel')
    _closePicker()
  }

  return {
    pickerRef,
    showPicker,
    pickerData,
    pickerSelectData,
    handlePickerCloseEvent,
    initDateTimePicker,
    pickerValueChangeEvent,
    handlePickerConfirmEvent,
    handlePickerCancelEvent,
  }
}
