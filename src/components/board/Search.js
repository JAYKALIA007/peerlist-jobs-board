import React from "react";
import { SearchIcon } from "../../icons/Icons";

export const Search = ({ searchQuery, onChange }) => {
  return (
    <div className="flex items-center gap-x-2.5 bg-white pb-6">
      <SearchIcon className="h-4 w-4" />
      <input
        type="text"
        placeholder="Search candidates"
        className="focus:none w-60 rounded-md outline-none"
        value={searchQuery}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
