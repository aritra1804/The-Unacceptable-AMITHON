import React from 'react';
import TechItems from './TechItems/TechItems';

function TechStack() {
  return (
    <div className='mt-[125px]'>
        <div className='text-center'>
            <h1 className='text-5xl text-[#6F5DE0] font-bold'>What Tech Stack Used To build This Product ?</h1>
        </div>
        <TechItems />
    </div>
  );
}

export default TechStack;
