import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { disasterCards } from "../constants"; // Make sure to import your disasterCards array
import { Link } from "react-router-dom";
import Footer from "./Footer";

const DisasterInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title } = useParams();
  const formattedTitle = title.toLowerCase().replace(/\s/g, "-");
  const selectedCard = disasterCards.find(
    (card) => card.title.toLowerCase().replace(/\s/g, "-") === formattedTitle
  );

  if (!selectedCard) {
    return <div>Card not found</div>;
  }

  const {
    beforetitle,
    beforedescription1,
    beforedescription2,
    beforedescription3,
    beforedescription4,
    duringdescription1,
    duringdescription2,
    duringdescription3,
    duringdescription4,
    afterdescription1,
    afterdescription2,
    afterdescription3,
    afterdescription4,
  } = selectedCard;

  return (
    <>
      <header className="mt-40 p-5">
        <Link to="/safety-reminders">
          <button className=" mb-5   py-2 px-2 rounded-xl font-poppins text-black hover:text-white font-semibold text-sm hover:bg-primarydark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Go back to Safety Reminders
          </button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold font-inter leading-none tracking-tight  md:text-5xl lg:text-6xl text-center">
          {selectedCard.title}
        </h1>
        <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48  font-poppins">
          {selectedCard.longerdescription}
        </p>
      </header>
      <section className="bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-primary  font-inter">
              {selectedCard.beforetitle}
            </h2>
            <ul className="max-w-md space-y-1  list-disc list-inside  font-poppins">
              {beforedescription1 && <li>{selectedCard.beforedescription1}</li>}
              {beforedescription2 && <li>{selectedCard.beforedescription2}</li>}
              {beforedescription3 && <li>{selectedCard.beforedescription3}</li>}
              {beforedescription4 && <li>{selectedCard.beforedescription4}</li>}
            </ul>
          </div>
          <img
            className="w-full "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
        </div>
      </section>
      <section className="bg-white ">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 flex flex-col-reverse">
          <img
            className="w-full "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-primary  font-inter">
              {selectedCard.duringtitle}
            </h2>
            <ul className="max-w-md space-y-1  list-disc list-inside  font-poppins">
              {duringdescription1 && <li>{selectedCard.duringdescription1}</li>}
              {duringdescription2 && <li>{selectedCard.duringdescription2}</li>}
              {duringdescription3 && <li>{selectedCard.duringdescription3}</li>}
              {duringdescription4 && <li>{selectedCard.duringdescription4}</li>}
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-primary  font-inter">
              {selectedCard.aftertitle}
            </h2>
            <ul className="max-w-md space-y-1  list-disc list-inside  font-poppins">
              {afterdescription1 && <li>{selectedCard.afterdescription1}</li>}
              {afterdescription2 && <li>{selectedCard.afterdescription2}</li>}
              {afterdescription3 && <li>{selectedCard.afterdescription3}</li>}
              {afterdescription4 && <li>{selectedCard.afterdescription4}</li>}
            </ul>
          </div>
          <img
            className="w-full "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DisasterInformation;
