import React, { useEffect } from "react";
import Footer from "./Footer";
import { disasterCards } from "../constants";
import { Link } from "react-router-dom";
const SafetyReminders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="bg-white  mt-32">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg ">
          <h2 className="text-base font-semibold leading-7 text-secondary font-poppins">Your Safety, Our Priority</h2>
            <h1 className="mb-4 text-5xl tracking-tight font-extrabold  font-inter">
              Safety Reminders
            </h1>
            <p className="mb-4 font-poppins">
              Explore our disaster cards to stay informed. Click{" "}
              <span className="text-primary">Read More</span> for in-depth
              information on each topic, empowering you with knowledge and
              preparedness.
            </p>
            <p className="font-inter">
              Explore with confidence. Your safety is our unwavering commitment
              and top priority. Discover valuable resources and gain knowledge,
              knowing that your safety is our constant focus.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center p-4 ">
      <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-4 sm:grid-cols-2 gap-3 grid-cols-1 items-center">
          {disasterCards.map((card) => (
            <div
              className="max-w-sm bg-white border  rounded-lg hover:shadow-xl shadow transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 h-auto "
              key={card.id}
            >
              <a href="#" className="flex justify-center items-center">
                <img
                  className="rounded-t-lg h-40"
                  src={card.logo}
                  alt={card.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary font-inter">
                    {card.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal font-poppins">
                  {card.description}
                </p>
                <Link
                  to={`/safety-reminders/${card.title}`}
                  className="inline-flex font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SafetyReminders;
