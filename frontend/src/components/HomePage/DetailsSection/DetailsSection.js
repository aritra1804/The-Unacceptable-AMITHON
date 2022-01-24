import React from 'react';
import DetailsPic from './DetailsPic/DetailsPic';

function DetailsSection() {
  return (
    <div id='services' className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[55px] xl:mb-[-50px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
    <div className="space-y-6">
      <h1 className="font-bold text-[#6F5DE0] text-6xl">Services</h1>
      <p className="w-[550px] text-2xl">
      These are various services our company provides
      </p>
      {/* <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded">
        START NOW
      </button> */}
    </div>
    <div>
      <DetailsPic />
    </div>
  </div>
  );
}

export default DetailsSection;
