import React,{useState} from 'react'

const SafetyContents = () => {
  const [activeTab, setActiveTab] = useState("fire");
  const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <section className=" sm:my-0 my-10 mt-0 ">
    <div className="p-4">
        <div className="flex mx-auto flex-wrap mb-10 justify-center gap-5">
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
                className={`sm:px-6 py-3 w-1/2 sm:w-auto font-inter font-medium  leading-none tracking-wider ${
                  activeTab === tab
                    ? "  border-primary text-white  rounded-full bg-primary "
                    : " text-gray hover:text-black border border-gray/20 rounded-full hover:bg-subtlegray"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
               
              </button>
            ))}
          </div>
          {activeTab === "fire" && (
           <div>
            s
             </div>
        )}
         {activeTab === "flood" && (
            <h1 className='mt-32 ml-64'>dd</h1>
        )}
        </div>
        
        </section>
  )
}

export default SafetyContents