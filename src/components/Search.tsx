import React, { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { selectSearch, setSearch } from "../store/features/controls-slice";
import { IoSearch } from 'react-icons/io5';


const Search: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <form>
      <IoSearch className="icon" size={15}/>
      <input
        type="search"
        className="search"
        onChange={handleSearch}
        value={search}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
