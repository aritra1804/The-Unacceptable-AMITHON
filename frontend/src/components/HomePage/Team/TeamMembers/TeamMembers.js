import React from 'react';
import Abhinav from '../../../../images/abhinav.png'
import Aritra from '../../../../images/aritra.jpg'
import Om from '../../../../images/om.jpg'
import Farhan from '../../../../images/farhan.jpg'

function TeamMembers() {
  return (
      <div className='mt-[40px]'>
          <div className='flex space-x-3 '>
            <div className="bg-[#F6F6F6] shadow-xl xl:w-[330px] xl:h-[350px] xl:mt-[50px] 2xl:mt-[50px]  2xl:w-[350px] 2xl:h-[350px] rounded-lg" > <img src={Abhinav} alt="" className='w-[500px] h-[350px] rounded-lg object-cover'/></div>
            <div className="bg-[#F6F6F6] shadow-xl xl:w-[330px] xl:h-[350px] xl:mt-[50px] 2xl:mt-[50px]  2xl:w-[350px] 2xl:h-[350px] rounded-lg"><img src={Aritra} alt="" className='w-[500px] h-[350px] rounded-lg object-cover'/></div>
            <div className="bg-[#F6F6F6] shadow-xl xl:w-[330px] xl:h-[350px] xl:mt-[50px] 2xl:mt-[50px]  2xl:w-[350px] 2xl:h-[350px] rounded-lg"><img src={Om} alt="" className='w-[500px] h-[350px] rounded-lg object-cover'/></div>
            <div className="bg-[#F6F6F6] shadow-xl xl:w-[330px] xl:h-[350px] xl:mt-[50px] 2xl:mt-[50px]  2xl:w-[350px] 2xl:h-[350px] rounded-lg"><img src={Farhan} alt="" className='w-[500px] h-[350px] rounded-lg object-cover'/></div>
          </div>
      </div>
  );
}

export default TeamMembers;
