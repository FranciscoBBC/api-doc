import React from 'react';
import Menu from '@components/Menu';

const MainWrapper = () => {
  return (
    <div className="flex mb-4">
      <div className="w-1/6 bg-gray-200 h-screen">
        <Menu />
      </div>
      <div className="w-1/2 bg-white h-screen">seu</div>
      <div className="w-1/3 bg-darkBlue h-screen">ze</div>
    </div>
  );
};

export default MainWrapper;
