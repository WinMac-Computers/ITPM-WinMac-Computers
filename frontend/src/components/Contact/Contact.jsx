import React from 'react';

const Contact = () => {
  return (
    <div className="antialiased mt-10 p-10 my-12 translate-y-12" id="contact">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-sky-800 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                Keep in touch with us 👉
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>(+123) 456 7890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>WinMac_Computers@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>N0:123, Main Street, ABCD.</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-red-500">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" className="hover:text-red-500">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#" className="hover:text-red-500">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="#" className="hover:text-red-500">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative lg:-right-60 md:-right-60">
            <div className="absolute z-0 w-40 h-40 bg-red-600 rounded-full -right-28 -top-28 animate-pulse"></div>
            <div className="absolute z-0 w-40 h-40 bg-red-600 rounded-full -left-28 -bottom-16 animate-pulse"></div>
            <div className="relative bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form className="flex flex-col p-6 space-y-4">
                <div>
                  <label className="text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label className="text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <button className="inline-block self-end bg-cyan-400 hover:bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact