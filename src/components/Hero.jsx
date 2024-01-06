import React from 'react'
import aeroplane from '../assets/image/aroplane-img.webp';
// import elipes from '../assets/image/elipes.png';

const Hero = () => {
  return (
<>
    <div className=" max-w-[1200px] mx-auto px-3 pt-12 overflow-hidden">
    <img className=" relative w-full" src={aeroplane} alt="aeroplane" />
    <h2 className="text-[48px] font-bold text-white leading-[150%] font-[Montserrat] text-center">Travel around the world</h2>
    <p className=" text-[12px] font-normal text-center text-[#b8b8c5] font-[Inter]">One of the advantages of being disorganized is that one is always having surprising discoveries</p>
  </div>
    {/* <img className=" absolute bottom-[36%] left-[2%] -z-10 w-full" src={elipes} alt="" /> */}
    </>
  )
}

export default Hero