import React, { FC } from "react";
import { NavigateFunction } from "react-router-dom";
import { useDetails } from "../hooks/details";
import DetailPage from "./DetailsItem";

type Props = {
  name: string;
  navigate: NavigateFunction;
};

const DetailsList: FC<Props> = ({ name = "", navigate }) => {
  const { status, error, currentCountry } = useDetails(name);

  return (
    <>
      {status === "loading" && <h1>Loading...</h1>}
      {error && <h1>Failed to load the details</h1>}
      {currentCountry && <DetailPage push={navigate} {...currentCountry} />}
    </>
  );
};

export default DetailsList;
