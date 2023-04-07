import React, { FC } from "react";
import { useCountries } from "../hooks/countries";
import { ICountries } from "../models/ICountries";
import CountryItem from "./CountryItem";

const CountryList: FC = () => {
  const [countries, { error, status }] = useCountries();

  return (
    <>
      {status === "loading" && <h1>Loading...</h1>}
      {error && <h1>Failed to fetch countries</h1>}
      {countries.map((country: ICountries) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </>
  );
};

export default CountryList;
