import React, { FC } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { selectRegion, setRegion } from "../store/features/controls-slice";

type RegionOption = {
  value: string
}

const SelectRegion: FC = () => {
  const dispatch = useAppDispatch();
  const region = useAppSelector(selectRegion);
  
  const optionsMap = {
    Africa: { value: "Africa", label: "Africa" },
    America: { value: "America", label: "America" },
    Asia: { value: "Asia", label: "Asia" },
    Europe: { value: "Europe", label: "Europe" },
    Oceania: { value: "Oceania", label: "Oceania" },
  };
  

  const options = Object.values(optionsMap);

  const handleSelect = (reg: RegionOption) => {
    dispatch(setRegion(reg?.value || ""));
    
  };

  return (
    <Select
      className="select"
      options={options}
      onChange={handleSelect}
      value={optionsMap[region]}
      isClearable
      isSearchable={false}
    />
  );
};

export default SelectRegion;
