import React, { useState } from 'react'
import { Check, Location, Users } from '../assets/Svg/Icon';

export const Tabs = () => {
    // modals
    const [showModal, setShowModal] = useState(false);

    // tabs
    const [data, setdata] = useState("tab1")
    function tabs(tab) {
        setdata(tab);
    }
    return (
        <div className='max-w-[1200px] mx-auto relative -translate-y-[30%] sm:-translate-y-1/2 px-3 '>
            <div className='absolute flex top-[-59px] ml-3 left-[0] z-10'>
                <button onClick={() => tabs('tab1')} className={`${data === "tab1" && "!bg-indigo-600 text-white"} transition w-24 sm:w-28 md:w-[173.33px] h-[60px] px-4 sm:px-5 py-4 bg-white  border-b rounded-tl-[30px]  justify-center items-center gap-2.5 inline-flex text-center text-slate-950 text-base sm:text-lg font-semibold font-['Montserrat'] leading-7`}>Economy</button>
                <button onClick={() => tabs('tab2')} className={`${data === "tab2" && "!bg-indigo-600 text-white"} transition w-24 sm:w-28 md:w-[173.33px] h-[60px] px-4 sm:px-5 py-4 bg-white border-b justify-center items-center border-r gap-2.5 inline-flex text-center text-slate-950 text-lg font-semibold font-['Montserrat'] leading-7`}>Business</ button>
                <button onClick={() => tabs('tab3')} className={`${data === "tab3" && "!bg-indigo-600 text-white"} transition w-24 sm:w-28 md:w-[173.33px] h-[60px] px-2 sm:px-5 py-4 bg-white border-b rounded-tr-[30px]  justify-center items-center gap-2.5 inline-flex text-center text-slate-950 text-base sm:text-lg font-semibold font-[Montserrat] leading-7`}>data</button>
            </div >
            {data === "tab1" && <div className='w-full min-h-[216px] bg-white sm:rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex justify-between gap-6 flex-wrap mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Location/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Location</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Where are you going?</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Users/>
                        </div>
                                                <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Travelers</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                       <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-out</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);] py-3.5w-[200px] h-14 px-[45px] py-3.5 mt-[40px] rounded-[59px] bg-[#313EF7] before:rounded-[59px] z-[1] before:z-[-1] text-white border before:transition-all before:ease-linear before:hover:bg-white  duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full text-base font-semibold leading-7 hover:text-[#313EF7] font-[Montserrat] before:top-0 before:w-full before:h-full relative  hover:border-[#313EF7]  overflow-hidden inline-block">Book Now</button>
                    {showModal ? (
                        <>
                            <div  className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-['Montserrat'] max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-['Montserrat'] text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[40px] font-bold font-['Montserrat'] leading-relaxed">
                                                Your Economy Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
            {data === "tab2" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Location/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Topclass</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">What are you doing</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Users/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Businessman</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                       <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-out</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 
                    grow shrink basis-0 text-centerrounded-[59px] before:rounded-[59px] z-[1] before:z-[-1] text-white hover:text-indigo-600 border before:transition-all before:ease-linear before:hover:bg-white  duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full text-base font-semibold leading-7 font-[Montserrat] before:top-0 before:w-full before:h-full   hover:border-indigo-600 relative overflow-hidden inline-block">Book Now</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto font-['Montserrat'] max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-['Montserrat'] text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[40px] font-bold font-['Montserrat'] leading-relaxed">
                                                Your Business Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
            {data === "tab3" && <div className='w-full min-h-[216px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-[0px_100px_200px_0px_rgba(1,23,54,0.10);] flex-col justify-center items-center gap-2.5 inline-flex p-10'>
                <div className='w-full flex flex-wrap gap-6 justify-between mb-6'>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Location/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Booking</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Where you go</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                        <Users/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Group</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add guest</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                       <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-in</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                    <div className=" justify-start items-start gap-2 inline-flex">
                    <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50px] bg-[#F5F5FF] '>
                       <Check/>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <p className="text-slate-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">Check-out</p>
                            <p className="text-gray-400 text-base font-normal font-['Montserrat'] leading-7">Add date</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={() => setShowModal(true)}
                        className="mx-auto shadow-[0px_10px_14px_0px_rgba(49,62,247,0.25);]  px-[45px] py-3.5 bg-indigo-600 rounded-[56px] justify-start items-start gap-2.5 
                        grow shrink basis-0 text-centerrounded-[59px] before:rounded-[59px] z-[1] before:z-[-1] text-white hover:text-indigo-600 border before:transition-all before:ease-linear before:hover:bg-white  duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full text-base font-semibold leading-7 font-[Montserrat] before:top-0 before:w-full before:h-full   hover:border-indigo-600 relative overflow-hidden inline-block">Book Now</button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto text-center max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start mx-auto  font-['Montserrat'] max-w-[500px] p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className=" text-[100px] font-bold">
                                                Congrats!
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 font-['Montserrat'] bg-indigo-600  opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                            </button>
                                        </div>
                                        <div className="relative p-6 flex-auto">
                                            <p className="my-4 text-blueGray-500 text-[40px] font-bold  font-['Montserrat'] leading-relaxed">
                                                Your data Class Ticket Has Booked Successfully!
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                DONE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </div>
            </div >}
        </div>
    )
}
export default Tabs;