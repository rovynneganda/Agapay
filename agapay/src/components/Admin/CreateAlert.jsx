import React,{useState} from 'react'
import { ShieldExclamationIcon,FireIcon } from '@heroicons/react/24/outline';
const CreateAlert = () => {
    const [activeTab, setActiveTab] = useState("fire");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveQuestion(null);
      };
  return (
<>
<section className="bg-accent min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <h1 className='font-inter text-3xl mt-3'>Alert</h1>

        <hr className='border-primary mt-3 mb-3' />
        <div className="flex mx-auto flex-wrap mb-10 bg-white">
            {[
              "fire",
              "earthquake",
              "tsunami",
              "landslide",
              "flood",
              "tropicalCyclone",
              "volcanicEruption",
              "stormSurge",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 font-inter font-medium inline-flex items-center leading-none tracking-wider ${
                  activeTab === tab
                    ? "bg-graybg  border-primary text-primary rounded-t "
                    : "border-bordergray text-gray hover:text-black"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
               
              </button>
            ))}
          </div>
          {activeTab === "fire" && (
           <div className="w-full max-w-5xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
           <div className="p-4 w-sm">
            <div className='flex justify-between'>
            <ShieldExclamationIcon className='w-10 h-10 text-red' />
            <FireIcon className='w-10 h-10 text-primary' />
            </div>
           <div>
           <h1 className='sm:mt-1 sm:mb-1 mt-5 mb-5 font-semibold font-inter text-5xl text-primary text-center'>Fire Alert</h1>
           </div>
           <div className="flex sm:flex-row flex-col gap-3 mt-5  font-inter">
        <div className='w-full mb-3'>
            <label for="first_name" className="block mb-2 text-sm font-medium text-black">Level</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray/30  text-gray text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"required/>
        </div>
        <div className='w-full mb-3 '>
            <label for="last_name" className="block mb-2 text-sm font-medium text-black">Location</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray/30  text-gray text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none " required/>
        </div>
        <div>
          

        </div>
    </div>
    <div className='mt-3'>
    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray/30 focus:ring-primary focus:border-primary focus:outline-none " placeholder="Provide a Description"></textarea>
    </div>
    

            </div>
          <div className='flex justify-center'>
            <button className='inline-flex items-center px-5 py-2.5 mt-2  text-sm font-semibold text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary focus:outline-none hover:bg-primarydark'>Alert the Users</button>
          </div>
            </div>
        )}
         {activeTab === "flood" && (
            <h1 className='mt-32 ml-64'>dd</h1>
        )}
        </div>
        
        </section>
</>
  )
}

export default CreateAlert