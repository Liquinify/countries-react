export interface ICountries {
  name: string;
  population: number;
  flags: {
    flags: string;
    png: string;
  };
  capital: string;
  region: string;
}
