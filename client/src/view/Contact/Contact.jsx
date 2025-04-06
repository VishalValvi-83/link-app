import React from 'react'
import Navbar from '../../component/Navbar'

function Contact() {
  return (
    <>
      <Navbar />
      <section className=" w-[100%]  text-gray-500 dark:bg-gray-900 border-none body-font">
        <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div class="w-full mx-auto lg:w-1/2">

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none dark:text-white animate__animated animate__fadeInDown">
              We’d Love to Hear From You!

            </h1>
            <p class=" my-4 text-lg md:text-xl lg:text-2xl font-light text-gray-500 dark:text-gray-400 animate__animated animate__zoomIn transition ease-in-out delay-200 hover:text-sky-400 duration-300">
              Thank you for visiting ZipLink! If you have any inquiries about our project, suggestions for improvement, or would like to collaborate, feel free to reach out.
              We’re a group of computer science students passionate about building secure and efficient web tools. We'll do our best to respond promptly.
            </p>
          </div>


          <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <form class="lg:flex-row lg:items-center lg:gap-4">
              <input type="text" id="name" name="name" placeholder="Name" className="text-sm lg:text-lg my-4 block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" required />
              <input type="email" id="email" name="email" placeholder="Email" className="text-sm lg:text-lg my-4 block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" required />
              <textarea id="message" name="message" placeholder="Message" className="text-sm lg:text-lg my-4 block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" rows="4" required></textarea>
              <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80">Send Message</button>

            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact


