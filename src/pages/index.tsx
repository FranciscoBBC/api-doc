import React from 'react';
import Menu from '@components/Menu';
import Content from '@components/Content';

const Home = () => {
  const [content, setContent] = React.useState('');

  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-1/6 xl:w-1/6 bg-gray-200 md:h-auto sm:h-auto lg:h-screen xl:h-screen">
          <Menu handleChange={setContent} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 bg-white md:h-auto sm:h-auto lg:h-screen xl:h-screen">
          <Content data={content} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 bg-darkBlue md:h-auto sm:h-auto lg:h-screen xl:h-screen">
          ze
        </div>
      </div>
    </main>
  );
};

export default Home;
