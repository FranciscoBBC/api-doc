import React from 'react';
import { BsSearch } from 'react-icons/bs';
import SearchInputModel from '@models/components/SearchInputModel';

const SearchInput = ({ handleSearch }: SearchInputModel) => {
  const onPerformSearch = (value: string) => {
    const arr = [value];
    handleSearch(arr);
    console.log(value);
  };
  return (
    <div className="flex flex-column w-full items-center justify-items-center">
      <BsSearch
        data-testid="search-icon"
        className="mr-3 text-gray-500 stroke-current stroke-1 text-lg"
      />
      <input
        data-testid="search-input"
        type="search"
        name="search-docs"
        className="w-full bg-gray-200 text-lg  border border-transparent focus:outline-none focus:border-transparent"
        placeholder="search"
        onChange={e => onPerformSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
