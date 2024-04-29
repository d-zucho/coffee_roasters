interface StepProps {
  step: string
  title: string
  description: string
}

const Step = ({ step, title, description }: StepProps) => {
  return (
    <article className='text-center md:text-left` text-lightCream'>
      <h2 className='heading1 font-fraunces md:text-left text-paleOrange pt-10'>
        {step}
      </h2>
      <div className='pb-5'>
        <h3 className='heading4 md:text-left text-lightCream pb-10'>{title}</h3>
        <p className='leading-7 md:text-left text-sm max-w-[250px] mx-auto md:mx-0'>
          {description}
        </p>
      </div>
    </article>
  )
}

export default Step
