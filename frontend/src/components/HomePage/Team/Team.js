import React from 'react';
import Teambg from '../../../images/team.svg';
import TeamMembers from './TeamMembers/TeamMembers';

function Team() {
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px] mt-[130px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div
        className="sm:hidden lg:inline-block lg:w-[950px] lg:h-[750px]  justify-center bg-no-repeat xl:ml-[-10px] 2xl:ml-[-10px]"
        style={{ backgroundImage: `url(${Teambg})` }}
      ></div>
      <div>
        <div className="grid grid-row-2 lg:grid-rows-2 space-y-2 ">
          <h1 className="font-bold text-[#6F5DE0] text-6xl">Our Team</h1>
          <p className="xl:w-[700px] 2xl:w-[700px]  text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className=" mb-5 w-[1200px] ml-[-530px] 2xl:ml-[-500px]">
          <TeamMembers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
