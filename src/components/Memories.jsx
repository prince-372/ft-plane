import React from 'react';
import building1 from '../assets/image/buildings-img1.webp';
import building2 from '../assets/image/buildings-img2.webp';
import building3 from '../assets/image/building-img3.webp';
import building4 from '../assets/image/building-img4.webp';

const Memories = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-3 py-7 sm:py-[100px]'>
     <h2 className=' text-[33px] md:text-[40px] font-bold leading-[150%] text-center text-[#011736] pb-10 font-[Montserrat]'>Make memories with us</h2>
     <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-center gap-5'>
       <img  className=' object-cover hover:scale-[0.8] duration-300' src={building1} alt="building" />
       <img  className=' pt-12 object-cover hover:scale-[0.8] duration-300' src={building2} alt="building" />
       <img  className=' object-cover hover:scale-[0.8] duration-300' src={building3} alt="building" />
       <img  className=' pt-12 object-cover hover:scale-[0.8] duration-300' src={building4} alt="building" />
     </div>
    </div>
  )
}

export default Memories