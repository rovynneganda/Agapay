import React from 'react';
import { weather } from '../../assets';
import { animate1,animate2 } from "../../assets";

const stepsData = [
  {
    videoSrc: animate1,
     altText: 'Step 2 Image Description',
    stepNumber: 1,
    title: 'Sign In',
    description: 'Log in to access your account. Sign in to initiate the process. Once signed in, you can report issues and access our services seamlessly.',
  },
  {
    videoSrc: animate2,
   altText: 'Step 2 Image Description',
    stepNumber: 2,
    title: 'Report',
    description: 'Submit your report with a click. Instantly report emergencies, fires, incidents, and request ambulance support with a simple click.',
  },
  {
    videoSrc: animate2,
    altText: 'Step 3 Image Description',
    stepNumber: 3,
    title: 'Wait for Response',
    description: 'Expect a swift reply. Wait for confirmation from our team, and they will contact you if help is en route.',
  },
];

const Steps = () => {
  return (
    <>
      <div className=' rounded-xl mb-10'>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  rounded-xl ">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-3xl font-bold md:text-4xl tracking-wide font-inter text-primary">
              Support in <span className='text-secondary'>3 steps</span>
            </h2>
            <p className="mt-1 text-secondary font-inter">Here's how it Works</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stepsData.map((step, index) => (
              <a key={index} className="group rounded-xl overflow-hidden cursor-pointer border border-gray/20 shadow-lg p-2">
                <div className="relative rounded-xl overflow-hidden">
                <video autoPlay loop muted playsInline className='w-full h-full top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl' src={step.videoSrc}>
                  </video>
                </div>
                <div className="mt-3 p-5">
                  <p className='mb-3 text-primary text-lg font-semibold font-inter leading-loose tracking-wider'>{`Step ${step.stepNumber} - ${step.title}`}</p>
                  {/* <h3 className="text-xl font-semibold text-primary font-inter tracking-wider">{step.title}</h3> */}
                  <p className="mt-3 font-poppins text-black">{step.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
