import { computed, toRef } from 'vue'
import {
  useComponentColor,
  useNamespace,
  useUniAppSystemRectInfo,
} from '../../../../hooks'
import { formatDomSizeValue } from '../../../../utils'

import type { CSSProperties, Ref } from 'vue'
import type { NavbarProps } from '../navbar'
import type { NavbackButtonType } from '../types'

export const useNavbarCustomStyle = (
  props: NavbarProps,
  backButtonType: Ref<NavbackButtonType>,
  hasRightOperation: Ref<boolean>
) => {
  const ns = useNamespace('navbar')
  const backNs = useNamespace('navbar-back')

  const { navBarInfo, navBarBoundingInfo } = useUniAppSystemRectInfo()

  // 解析颜色
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, 'bgColor'),
    'bg'
  )
  const [textColorClass, textColorStyle] = useComponentColor(
    toRef(props, 'textColor'),
    'text'
  )

  // 状态栏的高度
  const navbarHeight = computed<string>(() =>
    props.height ? formatDomSizeValue(props.height) : `${navBarInfo.height}px`
  )

  // 导航栏对应的类
  const navbarClass = computed<string>(() => {
    const cls: string[] = [ns.b()]

    // 固定在顶部
    if (props.fixed) cls.push(ns.m('fixed'))

    // 底部阴影
    if (props.bottomShadow) cls.push('tn-shadow')

    // 设置文字颜色
    if (textColorClass.value) cls.push(textColorClass.value)

    return cls.join(' ')
  })
  // 导航栏对应的样式
  const navbarStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    // 设置导航栏的高度
    style.height = navbarHeight.value

    // 设置导航栏的zIndex
    if (props.zIndex) style.zIndex = props.zIndex

    // 设置透明度
    if (props?.opacity !== undefined) style.opacity = props.opacity

    // 设置文字颜色
    if (textColorStyle.value) {
      style.color = textColorStyle.value
    } else if (!bgColorClass.value && !textColorClass.value) {
      style.color = 'var(--tn-text-color-primary)'
    }

    return style
  })

  // 背景颜色所属类
  const navbarBgClass = computed<string>(() => {
    const cls: string[] = [ns.e('bg')]

    // 设置背景颜色
    if (bgColorClass.value && !props.frosted) cls.push(bgColorClass.value)

    // 设置毛玻璃
    // #ifndef MP-ALIPAY
    if (props.frosted) cls.push(ns.em('bg', 'frosted'))
    // #endif

    return cls.join(' ')
  })
  // 背景颜色所属类
  const navbarBgStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.zIndex) style.zIndex = props.zIndex - 2

    // 设置背景颜色
    if (!bgColorClass.value)
      style.backgroundColor = bgColorStyle.value || 'var(--tn-color-white)'
    // 判断是否为毛玻璃
    // #ifndef MP-ALIPAY
    if (props.frosted) {
      style.backgroundColor = bgColorStyle.value || 'rgba(255, 255, 255, 0.5)'
    }
    // #endif

    return style
  })

  // 导航栏占位区域对应的样式
  const navbarPlaceholderStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.zIndex) style.zIndex = props.zIndex - 2

    // 设置导航栏的高度
    style.height = navbarHeight.value

    return style
  })

  // 导航栏容器区域对应样式
  const navbarWrapperStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.zIndex) style.zIndex = props.zIndex

    // 如果不是自定义高度则设置top值
    if (!props.height) {
      style.top = `${navBarInfo.statusHeight}px`
      style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`
    }

    return style
  })

  // 返回按钮对应的样式
  const backStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.zIndex) style.zIndex = props.zIndex

    // 设置返回按钮的宽高
    style.width = `${navBarBoundingInfo.width}px`
    style.height = `${navBarBoundingInfo.height}px`

    // 距离左边的距离
    style.left = `${navBarBoundingInfo.marginRight}px`

    return style
  })

  // 内容区域对应的样式
  const contentStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.zIndex) style.zIndex = props.zIndex - 1

    // 设置高度
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`
    if (props.height) style.height = formatDomSizeValue(props.height)

    // 判断是否存在返回区域
    if (backButtonType.value !== 'none') {
      style.paddingLeft = `${
        navBarBoundingInfo.width + navBarBoundingInfo.marginRight
      }px`
    }

    // 如果设置了右边操作区域的宽度则以当前区域为准设置右边安全区域
    if (hasRightOperation.value && props.rightOperationWidth) {
      style.paddingRight = formatDomSizeValue(props.rightOperationWidth)
    } else if (props.safeAreaInsetRight || hasRightOperation.value) {
      // 判断是否预留右边胶囊安全距离
      style.paddingRight = `${
        navBarBoundingInfo.width + navBarBoundingInfo.marginRight
      }px`
    }

    return style
  })

  // 右边操作区域对应的样式
  const rightOperationStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    // 设置最大宽度，防止出现右边操作区域的内容过多导致右边操作区域的宽度过大
    style.maxWidth = `${navBarBoundingInfo.width}px`

    if (props.zIndex) style.zIndex = props.zIndex

    // 设置高度
    style.height = `${navBarInfo.height - navBarInfo.statusHeight}px`
    if (props.height) style.height = formatDomSizeValue(props.height)

    // 设置宽度
    if (props.rightOperationWidth)
      style.width = formatDomSizeValue(props.rightOperationWidth)

    return style
  })

  return {
    ns,
    backNs,
    navBarInfo,
    navbarClass,
    navbarStyle,
    navbarBgClass,
    navbarBgStyle,
    navbarPlaceholderStyle,
    navbarWrapperStyle,
    backStyle,
    contentStyle,
    rightOperationStyle,
  }
}
