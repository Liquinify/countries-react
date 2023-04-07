import React, { FC } from "react";
import Search from "./Search";
import SelectRegion from "./SelectRegion";

const Controls: FC = () => {
  return (
    <div className="controls">
      <Search />
      <SelectRegion />
    </div>
  );
};

export default Controls;
