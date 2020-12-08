import React from 'react';
import SearchIput from '@components/SearchInput';
import ApiRoutes from '@components/ApiRoutes';

const Menu = () => {
  const mock = [
    {
      group: 'authentication',
      link: ['create', 'update', 'delete']
    },
    {
      link: ['introduction']
    }
  ];
  const [routes, setRoutes] = React.useState(mock);
  return (
    <div className="p-4">
      <div className="border-b">
        <h1 className="text-2xl font-medium text-gray-900">API DOC</h1>
      </div>
      <SearchIput handleSearch={setRoutes} />
      <ApiRoutes routes={routes} />
    </div>
  );
};

export default Menu;
