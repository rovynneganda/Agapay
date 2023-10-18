import React from 'react'
import { useEffect } from 'react'
import Footer from './Footer';
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <section className="text-black font-poppins  relative mt-20">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium  mb-4 text-primary">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have questions or concerns? We're here to help! Please feel free to reach out to our friendly and knowledgeable support team. Whether you need assistance with our products, have inquiries about your order, or simply want to provide feedback, we're ready to assist you.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm ">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-subtlegray bg-opacity-50 rounded border border-gray/20 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-primary/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm ">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray/20 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-primary/50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm ">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray/20 focus:border-primary/10 focus:bg-white focus:ring-2 focus:ring-primary/50 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-primary hover:bg-primarydark  border-0 py-2 px-8 focus:outline-none  rounded text-lg">Submit</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray/40 text-center">
          <a className="text-primary">jokoily@email.com</a>
          <p className="leading-normal my-5">8th Ave, Grace Park East 
            <br/>Caloocan, Metro Manila
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
    </>
  )
}

export default ContactUs