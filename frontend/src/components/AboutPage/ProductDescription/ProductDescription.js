import React from 'react';
import AboutBg from '../../../images/homeBg1.svg';

function ProductDescription() {
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[125px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
    <div
      className="sm:hidden lg:inline-block lg:w-[950px] lg:h-[750px] justify-center bg-no-repeat ml-[-78px]"
      style={{ backgroundImage: `url(${AboutBg})` }}
    ></div>
    <div className="space-y-6 xl:ml-[-16px] 2xl:ml-[50px] mt-[-80px]">
      <h1 className="font-bold text-[#6F5DE0] text-3xl">Why to choose Starx Company Services ?</h1>
      <p className="w-[680px] text-2xl">
      We at Starx Company are determined to make products which are user friendly and economically Feasible at the same time. The product is efficient and safe to use. 
      </p>
      {/* <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded">
        START NOW
      </button> */}
    </div>
  </div>
  );
}

export default ProductDescription;
