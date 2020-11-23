import React from 'react';
import SearchIput from '@components/SearchInput';

const Menu = () => {
  return (
    <div className="p-4">
      <div className="border-b">
        <h1 className="text-2xl font-medium text-gray-900">API DOC</h1>
      </div>
      <SearchIput />
    </div>
  );
};

export default Menu;
