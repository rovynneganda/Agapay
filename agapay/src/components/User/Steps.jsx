import React from 'react'
import { weather } from '../../assets'
const Steps = () => {
  return (
    <>
    <div class="flex flex-col lg:flex-row sm:gap-5 md:gap-10 gap-0 justify-center items-center sm:py-28 py-20 p-5 bg-primary/5">
    <div>
        <h1 class="sm:text-3xl text-2xl mb-10 font-inter text-primary font-bold sm:text-left text-center">Get support in three steps</h1>
       <div className='sm:ml-10 ml-5'>
       <p className='mb-4 font-poppins flex flex-row whitespace-pre'>
    <span className='h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center text-center font-bold italic mr-2 text-sm'>1</span>
    <span className=' font-semibold font-inter'>Sign in</span> to your account.
</p>
<p className='mb-4 font-poppins flex flex-row whitespace-pre'>
    <span className='h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center text-center font-bold italic mr-2 text-sm'>2</span>
    <span className=' font-semibold font-inter'>Submit</span> your report with a click.
</p>
<p className='mb-4 font-poppins flex flex-row whitespace-pre'>
    <span className='h-7 w-7 bg-primary text-white rounded-full flex items-center justify-center text-center font-bold italic mr-2 text-sm'>3</span>
    <span className=' font-semibold font-inter'>Receive</span> a prompt response.
</p>

        </div>
    </div>
    <div>
        <img src={weather} alt="Illustration" class=" h-64" />
    </div>
</div>
<div class="flex flex-col lg:flex-row sm:gap-5 md:gap-10 gap-0 justify-between items-center sm:py-14  p-5 bg-navprimary">
    <div className= ' sm:ml-14 ml-0'>
        <h1 className='font-inter sm:text-4xl text-3xl text-white mb-4 font-semibold leading-relaxed'>Effortless Incident Reporting</h1>
        <p className='font-inter text-lg text-white font-normal leading-relaxed mb-5 sm:mb-0'>Instantly report issues, get swift responses, ensure community safety with our user-friendly platform.</p>
    </div>
    <div>
        <img src={weather} alt="Illustration" class=" h-64" />
    </div>
</div>

<div class="flex flex-col-reverse lg:flex-row sm:gap-5 md:gap-10 gap-0  items-center sm:py-14  p-5 bg-secondary">
    <div className='sm:ml-14 ml-0'>
        <img src={weather} alt="Illustration" class=" h-64" />
    </div>
    <div >
        <h1 className='font-inter sm:text-4xl text-3xl text-white mb-4 font-semibold leading-relaxed'>Rapid Emergency Response</h1>
        <p className='font-inter text-lg text-white font-normal leading-relaxed mb-5 sm:mb-0'>Instant incident reporting, quick assistance, and immediate support. Your safety is our priority.</p>
    </div>
</div>

<div class="flex flex-col lg:flex-row sm:gap-5 md:gap-10 gap-0 justify-between items-center sm:py-14  p-5 bg-[#E49B0F]">
    <div className= ' sm:ml-14 ml-0'>
        <h1 className='font-inter sm:text-4xl text-3xl text-white mb-4 font-semibold leading-relaxed'>Community Safety</h1>
        <p className='font-inter text-lg text-white font-normal leading-relaxed mb-5 sm:mb-0'>Join our community-driven platform. Report incidents, aid others, and build a safer neighborhood together.</p>
    </div>
    <div>
        <img src={weather} alt="Illustration" class=" h-64" />
    </div>
</div>
    </>
  )
}

export default Steps