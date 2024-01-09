import React from "react";
import footerlogo from "../assets/image/footer-logo.webp";
import { Facebook } from "../assets/Svg/Icon";
import { Linkedin } from "../assets/Svg/Icon";
import { Twitter } from "../assets/Svg/Icon";

const Footer = () => {
  return (
    <>
      <div className=" bg-img-footer py-4">
        <div className="max-w-[1200px] mx-auto px-3">
          <div className=" flex flex-wrap justify-between gap-[10px] py-[30px]  border-b-2 border-[#1A223F]">
            <div>
              <img src={footerlogo} alt="" />
              <p className=" font-[Montserrat] fs-[16px]  font-normal text-[#A7A7A7] max-w-[300px] pt-[25px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
              <div className=" flex items-center gap-3 pt-6">
              <a href="https://www.facebook.com/" target="_blank" className=" w-[42px] h-[41px] bg-[#fff] rounded-[42px] flex items-center justify-center hover:animate-bounce duration-300">
               <a href=""><Facebook/></a>
                </a>
              <a href="https://in.linkedin.com/" target="_blank" className=" w-[42px] h-[41px] bg-[#fff] rounded-[42px] flex items-center justify-center hover:animate-bounce duration-300">
               <a ><Linkedin/></a>
                </a>
              <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank" className=" w-[42px] h-[41px] bg-[#fff] rounded-[42px] flex items-center justify-center hover:animate-bounce duration-300">
               <a href="" ><Twitter/></a>
                </a>
              </div>
            </div>

            <ul>
              <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9 ">
                Address
              </li>
              <li className="mt-[10px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal  font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Integrations
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Hello
                </a>
              </li>
              <li className=" mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Intercom
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal  relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Customer
                </a>
              </li>
            </ul>
            <ul>
              <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9">
              About
              </li>
              <li className="mt-[10px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Our Blog
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                Customers
                </a>
              </li>
              <li className=" mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Our Team
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Careers
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Integrations
                </a>
              </li>
            </ul>
            <ul>
              <li className=" font-['Montserrat'] text-[24px]  font-bold text-[#FFF]  leading-9">
              Support
              </li>
              <li className="mt-[10px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Test Zoom
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Account
                </a>
              </li>
              <li className=" mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Support Center
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                  Live Training
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  href="#"
                  className="text-neutral-400 text-base font-normal font-['Montserrat'] leading-normal relative after:absolute  after:bg-neutral-400 after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-6 after:left-0"
                >
                 Accessibility
                </a>
              </li>
            </ul>
          </div>
          <p className=" text-white text-sm font-normal font-['Montserrat'] flex items-center gap-1  justify-center py-5">CopyrightFT  <span className="text-white text-sm font-normal font-['Montserrat']">PLANE {(new Date().getFullYear())} All right reserved</span></p>
        </div>
      </div>
    </>
  );
};

export default Footer;