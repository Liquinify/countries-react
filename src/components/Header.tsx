import React, { FC } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <div className="header__logo">
          <b>Where in the world?</b>
        </div>
      </Link>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
