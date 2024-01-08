import React from "react";
import halfbuilding1 from "../assets/image/half-building1.webp";
import halfbuilding2 from "../assets/image/half-building2.webp";
import halfbuilding3 from "../assets/image/half-building3.webp";
import halfbuilding4 from "../assets/image/half-building4.webp";
import samll1 from "../assets/image/small-img1.webp";
import samll2 from "../assets/image/small-img2.webp";
import samll3 from "../assets/image/small-img3.webp";
import samll4 from "../assets/image/small-img4.webp";

const mycard = [
  {
    largeimg: halfbuilding1,
    smallimg: samll1,
    names: "Raju Mullah",
    mail: "@rajumulllah",
  },
  {
    largeimg: halfbuilding2,
    smallimg: samll2,
    names: "Zaire Vetrovs",
    mail: "@zairevetrovs",
  },
  {
    largeimg: halfbuilding3,
    smallimg: samll3,
    names: "Marcus Dias",
    mail: "@marcusdias",
  },
  {
    largeimg: halfbuilding4,
    smallimg: samll4,
    names: "Davis Schleifer",
    mail: "@davisschleifer",
  },
];
const Travelars = () => {
  const cardarray = mycard.map((mycard) => (
    <div data-aos="flip-up" className=" max-w-[282px] h-[420px] rounded-[213px] bg-white shadow-[0_100px_200px_0_rgba(1,23,54,0.05)] overflow-hidden group">
      <img className=" group-hover:scale-[1.1] duration-300" src={mycard.largeimg} alt="half" />
      <div className="flex justify-center">
        <img className=" translate-y-[-21%]" src={mycard.smallimg} alt="small" />
      </div>
      <p className=" text-2xl font-semibold leading-[150%] font-[Montserrat] text-center text-[#011736]">
        {mycard.names}
      </p>
      <p className=" text-base  font-[Montserrat] font-medium leading-[150%] text-[#979797] text-center">
        {mycard.mail}
      </p>
    </div>
  ));
  return (
    <div className=" max-w-[1200px] mx-auto px-3 py-[100px] overflow-hidden">
      <h2 className="text-[40px] font-bold leading-[150%] text-center text-[#011736] font-[Montserrat]">
        Best travelars of this month
      </h2>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-center gap-9 items-center pt-[30px]">
        {cardarray}
      </div>
    </div>
  );
};

export default Travelars;
