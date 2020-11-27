import React from 'react';
import SearchIput from '@components/SearchInput';
import ApiRoutes from '@components/ApiRoutes';

const Menu = () => {
  const [routes, setRoutes] = React.useState(['/user', '/coupon', '/invoice']);
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
