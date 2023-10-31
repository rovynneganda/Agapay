import React, {useState} from 'react'
import { EyeIcon,EyeSlashIcon } from '@heroicons/react/24/outline'
const CreateAccount = () => {
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
   <>
                       <section className="bg-accent min-h-screen sm:my-0 my-10">
        <div className="p-4 sm:ml-64">
        <h1 className='font-inter text-3xl mt-3'>Account Creation</h1>
        <hr className='border-primary mt-3 mb-3' />
        <form>
            <div  className='bg-white p-7 rounded-xl font-inter '>
    <div className="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label for="first_name" className="block mb-2 text-sm  text-black  font-semibold">First name</label>
            <input type="text" id="first_name" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none" required/>
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-semibold text-black  ">Last name</label>
            <input type="text" id="last_name" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"  required/>
        </div>
        <div>
            <label for="company" className="block mb-2 text-sm font-semibold text-black  ">Department</label>
            <input type="text" id="company" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"  required/>
        </div>  
        <div>
            <label for="phone" className="block mb-2 text-sm font-semibold text-black  ">Phone number</label>
            <input type="tel" id="phone" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
        <div>
            <label for="employee_id" className="block mb-2 text-sm font-semibold text-black  ">Employee ID</label>
            <input type="text" id="employee_id" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"  required/>
        </div>
        <div>
        <label for="account_type" className="block mb-2 text-sm font-semibold text-black ">Account Type</label>
<select id="account_type" className="bg-subtlegray border border-gray/30 text-black mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none">
  <option selected>Choose an Account</option>
  <option value="responder">Responder</option>
  <option value="admin">Admin</option>
</select>   
    </div>
    </div>
    <div className="mb-6 ">
        <label for="email" className="block mb-2 text-sm font-semibold text-black  ">Email address</label>
        <input type="email" id="email" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"  required/>
    </div> 
    <div className="mb-6 relative">
        <label for="password" className="block mb-2 text-sm font-semibold text-black  ">Password</label>
        <input  type={inputType} id="password" className="bg-subtlegray border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none" placeholder="•••••••••" required/>
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
        <label for="confirm_password" className="block mb-2 text-sm font-semibold text-black  ">Confirm password</label>
        <input  type={inputType} id="confirm_password" className="bg-subtlegray border border-gray/30 text-black text-sm rounded-lg focus:ring-primary focus:outline-none
 focus:border-primary block w-full p-2.5  " placeholder="•••••••••" required/>
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
    <button type="submit" className="text-white bg-primary hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
</div>
</form>

        </div>
  </section>
   </>
  )
}

export default CreateAccount