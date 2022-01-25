import React from 'react';
import Tailwindcss from '../../../../images/tailwindcss.svg'
import Vercel from '../../../../images/vercel.svg'
import Tensorflow from '../../../../images/tensorflow.png'
import Flutter from '../../../../images/flutter.svg'
import Dart from '../../../../images/dart.svg'
import Firebase from '../../../../images/firebase.png'

function TechItems() {
  return (
    <div className='xl:mt-[80px] xl:max-w-[1350px] 2xl:max-w-[1490px]  xl:mb-[-20px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 items-center xl:ml-[80px]'>
        <div className=" xl:space-y-8 2xl:space-y-8">
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"><i className="fab fa-react text-[150px] xl:mt-[80px] xl:ml-[75px]"></i></div>
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl"><img src={Tailwindcss} className='w-[180px] xl:mt-[85px] 2xl:mt-[100px] xl:ml-[65px]' alt='' /></div>
        </div>
        <div className=" xl:space-y-8 2xl:space-y-8">
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl"><i class="fab fa-python text-[#6F5DE0] text-[150px] xl:mt-[80px] xl:ml-[85px]"></i></div>
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"><img src={Vercel} className='w-[200px] xl:mt-[120px] xl:ml-[48px] 2xl:mt-[140px] 2xl:ml-[60px]' alt='' /></div>
        </div>
        <div className=" xl:space-y-8 2xl:space-y-8">
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"><img src={Flutter} className='w-[180px] xl:mt-[60px] xl:ml-[60px]' alt='' /></div>
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl"><img src={Tensorflow} className='w-[200px] xl:mt-[50px] xl:ml-[48px]  2xl:mt-[60px] 2xl:ml-[60px]' alt='' /></div>
        </div>
        <div className=" xl:space-y-8 2xl:space-y-8">
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl"><img src={Dart} className='w-[180px] xl:mt-[60px] xl:ml-[60px]' alt='' /></div>
            <div className="sm:hidden lg:inline-block  xl:w-[300px] xl:h-[300px] 2xl:w-[325px] 2xl:h-[325px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"><img src={Firebase} className='w-[200px] xl:mt-[50px] xl:ml-[50px] 2xl:mt-[60px] 2xl:ml-[60px]' alt='' /></div>
        </div>
    </div>
  );
}

export default TechItems;
