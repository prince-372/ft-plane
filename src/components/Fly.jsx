import React from "react";
import tourist from "../assets/image/tourist-img.webp";
import timeline from "../assets/image/timeline.webp";
import dots from "../assets/image/dots.webp";
const Water = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-3 bg-[#ffff]  flex flex-wrap relative z-[1] py-7 sm:py-[100px] overflow-hidden">
        <div data-aos="zoom-in-right" className="lg:w-1/2 w-full flex items-center md:justify-center justify-start ">
          <img src={tourist} alt="water" className=" " />
        </div>
        <div data-aos="zoom-in-left" className="lg:w-1/2 w-full mt-[40px] lg:mt-0 ">
          <p className=" font-[Montserrat] text-[20px] text-[#313EF7] font-black  leading-6">
            Let’s Fly
          </p>
          <h3 className="font-[Montserrat] pt-5 text-[32px] text-[#030303] font-bold  leading-10   self-stretch">
            {" "}
            It’s one of the leading online flight booking platforms in the world
          </h3>
          <div className=" flex pt-8  relative">
            <div className="">
              <img
                className=" absolute mt-[20px] h-[56%] left-[0.7%] -z-10"
                src={timeline}
                alt="timeline"
              />
            </div>
            <div className=" flex  flex-col">
              <div className=" flex items-baseline gap-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text
                </p>
              </div>
              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  If you are going to use a passage of Lorem Ipsum
                </p>
              </div>

              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7 ">
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </p>
              </div>
              <div className=" flex  items-baseline gap-[10px] pt-[10px]">
                <img src={dots} alt="dots" className="w-[10px] h-[10px]" />
                <p className="text-black max-w-[568px] text-base font-medium font-['Montserrat'] leading-7  ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="grow shrink basis-0 text-center  w-[200px] h-14 px-[45px] py-3.5 mt-[40px] rounded-[59px] bg-[#313EF7] before:rounded-[59px] z-[1] before:z-[-1] text-white border before:transition-all before:ease-linear before:hover:bg-white  duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full text-base font-semibold leading-7 hover:text-[#313EF7] font-[Montserrat] before:top-0 before:w-full before:h-full relative  hover:border-[#313EF7]  overflow-hidden inline-block">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Water;
