import { withInstall, withNoopInstall } from '../../utils'
import Steps from './src/steps.vue'
import Step from './src/step.vue'

export const TnSteps = withInstall(Steps, {
  Step,
})
export const TnStep = withNoopInstall(Step)
export default TnSteps

export * from './src/steps'
export * from './src/step'
export * from './src/types'

export type { TnStepsInstance, TnStepInstance } from './src/instance'
