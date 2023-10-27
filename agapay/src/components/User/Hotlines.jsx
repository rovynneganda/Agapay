import React from "react";
import  AvenueStation  from './modalforhotline/AvenueStation';
import  CaloocanFirestation  from './modalforhotline/CaloocanFirestation';
import  PnpStation  from './modalforhotline/PnpStation';
import  PnpNpd  from './modalforhotline/PnpNpd';
import  MedicalCenter  from './modalforhotline/MedicalCenter';
import  SouthCenter  from './modalforhotline/SouthCenter';
import {

  FireIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";


const Hotlines = () => {
  return (
    <>
      <section className="bg-subtlegray">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-semibold text-primary mb-2 font-inter">
              General Hotlines
            </h1>
            <p className="lg:w-1/2 w-full text-gray leading-relaxed font-poppins">
              Emergency Contacts and Support Helplines
            </p>
          </div>
          <div className="flex flex-wrap -m-4  rounded-xl">
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <FireIcon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
                 
                  4th Avenue Fire Station
               
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  {" "}
                  +63(2)83649060
                </h3>
                <p className="leading-relaxed font-poppins">
                  A. Del Mundo Street corner 4th Avenue & 5th Avenue, Barangay
                  51
                </p>
                
                <AvenueStation />
                
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <FireIcon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
                
                  Caloocan City Central Fire Station
                
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  324 6527
                </h3>
                <p className="leading-relaxed font-poppins">
                  Samson Road, Sangandaan Barangay 1 Caloocan, Metro Manila{" "}
                </p>
                <CaloocanFirestation />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <ShieldExclamationIcon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
               
                  Northern Police District - Station 1
                 
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  +63(2)324 6528
                </h3>
                <p className="leading-relaxed font-poppins">
                  {" "}
                  Samson Road, Sangandaan, Caloocan City 1408 Metro Manila
                </p>
                <PnpStation />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <ShieldExclamationIcon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
              
                  PNP NPD
                  
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  +63(2)9623918
                </h3>
                <p className="leading-relaxed font-poppins">
                  {" "}
                  Cadena De Amor Street, Camarin 1. P.C. 1422 Caloocan City,
                  Metro Manila
                </p>
                <PnpNpd />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <BuildingOffice2Icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
                
                  Caloocan City North Medical Center
                  
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  02-8424-1724
                </h3>
                <p className="leading-relaxed font-poppins">
                  Camarin Road, Barangay 177 Caloocan City, Metro Manila
                </p>
                <MedicalCenter />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border border-gray/20 shadow p-6 rounded-lg bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  <BuildingOffice2Icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg text-primary font-medium  mb-2 font-inter cursor-pointer">
             
                  Caloocan City Medical Center
                  
                </h2>
                <h3 className="text-md text-gray/70 font-medium font-poppins mb-2">
                  +63 (2) 310 7920
                </h3>
                <p className="leading-relaxed font-poppins">
                  450, A. Mabini Street, Poblacion Caloocan City, Metro Manila
                </p>
                <SouthCenter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotlines;
