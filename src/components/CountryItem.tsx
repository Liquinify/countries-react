import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ICountries } from "../models/ICountries";

type Props = {
  country: ICountries;
};

const CountryItem: FC<Props> = ({ country }) => {
  const navigate = useNavigate()

  return (
    <div className="card" onClick={() => navigate(`/country/${country.name}`)}>
        <img className="card__img" src={country.flags.png} alt="Country flag" />
        <div className="card__container">
          <h1 className="card__title">{!country.name.length ? 'None' : country.name}</h1>
          <p className="card__item">Population: {country.population.toLocaleString()}</p>
          <p className="card__item">Region: {country.region}</p>
          <p className="card__item">Capital: {!country.capital ? 'None' : country.capital}</p>
        </div>
    </div>
  );
};

export default CountryItem;
