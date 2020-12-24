import React from "react";
import Menu from "@components/Menu";
import Content from "@components/Content";

const MainWrapper = () => {
  const [data, setData] = React.useState();

  return (
    <>
      <div className="w-full sm:w-full md:w-full lg:w-1/6 xl:w-1/6 bg-gray-200 md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        <Menu handleChange={setData} />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 bg-white md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        <Content>{data}</Content>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 bg-darkBlue md:h-auto sm:h-auto lg:h-screen xl:h-screen">
        ze
      </div>
    </>
  );
};

export default MainWrapper;
