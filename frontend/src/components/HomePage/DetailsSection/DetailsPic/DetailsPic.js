import React from 'react';

function DetailsPic() {
  return (
    <div className="xl:max-w-[1350px] 2xl:max-w-[1490px]  mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center">
      <div className="xl:mt-[60px] xl:space-y-8 2xl:space-y-8">
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px] justify-center bg-no-repeat xl:ml-[-110px] 2xl:ml-[-130px] bg-[#F6F6F6] shadow-xl rounded-xl"></div>
        <div className="sm:hidden lg:inline-block xl:w-[360px] xl:h-[360px]  2xl:w-[400px] 2xl:h-[400px] justify-center bg-no-repeat xl:ml-[-110px] 2xl:ml-[-130px]  bg-[#6F5DE0] shadow-xl rounded-xl"></div>
      </div>

      <div className="xl:mt-[-80px] xl:space-y-8 2xl:space-y-8">
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#6F5DE0] shadow-xl rounded-xl"></div>
        <div className="sm:hidden lg:inline-block  xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px]   justify-center bg-no-repeat xl:ml-[-20px] 2xl:ml-[-40px] bg-[#F6F6F6] shadow-xl rounded-xl"></div>
      </div>
    </div>
  );
}

export default DetailsPic;
