import React, {useState} from 'react'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from 'axios';
const ResponderAccount = () => {
    const [formData, setFormData] = useState({
        coordinatesLatitude: "",
        coordinatesLongitude: "",
        responderAddress:"",
        responderStation:"",
        username:"",
        responderDepartment:"",
        responderPassword1:"",
        responderPassword2:"",
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const createResponderAccount = () => {
        // console.log('joko')
        const formDataToSend = new URLSearchParams();
        formDataToSend.append("fileSelector", "Register");
        formDataToSend.append("coordinatesLatitude", formData.coordinatesLatitude);
        formDataToSend.append("coordinatesLongitude", formData.coordinatesLongitude);
        formDataToSend.append("responderAddress", formData.responderAddress);
        formDataToSend.append("responderStation", formData.responderStation);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("responderDepartment", formData.responderDepartment);
        formDataToSend.append("responderPassword1", formData.responderPassword1);
        formDataToSend.append("responderPassword2", formData.responderPassword2);
    
        const formDataToObject = {};
        formDataToSend.forEach(function (value, key) {
          formDataToObject[key] = value;
        });
        console.log(formDataToObject);
        axios
          .post("http://localhost/Backend/Controller.php", formDataToObject, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then((response) => {
            // Handle the response from the API
            if (response.data === "Registration successful!") {
              alert("Successfully Registered!");
              console.log('tama')
              // showLoginModal();
            } else alert(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
const [inputType, setInputType] = useState("password");
const togglePasswordVisibility = () => {
  setIsPasswordVisible(!isPasswordVisible);
  setInputType(isPasswordVisible ? "password" : "text");
};
const togglePasswordVisibility1 = () => {
  setIsPasswordVisible1(!isPasswordVisible1);
  setInputType(isPasswordVisible1 ? "password" : "text");
};
  return (
    <section className="bg-white min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
      <h1 className="font-inter text-3xl mt-3">Account Creation</h1>
      <hr className="border-primary mt-3 mb-3" />
      <form>
        <div className="bg-white p-7 rounded-xl font-inter border-gray/20 border shadow-lg w-full max-w-6xl  mx-auto ">
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            <div>
              <label
                htmlFor="coordinatesLatitude"
                className="block mb-2 text-sm   text-black  font-semibold"
              >
                Coordinates - Latitude
              </label>
              <input
                type="text"
               onChange={handleInputChange}
                name="coordinatesLatitude"
                id="coordinatesLatitude"
                className=" bg-variantwhite/80 border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="coordinatesLongitude"
                className="block mb-2 text-sm font-semibold text-black  "
              >
               Coordinates - Longitude
              </label>
              <input
                type="text"
                onChange={handleInputChange}
             
                name="coordinatesLongitude"
                id="coordinatesLongitude"
                className=" border bg-variantwhite/80 border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="responderAddress"
                className="block mb-2 text-sm font-semibold text-black  "
              >
                Address
              </label>
              <input
                type="text"
                id="responderAddress"
                name="responderAddress"
               onChange={handleInputChange}
                
                className=" border bg-variantwhite/80 border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="responderStation"
                className="block mb-2 text-sm font-semibold text-black  "
              >
                Name of Station / Establishment
              </label>
              <input
                type="text"
                id="responderStation"
                name="responderStation"
               onChange={handleInputChange}
                
                className=" border border-gray/30 text-black bg-variantwhite/80  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            {/* <div>
              <label
                htmlFor="adminEmployeeID"
                className="block mb-2 text-sm font-semibold text-black  "
              >
                Employee ID
              </label>
              <input
                type="text"
                id="adminEmployeeID"
                name="adminEmployeeID"
                
                className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                required
              />
            </div> */}
            <div>
              <label
                htmlFor="responderDepartment"
                className="block mb-2 text-sm font-semibold text-black "
              >
                Department
              </label>
              <select
                id="responderDepartment"
                name="responderDepartment"
               onChange={handleInputChange}
                
                className=" border border-gray/30 bg-variantwhite/80 text-black mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"
              >
                <option defaultValue="">Choose a Department</option>
                <option value="Fire Department">Fire Department</option>
                <option value="Police Department">Police Department</option>

                <option value="Rescue Department">Rescue Team</option>
                <option value="Emergency Medical Ambulance">Emergency Medical Ambulance</option>

              </select>
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-semibold text-black  "
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
               onChange={handleInputChange}

                // placeholder='e.g Police Mobile, Ambulance, Fire Trucks, Rescue Team'
                className=" border border-gray/30 text-black bg-variantwhite/80  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          {/* <div className="mb-6 ">
            <label
              htmlFor="adminEmail"
              className="block mb-2 text-sm font-semibold text-black  "
            >
              Email address
            </label>
            <input
              type="email"
              id="adminUsername"
              name="adminUsername"
              
              className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"
              required
            />
          </div> */}
          <div className="mb-6 relative">
            <label
              htmlFor="responderPassword1"
              className="block mb-2 text-sm font-semibold text-black  "
            >
              Password
            </label>
            <input
              type={inputType}
              onChange={handleInputChange}

              id="responderPassword1"
              name="responderPassword1"
              
              className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
              placeholder="•••••••••"
              required
            />
            <i
              className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeIcon className="w-6 h-6 mt-7" />
              ) : (
                <EyeSlashIcon className="w-6 h-6 mt-7" />
              )}
            </i>
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="responderPassword2"
              className="block mb-2 text-sm font-semibold text-black  "
            >
              Confirm password
            </label>
            <input
               onChange={handleInputChange}
              type={inputType}
              id="responderPassword2"
              name="responderPassword2"
             
              className=" border border-gray/30 bg-variantwhite/80 text-black text-sm rounded-lg focus:ring-primary focus:outline-none
focus:border-primary block w-full p-2.5  "
              placeholder="•••••••••"
              required
            />
            <i
              className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer "
              onClick={togglePasswordVisibility1}
            >   
              {isPasswordVisible1 ? (
                <EyeIcon className="w-6 h-6 mt-7" />
              ) : (
                <EyeSlashIcon className="w-6 h-6 mt-7" />
              )}
            </i>
          </div>
          <button
            type="submit"
            onClick={createResponderAccount}
            className="text-white bg-primary hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default ResponderAccount