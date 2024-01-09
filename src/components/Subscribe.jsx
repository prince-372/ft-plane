import React from "react";

const Subscribe = () => {
  return (
    <div className=" bg-[#f5f5ff] overflow-hidden">
      <div className=" max-w-[1200px] mx-auto px-3 ">
        <div className=" py-7 sm:py-[100px]">
          <h2 data-aos="zoom-in" className=" text-[25px] md:text-[40px] font-bold leading-[150%] text-center text-[#011736] pb-10 font-[Montserrat] max-w-[534px] mx-auto">
            Subscribe Newsletter & get letest news
          </h2>
          <div data-aos="zoom-out" className=" flex rounded-full max-w-[502px] mx-auto bg-white py-4 px-4 relative">
          <input className=" outline-none w-full text-[12px] md:text-xl font-normal leading-6 text-[#AEB5BF] placeholder:text-[#AEB5BF]" type="email" placeholder="Enter your email address" />
          <button className=" rounded-[59px] bg-[#313EF7] before:rounded-[59px] z-[1] before:z-[-1] text-white hover:text-[#313EF7] border before:transition-all before:ease-linear before:hover:bg-white  duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full text-[10px] md:text-base font-semibold leading-7 py-[10px] px-10 font-[Montserrat] before:top-0 before:w-full before:h-full   hover:border-[#313EF7]  overflow-hidden inline-block absolute right-2 top-1 md:top-2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
