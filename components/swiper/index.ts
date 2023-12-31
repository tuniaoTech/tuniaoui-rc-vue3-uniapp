import { withNoopInstall } from '../../utils'
import Swiper from './src/swiper.vue'

export const TnSwiper = withNoopInstall(Swiper)
export default TnSwiper

export * from './src/swiper'

export type { TnSwiperInstance } from './src/instance'
