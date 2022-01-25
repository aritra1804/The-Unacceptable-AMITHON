import React, { useState } from 'react';
import Homebg from '../../../images/aboutus.png'

function AboutSection() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('https://youtu.be/iXsuXaK0mLc');
    } 
  });
  return (
      <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] 2xl:ml-[35px] mt-6 mx-auto px-4 grid grid-rows-1 lg:grid-rows-1 items-center justify-items-center">
      <div
        className="sm:hidden lg:inline-block lg:w-[1400px] lg:h-[1500px]  justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[40px] xl:mt-[-85px] 2xl:mt-[-35px]"
        style={{ backgroundImage: `url(${Homebg})` }}
      ></div>
      <div className="space-y-8 text-center mt-[-500px] xl:ml-[-80px]">
        <h1 className="font-bold text-[#6F5DE0] text-5xl">Starx Company</h1>
        <p className="xl:w-[510px] 2xl:w-[550px] text-2xl">
        Starx can help business to take control of time attendance logging of employees at different sites with vast geographical presence and enable them online across all locations.
        </p>
        <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded" onClick={() => setClicked(true)}>
          START NOW
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
