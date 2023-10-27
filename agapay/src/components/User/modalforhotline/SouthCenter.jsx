import React, { useState } from 'react';

const MyComponent = () => {
  const [showModal5, setShowModal5] = useState(false);

  const handleShowModal5 = () => {
    setShowModal5(true);
  };

  const handleCloseModal5 = () => {
    setShowModal5(false);
  };

  const openExternalWebsite5 = () => {
    window.open('https://maps.app.goo.gl/ssfDo5tjYA5fHyoVA', '_blank'); // Change the URL to your desired destination
    closeModal(); // Close the modal
  };

  return (
    <div>
      <button
        onClick={handleShowModal5}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        View on Google Map
      </button>

      {showModal5 && (
        <div className="fixed top-0 left-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg">You want to continue on this link?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={openExternalWebsite5}
                className="bg-blue-500  px-4 py-2 rounded hover:bg-blue-600"
              >
                Yes
              </button>
              <button
                onClick={handleCloseModal5}
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