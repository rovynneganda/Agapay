import React from "react";
import { logo, persuade1, persuade2, persuade3 } from "../../assets";

const featureData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    alt: "Emergency Guidelines Image Description",
    title: "Emergency Guidelines",
    description: "Learn Our Essential Protocols for Ensuring Your Safety During Emergencies"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
    alt: "Safety Updates Image Description",
    title: "Safety Updates",
    description: "Provides real-time weather and disaster alerts for your safety."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80",
    alt: "Immediate Assistance Image Description",
    title: "Immediate Assistance",
    description: "Agapay facilitates swift emergency alerts to authorities or contacts."
  }
];

const PersuadingUsers = () => {
  return (
    <section className="">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-inter text-primary">
            Discover Our Key Features
          </h2>
          <p className="mt-1 font-poppins">Explore how our services can benefit you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((feature) => (
            <a
              key={feature.id}
              className="group flex flex-col h-full border border-gray/20 shadow-md hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={feature.image} alt={feature.alt} />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold font-poppins">{feature.title}</h3>
                <p className="mt-5 font-inter">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersuadingUsers;
