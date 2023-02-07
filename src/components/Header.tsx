import React from "react";
import Menulcon from "@material-ui/icons/Menu";
import Polymer from "@material-ui/icons/Polymer";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Face from "@material-ui/icons/Face";

const Header = () => {
  return (
    <div className="sticky my-0 mx-2.5 flex items-center justify-between bg-white py-1 px-0 text-black">
      <div className="flex items-center">
        <IconButton>
          <Menulcon />
        </IconButton>
        <Polymer />
        <div className="pl-1 text-2xl text-gray-900">Forms</div>
      </div>
      <div className="flex h-11 w-[700px] flex-row items-center rounded bg-gray-100">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          className="border-none bg-transparent outline-none"
          type="text"
          name="search"
          placeholder="search"
        />
      </div>

      <div className="flex items-center">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Face />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
