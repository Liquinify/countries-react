import React, { FC } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "../hooks/themes";

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="switch">
      {theme === "Light" ? <IoSunny size="14px" /> : <IoMoon size="14px" />}
      <span style={{ marginLeft: "1rem" }}>{theme} Mode</span>
    </div>
  );
};

export default ThemeSwitch;
