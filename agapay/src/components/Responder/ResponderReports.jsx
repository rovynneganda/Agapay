import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  XMarkIcon,
  ExclamationTriangleIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
const ResponderReports = ({userId}) => {
  const [responderReportData, setResponderReportData] = useState([]);
  useEffect(() => {
    const formData = new FormData();
    // formData.append("fileSelector", "ReportData");
    axios
      .get(
        `http://localhost/Backend/Controller.php?fileSelector=ResponderReportData&responderId=${userId}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        const newData = response.data.responderReportData.data;
        console.log(response);
        console.log(newData);

        // Update the state with the fetched data
        setResponderReportData(newData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div className="p-4 sm:ml-64 mt-16 bg-white min-h-screen">
        <h1 className="font-inter text-3xl mt-3">Reports</h1>
        <hr className="border-primary mt-3 mb-3" />

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* <div className=" flex flex-col bg-white border border-gray/20  rounded-xl hover:shadow-md transition shadow-lg ">
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-primary font-bold  font-inter text-2xl">
                      Travel Assistance
                    </h3>
                    <button
                      disabled
                      className="rounded-full font-inter font-medium text-sm"
                    >
                      <ArrowPathRoundedSquareIcon className="w-6 h-6 text-secondary rounded-full inline-block " />{" "}
                      <span className="font-poppins ">Pending</span>
                    </button>
                    <button
                      disabled
                      className="rounded-full font-inter font-medium text-sm"
                    >
                      <ArrowRightIcon className="w-6 h-6 text-secondary rounded-full inline-block " />{" "}
                      <span className="font-poppins">On Going</span>
                    </button>
                    <button
                      disabled
                      className="rounded-full font-inter font-medium text-sm"
                    >
                      <ShieldCheckIcon className="w-6 h-6 text-secondary rounded-full inline-block " />{" "}
                      <span className="font-poppins">Accomplished</span>
                    </button>
                    <p className="text-lg leading-loose font-poppins  font-semibold">
                      Joko Gadingan
                    </p>
                    <p className="text-lg leading-loose font-poppins font-medium">
                      09513992162
                    </p>
                    <p className="text-lg  font-poppins font-medium">
                      1774 Zenia St. Area B barangay 174 camarin caloocan city
                    </p>
                    <p className="text-base  font-poppins border border-dashed rounded-xl p-1 border-gray/20">
                      masakit po pepe ko sobra omgggg asdasddas asd masakit po
                      pepe ko sobra omgggg asdasddas asd masakit po pepe ko
                      sobra omgggg asdasddas asd masakit po pepe ko sobra omgggg
                      asdasddas asd
                    </p>
                    <p className="text-base  font-poppins text-center mt-3  rounded-xl p-1 text-darkblue font-semibold hover:underline ">
                      Picture
                    </p>

                    <div className="flex flex-row gap-3 justify-center mt-2">
                      <button className="px-2 py-2 bg-primary rounded-xl font-inter font-medium text-white hover:bg-primarydark">
                        Accept
                      </button>
                      <button className="px-2 py-2 bg-primary rounded-xl font-inter font-medium text-white hover:bg-primarydark">
                        Mark as Accomplished
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {responderReportData.map((report, index) => (
              <div className=" flex flex-col bg-white border border-gray/20  rounded-xl hover:shadow-md transition shadow-lg ">
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-primary font-bold  font-inter text-2xl">
                        Report Incident - {report.disaster}
                      </h3>
                      <p className="text-lg leading-loose font-poppins  font-semibold">
                        {report.user_id}
                      </p>
                      <p className="text-lg leading-loose font-poppins font-medium">
                        {report.user_id}
                      </p>
                      <p className="text-lg  font-poppins font-medium">
                        {report.disaster_address}
                      </p>
                      <p className="text-base  font-poppins border border-dashed rounded-xl p-1 border-gray/20">
                        {report.description}
                      </p>
                      <div>
                        <video width="800" height="600" controls>
                          {/* Replace 'your_video_url' with the actual URL of your video */}
                          <source
                            src={`http://localhost/Backend/Videos/Upload/${report.video}`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="flex flex-row gap-3 justify-center mt-2">
                        <button className="px-2 py-2 bg-primary rounded-xl font-inter font-medium text-white hover:bg-primarydark">
                          Rescue Report
                        </button>
                        <button className="text-[#c94c05] hover:text-white border border-red font-inter bg-none hover:bg-red focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Decline Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponderReports;
