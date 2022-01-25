import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function DetailsPic() {
  useEffect(() => {
    Aos.init({});
})
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px]  mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center" data-aos="fade-up" data-aos-delay="80">
      <div className="xl:mt-[60px] xl:space-y-8 2xl:space-y-8">
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px] justify-center bg-no-repeat xl:ml-[-110px] 2xl:ml-[-130px] bg-[#F6F6F6] shadow-xl rounded-xl">
          <div className='ml-[-15px]'>
            <div className='grid grid-rows-2 text-center space-x-5 mt-[50px] 2xl:mt-[70px]'><i className="fab fa-dribbble text-[80px] text-[#6F5DE0]"></i><div className='space-y-3'><h1 className='text-[#6F5DE0] text-3xl font-bold'>User Friendly</h1><p className='text-[#6F5DE0] text-md w-[340px] 2xl:ml-[30px]'>Our products are created while keeping the user in mind thus they give the user the best experience possible</p></div></div>
          </div>
        </div>
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px] justify-center bg-no-repeat xl:ml-[-110px] 2xl:ml-[-130px] bg-[#6F5DE0] shadow-xl rounded-xl">
          <div className='ml-[-15px]'>
            <div className='grid grid-rows-2 text-center space-x-5 mt-[50px] 2xl:mt-[80px]'><i className="fas fa-globe-asia text-[80px] "></i><div className='space-y-3'><h1 className=' text-3xl font-bold'>Customer Services</h1><p className=' text-md w-[340px] 2xl:ml-[30px]'>We have 24 x 7 Customer Services Support that our users queries will be solved as soon as possible.</p></div></div>
          </div>
        </div>
      </div>

      <div className="xl:mt-[-80px] xl:space-y-8 2xl:space-y-8">
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"><div className='ml-[-15px]'>
            <div className='grid grid-rows-2 text-center space-x-5 mt-[50px] 2xl:mt-[80px]'><i className="fas fa-file text-[80px] "></i><div className='space-y-3'><h1 className=' text-3xl font-bold'>Warranty</h1><p className=' text-md w-[340px] 2xl:ml-[30px]'>We provide 1 year of free servicing after the purchase. We promise that our product is safe to use.</p></div></div>
          </div></div>
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl">
        <div className='ml-[-15px]'>
            <div className='grid grid-rows-2 text-center space-x-5 mt-[50px] 2xl:mt-[80px] '><i className="fas fa-tools text-[80px] text-[#6F5DE0]"></i><div className='space-y-3'><h1 className='text-[#6F5DE0] text-3xl font-bold'>Repairing Work</h1><p className='text-[#6F5DE0] text-md w-[340px] 2xl:ml-[30px]'>We have a 1 day service guarantee if our product get's damaged it would be serviced in just 1 day of time span.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPic;
