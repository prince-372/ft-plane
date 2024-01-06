import React from "react";
import tourist from "../assets/image/tourist-img.webp";
import timeline from "../assets/image/timeline.webp";
import dots from "../assets/image/dots.webp";
const Water = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-3 bg-[#ffff]  flex flex-wrap relative z-[1] py-[100px]">
        <div className="lg:w-1/2 w-full  ">
          <img src={tourist} alt="water" className=" " />
        </div>
        <div className="lg:w-1/2 w-full mt-[40px] lg:mt-0 ">
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
          <div className="w-[200px] h-14 px-[45px] py-3.5 mt-[40px] bg-indigo-600 rounded-[56px] shadow border justify-start items-start gap-2.5 inline-flex">
            <button className="grow shrink basis-0 text-center text-white text-base font-semibold font-['Montserrat'] leading-7">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Water;
