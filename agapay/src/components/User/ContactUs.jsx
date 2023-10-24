import React from "react";
import { useEffect } from "react";
import Footer from "./Footer";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md font-inter">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center   sm:text-xl">Got a technical issue? Want to send feedback about our System? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-black ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-subtlegray border border-gray/30  text-blacktext-sm rounded-lg focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5 "  required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-black ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-subtlegray rounded-lg border border-gray/30 focus:outline-none  shadow-sm focus:ring-primary focus:border-primary " placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-blackdark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-subtlegray rounded-lg shadow-sm border focus:outline-none border-gray/30  focus:ring-primary focus:border-primary " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
      </form>
  </div>
</section>
      <Footer />
    </>
  );
};

export default ContactUs;
