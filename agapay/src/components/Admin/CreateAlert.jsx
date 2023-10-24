import React,{useState} from 'react'

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
           <div className="flex w-full max-w-5xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
           <div className="p-4 w-sm">
            <h1>titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi titi titi titi titi titi titi titi titi  titi titi titi titititi  titi titititi  titi titi titi titi</h1>
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