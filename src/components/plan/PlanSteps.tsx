import { subscribeSteps } from '@/textData/subscribeSteps'
import Step from './Step'
import MaxWidthWrapper from '../MaxWidthWrapper'

const PlanSteps = () => {
  return (
    <section className='mt-28 bg-steps-mobile md:bg-steps-tablet lg:bg-steps-desktop bg-center bg-no-repeat bg-cover mb-28 py-12 rounded-lg'>
      <MaxWidthWrapper>
        <div className='w-full'>
          <h2>Steps</h2>
          <div className='mb-10 grid grid-cols-3'>
            {subscribeSteps.map((step) => (
              <div className='relative'>
                <div className='md:border-t-4 md:border-paleOrange last:border-0' />
                <span className='hidden md:block w-[32px] h-[32px] border-2 border-darkCyan rounded-full absolute bg-darkCyan -top-4'></span>
              </div>
            ))}
          </div>
          <div className='grid items-center md:items-baseline md:px-0 md:grid-cols-3 px-5 gap-5'>
            {subscribeSteps.map((step) => (
              <Step
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.text}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default PlanSteps
