import React from 'react';
import Menu from '@components/Menu';

const MainWrapper = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-full md:w-full lg:w-1/6 xl:w-1/6 bg-gray-200 md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        <Menu />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 bg-white md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        seu
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 bg-darkBlue md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        ze
      </div>
    </div>
  );
};

export default MainWrapper;
