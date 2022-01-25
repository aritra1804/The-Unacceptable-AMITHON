import React, { useState } from 'react';
import Homebg from '../../../images/homeBg.svg';

function HomeSection() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('https://youtu.be/iXsuXaK0mLc');
    } 
  });
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] 2xl:ml-[35px] mt-6 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="space-y-8 ">
        <h1 className="font-bold text-[#6F5DE0] text-5xl w-[650px]">Providing Smart security for the smarter generation</h1>
        <p className="xl:w-[510px] 2xl:w-[550px] text-[22px]">
        During the dire times of a Covid Epidemic,biometric logging has proven to be cumbersome and fatal. <br/>We at StarX company have aimed to create a platform making use of Ai,Computer Vision and ML to develop and deploy a model which provides <br/> real-time surveillance and intruder detection, aligning with a real-time attendance tracker made with <br/>state-of-the art azure Face Api.
        </p>
        <button className="bg-[#6F5DE0] hover:bg-[#6F5DE0] text-white font-bold py-4 px-12 rounded" onClick={() => setClicked(true)}>
          START NOW
        </button>
      </div>
      <div
        className="sm:hidden lg:inline-block lg:w-[800px] lg:h-[750px]  justify-center bg-no-repeat xl:ml-[-30px] 2xl:ml-[-30px]"
        style={{ backgroundImage: `url(${Homebg})` }}
      ></div>
    </div>
  );
}

export default HomeSection;
