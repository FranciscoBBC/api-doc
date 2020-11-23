import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <div className="flex flex-column w-full items-center justify-items-center">
      <BsSearch className="mr-3 text-gray-500 stroke-current stroke-1 text-lg" />
      <input
        type="search"
        name="search-docs"
        className="w-full bg-gray-200 text-lg  border border-transparent focus:outline-none focus:border-transparent"
        placeholder="search"
      />
    </div>
  );
};

export default SearchInput;
