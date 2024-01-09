
// import aeroplane from '../assets/image/aroplane-img.webp';
import bigaero from "../assets/image/Big_Airplan.webp";
import text from "../assets/image/Aviation_text.webp";

const Hero = () => {
  return (
<>
    <div className=" max-w-[1200px] mx-auto px-3 pt-12 overflow-hidden min-h-[700px] lg:min-h-[810px]">
      <img className=" absolute w-[80%] top-[26%] sm:top-[17%]  left-[8%]" src={text} alt="" />
    <img data-aos="zoom-in" className=" relative w-full myaeroplane" src={bigaero} alt="aeroplane" />
    <h2  data-aos="zoom-in-right" className="sm:text-[48px] text-[40px] font-bold text-white leading-[150%] font-[Montserrat] text-center">Travel around the world</h2>
    <p  data-aos="zoom-in-left" className=" text-[12px] font-normal text-center text-[#b8b8c5] font-[Inter]">One of the advantages of being disorganized is that one is always having surprising discoveries</p>
  </div>
    </>
  )
}

export default Hero