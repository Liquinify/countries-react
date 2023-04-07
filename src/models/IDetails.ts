import { NavigateFunction } from "react-router-dom";
import { ICountries } from "./ICountries";

export interface IDetails extends ICountries {
    nativeName: string
    flag: string
    subregion: string
    topLevelDomain: string
    currencies: string
    languages: string[]
    borders: string[]
    push: NavigateFunction
}