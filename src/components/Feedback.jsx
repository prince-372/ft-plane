import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderbig from "../assets/image/slider-big-img.webp"
import Slider from 'react-slick';
import slidermen from "../assets/image/slider-men-img.webp"
import stars from "../assets/image/stars.webp"

const NextArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] left-[38%] bg-indigo-600 bg-opacity-10 transition-all right-[40%] flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[4px_10px_30px_1px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black rotate-180 group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" strokeWidth="2" />
            </svg>
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button className="w-[50px] group h-[50px] bg-indigo-600 bg-opacity-10 transition-all right-[37%] flex items-center justify-center bottom-[-30%] absolute  hover:bg-indigo-600 rounded-full hover:shadow-[4px_10px_35px_1px_#313EF7]" onClick={onClick}>
            <svg className=' stroke-black group-hover:stroke-white' xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                <path d="M0.916748 21L10.9167 11L0.91675 0.999999" strokeWidth="2" />
            </svg>
        </button>
    );
};
const Feedback = () => {
    var settings = {
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className='max-w-[1200px] px-3 mx-auto my-3 overflow-hidden'>
                <p className='max-w-[524px] mx-auto text-center text-indigo-600 mb-2 text-xl font-semibold font-["Montserrat"] leading-normal'>What’s our customer saying</p>
                <p className="max-w-[534px] mx-auto mb-[60px] text-center text-slate-900 text-[40px] font-bold font-['Montserrat'] capitalize leading-[60px] tracking-wide">Our Customer Feedback</p>
                <div data-aos="fade-down" className=' grid grid-cols-1 lg:grid-cols-5  mx-[-12px] gap-[18px]  '>
                    <div className=' col-span-1 lg:col-span-3 px-3'>
                        <img src={sliderbig} alt="sliderbig" />
                    </div>
                    <div data-aos="fade-up" className=' col-span-1 lg:col-span-2 px-3 relative '>
                        <Slider {...settings}>
                            <div
                                className="max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)] flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2'>
                                    <img src={slidermen} alt="image" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                        <img src={stars} alt="" />
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-['Montserrat'] leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                            <div
                                className="max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10)] flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2'>
                                    <img src={slidermen} alt="image" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                        <img src={stars} alt="" />
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-['Montserrat'] leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                            <div
                                className="max-w-[500px] px-[21px] py-[30px] bg-white rounded-[20px] box-shadow flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                                <div className='flex items-center gap-2'>
                                    <img src={slidermen} alt="image" />
                                    <div className="flex flex-col mb-4">
                                        <p className="max-w-[382px] opacity-90 text-slate-900 text-xl font-semibold font-['Montserrat'] leading-normal">Jaylon Vaccaro</p>
                                        <img src={stars} alt="" />
                                    </div>
                                </div>
                                <p className="max-w-[458px] text-zinc-900 text-lg font-medium font-['Montserrat'] leading-[34px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Feedback;