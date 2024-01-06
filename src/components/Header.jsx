import React, { useState } from "react";
import pagelogo from "../assets/image/page-logo.webp";

const Header = () => {
  const [first, setfirst] = useState(false);
  function MobileView() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  function CloseView() {
    setfirst(false);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav>
        <div className="flex justify-between items-center max-w-[1140px] mx-auto px-3 ">
          <div className="my-5">
            <img src={pagelogo} alt="logo" />
          </div>
          <ul
            className={` ${
              first ? "left-0" : "left-[-100%]"
            } flex items-center lg:gap-12 gap-5  duration-300 mobileview2`}
          >
            <li>
              <a
                onClick={CloseView}
                href="#"
                className="text-white text-base font-semibold leading-7 font-[Montserrat] relative after:absolute hover:text-[#313ef7] after:bg-[#313ef7] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                All Flight
              </a>
            </li>
            <li>
              <a
                onClick={CloseView}
                href="#"
                className="text-white text-base font-semibold leading-7 font-[Montserrat] relative after:absolute hover:text-[#313ef7] after:bg-[#313ef7] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                onClick={CloseView}
                href="#"
                className="text-white text-base font-semibold leading-7 font-[Montserrat] relative after:absolute hover:text-[#313ef7] after:bg-[#313ef7] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                Passengers
              </a>
            </li>
            <li>
              <a
                onClick={CloseView}
                href="#"
                className="text-white text-base font-semibold leading-7    relative after:absolute hover:text-[#313ef7] after:bg-[#313ef7] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                Your Orders
              </a>
            </li>
            <li>
              <a
                onClick={CloseView}
                href="#"
                className="text-white text-base font-semibold leading-7 border font-[Montserrat] border-[#fff] py-[10px] px-10 rounded-[59px] "
              >
                Let’s Fly
              </a>
            </li>
          </ul>
          <label className=" md:hidden" onClick={MobileView}>
            {first ? (
              <div className="z-20 relative">
                <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Header;
