import React, { FC } from "react";
import { useNeighbors } from "../hooks/neighbors";
import { IDetails } from "../models/IDetails";

const DetailsItem: FC<IDetails> = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders = [],
    push,
  } = props;

  const neighbors = useNeighbors(borders);

  return (
    <div className="details">
      <img className="details__image" src={flag} alt="Country flag" />
      <div className="details__information">
        <h1 className="details__name">{name}</h1>
        <div className="details__lists">
          <ul className="details__list">
            <li className="details__item">
              <b>Native name</b>: {nativeName}
            </li>
            <li className="details__item">
              <b>Population</b>: {population.toLocaleString()}
            </li>
            <li className="details__item">
              <b>Region</b>: {region}
            </li>
            <li className="details__item">
              <b>Sub Region</b>: {subregion}
            </li>
            <li className="details__item">
              <b>Capital</b>: {capital === undefined ? "None" : capital}
            </li>
          </ul>
          <ul className="details__list">
            <li className="details__item">
              <b>Top Level Domain</b>: {topLevelDomain}
            </li>
            <li className="details__item">
              <b>Currencies: </b>
              {currencies === undefined ? (
                <span>None</span>
              ) : (
                <span>
                  {[currencies].map((currency) => (
                    <span key={currency}> {currency.name} </span>
                  ))}
                </span>
              )}
            </li>
            <li className="details__item">
              <b>Languages: </b>
              {languages === undefined ? (
                <span>None</span>
              ) : (
                <span>
                  {languages.map((language) => (
                    <span key={language}> {language.name} </span>
                  ))}
                </span>
              )}
            </li>
          </ul>
        </div>
        <div className="details__borders">
          <b>Border countries: </b>
          {!borders.length ? (
            <span>None</span>
          ) : (
            <div className="details__group">
              {neighbors.map((countryName: string) => (
                <span
                  className="details__border"
                  key={countryName}
                  onClick={() => push(`/country/${countryName}`)}
                >
                  {countryName}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
