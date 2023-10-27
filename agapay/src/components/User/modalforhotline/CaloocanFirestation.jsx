import React, { useState } from 'react';

const MyComponent = () => {
  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const openExternalWebsite1 = () => {
    window.open('https://maps.app.goo.gl/HpmTzJCcbDCzp9Lm6', '_blank'); // Change the URL to your desired destination
    closeModal(); // Close the modal
  };

  return (
    <div>
      <button
        onClick={handleShowModal1}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        View on Google Map
      </button>

      {showModal1 && (
        <div className="fixed top-0 left-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg">You want to continue on this link?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={openExternalWebsite1}
                className="bg-blue-500  px-4 py-2 rounded hover:bg-blue-600"
              >
                Yes
              </button>
              <button
                onClick={handleCloseModal1}
                className="ml-2 bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;