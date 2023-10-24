import React from "react";
import {
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
const PrankModal = () => {
  return (
    <>
      {/* For pranks*/}
      <div
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden hidden  bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            >
              <XMarkIcon className="w-5 h-5" />
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <ExclamationTriangleIcon className="h-12 w-12 mb-5 mx-auto text-red" />
              <h3 class="mb-5 text-lg font-normal text-gray font-inter ">
                Your Report has been invalid upon Further checking, Please do
                not submit false information.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-red hover:bg-red/80 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
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

export default PrankModal;
