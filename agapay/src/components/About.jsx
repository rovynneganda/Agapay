import React, {useEffect} from "react";
import { logo, weather, alerts } from "../assets";
import Footer from "./Footer";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="py-5 p-4 mb-3 mt-32 ">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-20 sm:my-16 my-0">
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center rounded-full font-poppins px-2 py-1 text-xs font-medium mb-5  ring-1 ring-primary text-secondary ring-inset ">
              Community Safety Advocate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-inter">
              Assistance Given Amidst <br className="hidden md:inline" /> Plight
              and Yields
            </h1>
            <p className="mt-5  font-poppins sm:text-left text-center">
              Providing help when it's needed the most. Our dedicated team is
              committed to providing <br className="hidden sm:block" /> reliable
              and compassionate help during challenging times, ensuring that no
              one feels alone in their struggles.
            </p>
            <div className="mt-5 flex items-center sm:justify-start justify-center">
              <button
                type="button"
                className="text-white bg-primary transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  hover:bg-primarydark font-poppins font-semibold  rounded-full text-sm px-5 py-2.5 mr-2"
              >
                Download
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  ml-2 hidden sm:inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <a
                href="#asd"
                className="text-white bg-secondary transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  hover:bg-tertiary  font-poppins font-semibold  rounded-full text-sm px-5 py-2.5 mr-2"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hidden sm:inline-block  ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative -z-10  overflow-hidden">
            <img
              src={logo}
              alt="Description of the image"
              className="sm:h-48 h-36 mt-2    object-cover object-center"
            />
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-white py-24 sm:py-32" id="asd">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-secondary font-poppins">
                  Report Incidents
                </h2>
                <p className="mt-2 text-3xl font-bold capitalize tracking-tight text-primary sm:text-4xl font-inter">
                  Enhance Community Safety
                </p>
                <p className="mt-6 text-lg leading-8 font-poppins text-dark">
                  Empower your community by reporting incidents, accidents, or
                  safety concerns. Your vigilance contributes to a safer
                  environment for everyone.{" "}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-tertiary">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary opacity-80"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Video Reporting.
                    </dt>
                    <dd className="inline font-poppins">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-tertiary">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary opacity-80"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GIS.
                    </dt>
                    <dd className="inline font-poppins ">
                      {" "}
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-tertiary">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-primary opacity-80"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path
                          fillRule="evenodd"
                          d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Emergency Hotlines.
                    </dt>
                    <dd className="inline font-poppins">
                      {" "}
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="2432"
              height="1442"
            />
          </div>
        </div>
      </div>
      <section className="bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 flex flex-col-reverse">
          <img
            className="w-full rounded-xl shadow-xl"
            src= {weather}
            alt="Weather Updates"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-bold text-primary font-inter">
              Real-Time Weather Updates
            </h2>
            <p className="mb-6 font-light  font-poppins md:text-lg text-dark ">
              {" "}
              Stay informed with up-to-the-minute weather forecasts and alerts.
              Our weather updates provide accurate and timely information,
              helping you prepare for any weather conditions. Whether it's sunny
              skies or stormy weather, Agapay keeps you in the know, ensuring
              you are ready for whatever comes your way.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-bold text-primary font-inter">
              Real Time Alerts
            </h2>
            <p className="mb-6 font-light  font-poppins md:text-lg text-dark ">
              {" "}
              Receive instant notifications and updates on emergencies,
              disasters, and important community events. Our real-time alerts
              keep you informed and safe, providing crucial information when you
              need it most. Stay connected with your community and be prepared
              for any situation with Agapay's timely alerts.
            </p>
          </div>
          <img
            className="w-full rounded-xl shadow-xl"
            src= {alerts}
            alt="Alert Image"
          />
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-primary font-inter  ">
              Our Mission and Vision
            </h2>
            <p className="font-light  lg:mb-16 sm:text-xl font-poppins">
              Explore the whole collection of open-source web components and
              elements built with the utility classNamees from Tailwind
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-3">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-lg shadow-lg hover:bg-lightgray cursor-pointer">
              <blockquote className="mx-auto mb-8 max-w-2xl">
                <h3 className="text-3xl font-semibold text-primary mb-4 font-inter">
                  Our Mission
                </h3>
                <p className=" leading-relaxed  font-poppins text-dark">
                  "Our mission is to empower communities by providing a seamless
                  platform for reporting incidents, accidents, and safety
                  concerns. We believe in fostering vigilance, collaboration,
                  and immediate response to create a safer environment for
                  everyone."
                </p>
              </blockquote>
            </figure>
            <figure className="flex flex-col justify-center items-center  p-8 text-center bg-white rounded-lg shadow-lg hover:bg-lightgray cursor-pointer">
              <blockquote className="mx-auto mb-8 max-w-2xl">
                <h3 className="text-3xl font-semibold text-primary mb-4 font-inter">
                  Our Vision
                </h3>
                <p className=" leading-relaxed font-poppins text-dark ">
                  "Our vision is to build resilient and aware communities where
                  safety is a shared responsibility. We aim to create a future
                  where incidents are minimized, response is swift, and everyone
                  is equipped with the knowledge and tools to protect themselves
                  and others."
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
