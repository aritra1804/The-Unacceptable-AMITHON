import React from 'react';
import FeaturesDetails from './FeaturesDetails/FeaturesDetails';

function Features() {
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] xl:mt-[-5px] 2xl:mt-[15px] mx-auto px-4 grid grid-row-2 lg:grid-rows-2 items-center">
      <div className="space-y-5">
        <h1 className="font-bold text-[#6F5DE0] text-5xl">Features</h1>
        <p className="xl:w-[1350px] 2xl:w-[1420px] text-2xl">
          We’ll be suggesting the below four themes or impact areas to help
          spark your ideas. Remember that you’re welcome to build with the
          technologies of your choice, across any areas that you think would
          drive impact for these issues, so feel free to think outside the box
          too!
        </p>
      </div>
      <div className="grid grid-cols-4 mt-[-120px] mb-5">
        <div className="bg-[#ECB924] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg">
          <div className="max-w-[300px] mx-auto py-8 space-y-8">
            <h1 className="text-white text-3xl">Lorem ipsum</h1>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eu
              lectus magna aliquet.
            </p>
          </div>
        </div>
        <div className="bg-[#5A91D1] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg">
          <div className="max-w-[300px] mx-auto py-8 space-y-8">
            <h1 className="text-white text-3xl">Lorem ipsum</h1>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eu
              lectus magna aliquet.
            </p>
          </div>
        </div>
        <div className="bg-[#7A9B44] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg">
          <div className="max-w-[300px] mx-auto py-8 space-y-8">
            <h1 className="text-white text-3xl">Lorem ipsum</h1>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eu
              lectus magna aliquet.
            </p>
          </div>
        </div>
        <div className="bg-[#6F5DE0] xl:w-[320px] xl:h-[580px]  2xl:w-[350px] 2xl:h-[590px] rounded-lg">
          <div className="max-w-[300px] mx-auto py-8 space-y-8">
            <h1 className="text-white text-3xl">Lorem ipsum</h1>
            <p className="text-white text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus eu
              lectus magna aliquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
