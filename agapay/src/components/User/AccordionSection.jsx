import React, {useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
const AccordionSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="max-w-2xl mx-auto p-5 py-28 ">
          <h2 className="text-4xl font-medium mb-4 text-center font-poppins">Frequently Asked Questions</h2>
          <div className="shadow-md">
            {faqData.map((item, index) => (
              <div key={index}>
               <button
                    className={`w-full p-4 border-b border-gray/20   flex justify-between rounded-sm text-left  focus:outline-none ${
                        activeIndex === index ? 'text-primary' : 'hover:bg-subtlegray hover:text-primary'
                    }`}
                    onClick={() => toggleAccordion(index)}
                    >
                    <span className='font-inter font-semibold'>{item.question}</span>
                    <ChevronDownIcon className={`w-5 h-5 inline-block transition-transform transform ${
                        activeIndex === index ? 'rotate-180' : ''
                    }`} />
                    </button>

                {activeIndex === index && (
                  <div className="p-4 bg-gray/5">
                    <p className="font-poppins font-normal leading-loose tracking-wide">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    const faqData = [
      {
        question: 'How does the "Find Nearby" button work? Can you show me nearby hospitals or emergency services on the map?',
        answer: "Certainly! The 'Find Nearby' button uses smart maps to find your location and then shows nearby places like hospitals. It's like having a map that guides you to the closest help during an emergency.",
      },
      {
        question: 'How does the system check the videos I record? Does it use some kind of smart technology?',
        answer: "Yes! The system uses smart technology (like a smart helper) to check the videos you record. It watches the videos and makes sure they're helpful and real. This helps make sure that the information you share is reliable for emergency responders.",
      },
      {
        question: 'How does the system show the weather forecast? Is it just for display, or does it do more?',
        answer: "Absolutely! The system displays the weather forecast to keep you informed about what's coming. While it doesn't actively intervene, it serves as a handy visual guide, like checking the weather on your phone. So, it's more about helping you plan ahead and stay aware of the weather conditions in your area.",
      },
    ];
export default AccordionSection