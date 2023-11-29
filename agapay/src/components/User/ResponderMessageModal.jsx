import React from "react";
import { XMarkIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
const ResponderMessageModal = () => {
  return (
    <>
      {/* For Responder are on their way */}
      <div
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden  bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="p-6 text-center">
              <ShieldCheckIcon className="h-12 w-12 mb-5 mx-auto text-secondary animate-pulse" />
              <h3 className="mb-5 text-lg font-normal text-black font-inter ">
             
Responders are en route and may reach out to you at the provided number.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red hover:bg-red/80 font-inter focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponderMessageModal;
