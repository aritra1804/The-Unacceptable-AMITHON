import React from 'react';
import Homebg from '../../../images/homeBg.svg';

function HomeSection() {
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-6 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="space-y-8 ">
        <h1 className="font-bold text-[#6F5DE0] text-5xl">We are One</h1>
        <p className="xl:w-[510px] 2xl:w-[550px] text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem
          dolor sed viverra ipsum nunc aliquet.
        </p>
        <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded">
          START NOW
        </button>
      </div>
      <div
        className="sm:hidden lg:inline-block lg:w-[800px] lg:h-[750px]  justify-center bg-no-repeat xl:ml-[-300px] 2xl:ml-[-30px]"
        style={{ backgroundImage: `url(${Homebg})` }}
      ></div>
    </div>
  );
}

export default HomeSection;
