import React from 'react';
import Logo from '../../assets/Footer/winmaclogo.png';

const Footer = () => {
  return (
    <footer className="text-white body-font bg-zinc-800">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-sky-600">
              <img src={Logo} alt="logo" className="w-16 h-16 rounded-full bg-white p-2" />
              <span className="text-3xl pl-2">WinMac Computers</span>
            </div>
          <p className="mt-2 text-sm text-gray-500">
            One-click, multiple solutions
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-400 tracking-widest text-sm mb-3">
              SOLUTIONS
            </h2>
            <nav className="list-none mb-10 mt-4 space-y-4">
              <li>
                <span className="text-white hover:text-red-400">Marketing</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Analytics</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Commerce</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Insights</span>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-400 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10 mt-4 space-y-4">
              <li>
                <span className="text-white hover:text-red-400">Pricing</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Documentation</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Guides</span>
              </li>
              <li>
                <span class="text-white hover:text-red-400">API Status</span>
              </li> 
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-400 tracking-widest text-sm mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10 mt-4 space-y-4">
              <li>
                <span className="text-white hover:text-red-400">About</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Blog</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Jobs</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Partners</span>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-sky-400 tracking-widest text-sm mb-3">
              LEGAL
            </h2>
            <nav className="list-none mb-10 mt-4 space-y-4">
              <li>
                <span className="text-white hover:text-red-400">Claim</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Privacy</span>
              </li>
              <li>
                <span className="text-white hover:text-red-400">Terms</span>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © 2022 WinMac Computers —
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-gray-300 ml-1"
              target="_blank"
            >
              @WinMac_Computers
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 cursor-pointer hover:text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 cursor-pointer hover:text-red-600"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 cursor-pointer hover:text-red-600"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5 cursor-pointer hover:text-red-600"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer