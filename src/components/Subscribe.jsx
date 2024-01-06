import React from "react";

const Subscribe = () => {
  return (
    <div className=" bg-[#f5f5ff]">
      <div className=" max-w-[1200px] mx-auto px-3 ">
        <div className=" py-[100px]">
          <h2 className=" text-[40px] font-bold leading-[150%] text-center text-[#011736] pb-10 font-[Montserrat] max-w-[534px] mx-auto">
            Subscribe Newsletter & get letest news
          </h2>
          <div className=" flex rounded-full max-w-[502px] mx-auto bg-white py-4 px-4 relative">
          <input className=" outline-none w-full text-xl font-normal leading-6 text-[#AEB5BF] placeholder:text-[#AEB5BF]" type="email" placeholder="Enter your email address" />
          <button className=" text-base font-semibold font-[Montserrat] leading-7 text-white bg-[#313EF7] rounded-[56px] py-2 px-6 absolute right-2  top-1">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
