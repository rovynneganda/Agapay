import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/20/solid";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
const AdminReports = () => {
  const [ambulanceCount, setAmbulanceCount] = useState(0);

  const handleIncrementAmbulance = () => {
    setAmbulanceCount(ambulanceCount + 1);
  };

  const handleDecrementAmbulance = () => {
    if (ambulanceCount > 0) {
      setAmbulanceCount(ambulanceCount - 1);
    }
  };
  const [reportData, setReportData] = useState([]);
  const sendReport = (id) => {
    console.log(ambulanceCount, id);
    // console.log(1);
    const formData = new FormData();
    formData.append("fileSelector", "gis");
    formData.append("ambulanceCount", ambulanceCount);
    formData.append("reportId", id);
    axios
      .post(
        "http://localhost/Backend/Controller.php",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // useEffect(() => {
  //   console.log(ambulanceCount);
  // }), [ambulanceCount];

  useEffect(() => {
    // console.log(1);
    const formData = new FormData();
    // formData.append("fileSelector", "ReportData");
    axios
      .get(
        "http://localhost/Backend/Controller.php?fileSelector=ReportData",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        // if (response.data === "") {
        // } else return alert(response.data);
        // // loggedIn(false);
        // alert("Response Sent!");
        const newData = response.data.reportData.data;
        console.log(response);
        console.log(newData);

        // Update the state with the fetched data
        setReportData(newData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="bg-white min-h-screen sm:my-0 my-10">
      <div className="p-4 sm:ml-64">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {reportData.map((report, index) => (
              <div
                key={index}
                className=" flex flex-col bg-white border border-gray/20  rounded-xl hover:shadow-md transition shadow-lg "
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex flex-row justify-between">
                        <h3 className="text-primary font-bold  font-inter text-2xl">
                          {report.disaster}
                        </h3>
                        <div className="flex flex-col">
                          <button
                            disabled
                            className={`${
                              report.ai_verify === "1" ? "  " : ""
                            } rounded-full font-inter font-medium  text-sm`}
                          >
                            {report.ai_verify === "1" ? (
                              <>
                                <CheckBadgeIcon className="h-6 w-6 text-secondary rounded-full inline-block " />{" "}
                                <span className="text-secondary font-poppins">
                                  Verified
                                </span>
                              </>
                            ) : (
                              <>
                                <ExclamationCircleIcon className="h-6 w-6 text-red rounded-full inline-block " />{" "}
                                <span className="text-red font-poppins">
                                  {" "}
                                  Invalid Verification{" "}
                                </span>
                              </>
                            )}
                          </button>
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
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-lg font-poppins   font-semibold">
                          {report.user_id} name
                        </p>
                        <p className="text-base  font-poppins  font-medium">
                          {report.user_id} contact number
                        </p>
                        <p className="text-base  font-poppins  font-medium">
                          {report.disaster_address}
                        </p>
                        <p className="text-base   font-poppins border border-dashed rounded-xl p-1 border-gray/20">
                          {report.description}
                        </p>
                        <p className="text-base  font-poppins text-center mt-3  rounded-xl p-1 text-darkblue font-semibold hover:underline ">
                          {report.video}
                        </p>
                      </div>
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
                      {/* <label
                        htmlFor="ambulance"
                        className="block mb-2 text-sm font-medium font-poppins "
                      >
                        Ambulance
                      </label>
                      <select
                        id="ambulance"
                        className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                      >
                        <option selected>Send Ambulance</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select> */}
                      {report.disaster === "Flood" && (
                        <div className="mt-4 space-y-3 mb-5">
                          {/* Code to display for a flood */}
                          <div className="flex flex-row gap-3">
                            <div className="font-inter font-semibold">
                              Ambulance
                            </div>
                            <button onClick={handleDecrementAmbulance}>
                              -
                            </button>
                            <p>{ambulanceCount}</p>
                            <button onClick={handleIncrementAmbulance}>
                              +
                            </button>
                          </div>
                          {/* <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            <option value="0">No Rescue Team</option>
                            <option value="1">1 Rescue Team</option>
                            <option value="2">2 Rescue Team</option>
                            <option value="3">3 Rescue Team</option>
                          </select>
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            <option value="0">No Ambulance</option>
                            <option value="1">1 Ambulance</option>
                            <option value="2">2 Ambulance</option>
                            <option value="3">3 Ambulance</option>
                          </select> */}
                        </div>
                      )}
                      {report.disaster === "Accident" && (
                        <div className="mt-4 space-y-3 mb-5">
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Ambulance</option>
                            <option value="1">1 Ambulance</option>
                            <option value="2">2 Ambulance</option>
                            <option value="3">3 Ambulance</option>
                            {/* ... add more options as needed ... */}
                          </select>
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Police Mobile</option>
                            <option value="1">1 Police Mobile</option>
                            <option value="2">2 Police Mobile</option>
                            <option value="3">3 Police Mobile</option>
                            {/* ... add more options as needed ... */}
                          </select>
                        </div>
                      )}
                      {report.disaster === "Fire" && (
                        <div className="mt-4 space-y-3 mb-5">
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Fire Trucks</option>
                            <option value="1">1 Fire Trucks</option>
                            <option value="2">2 Fire Trucks</option>
                            <option value="3">3 Fire Trucks</option>
                            {/* ... add more options as needed ... */}
                          </select>
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Ambulance</option>
                            <option value="1">1 Ambulance</option>
                            <option value="2">2 Ambulance</option>
                            <option value="3">3 Ambulance</option>
                            {/* ... add more options as needed ... */}
                          </select>
                        </div>
                      )}
                      {report.disaster === "Landslide" && (
                        <div className="mt-4 space-y-3 mb-5">
                          {/* Code to display for a flood */}
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Rescue Team</option>
                            <option value="1">1 Rescue Team</option>
                            <option value="2">2 Rescue Team</option>
                            <option value="3">3 Rescue Team</option>
                            {/* ... add more options as needed ... */}
                          </select>
                          <select
                            id={`responders-${index}`}
                            className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                          >
                            {/* You can customize the options based on your requirements */}
                            <option value="0">No Ambulance</option>
                            <option value="1">1 Ambulance</option>
                            <option value="2">2 Ambulance</option>
                            <option value="3">3 Ambulance</option>
                            {/* ... add more options as needed ... */}
                          </select>
                        </div>
                      )}
                      <div className="flex flex-row gap-3 justify-center mt-2">
                        <button
                          onClick={() => sendReport(report.id)}
                          className="px-2 py-2 bg-primary rounded-xl font-inter font-medium text-white text-sm hover:bg-primarydark"
                        >
                          Send Responder
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
    </section>
  );
};

export default AdminReports;
