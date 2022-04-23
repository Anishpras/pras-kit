import NavOne from "../../assets/components/navbars/NavOne";
import NavTwo from "../../assets/components/navbars/NavTwo";

const navbarsData = [
  {
    name: "With Drawer",
    component: <NavTwo />,
    jsx: `
    import { useState, useEffect, useRef } from "react";

import Link from "next/link";

const navData = [
  {
    name: "Link1",
    href: "/Link1",
  },
  {
    name: "Link2",
    href: "/Link2",
  },
];

const DrawerNav = ({ children, toggleSidebar, setToggleSidebar }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setToggleSidebar(false));
  let toggleStateClassName = toggleSidebar
    ? "translate-x-[40vw] md:translate-x-[55vw] ease-out h-full  bg-[#111827] text-white"
    : "translate-x-[100vw] ease-in";
  return (
    <>
      <div
        ref={ref}
        className={
          "drawerBackground fixed  top-0 px-2 rounded-l-xl  z-30 inset-y-0  w-[30rem]  transition duration-300 transform" +
          toggleStateClassName
        }>
        {children}
      </div>
    </>
  );
};
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
export default function NavTwo() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <div className=" w-full flex  text-xl font-bold drop-shadow-xl flex-none ease-in-out duration-300 0  lg:border-b lg:border-gray-900/10 ">
        <div className="w-full container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" passHref>
                  <h1 className=" gradientText font-bold leading-none text-4xl hover:cursor-pointer">
                    LOGO
                  </h1>
                </Link>
              </div>
              <div className="md:block">
                <div
                  onClick={() => setToggleSidebar(!toggleSidebar)}
                  className=" rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 ">
                  <button className="inline-flex text-white items-center lg:hidden  focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2 sm:-mr-8 md:-mr-32">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <nav className="hidden lg:flex space-x-10 items-center font-spartan">
                {navData.map((n) => {
                  return (
                    <Link key={n.name} href={n.href} passHref>
                      <span className=" text-white text-2xl  cursor-pointer hover:text-[#ff5478]">
                        {n.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <DrawerNav
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}>
          {navData.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <h1 className="mt-10 mx-3 p-3 flex items-center w-full text-3xl  font-bold  rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:cursor-pointer">
                {item.name}
              </h1>
            </Link>
          ))}
        </DrawerNav>
      </div>
    </>
  );
}

    `,
  },
  {
    name: "Without Drawer",
    component: <NavOne />,
    jsx: `
      import React from "react";

export default function NavOne() {
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 w-full">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-8 h-8 text-blue-600">
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
              Link
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
              Link
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-white">
            Sign up
          </button>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

      `,
  },
];

export default navbarsData;