import SharedHero from '@/components/SharedHero'
import PlanSteps from '@/components/plan/PlanSteps'

const subscribeTitle = 'Create a plan'
const subscribeSubtitle =
  'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
const subscribeImage = 'plan'

const page = () => {
  return (
    <div>
      <SharedHero
        title={subscribeTitle}
        subtitle={subscribeSubtitle}
        image='plan'
      />
      <PlanSteps />
    </div>
  )
}

export default page
