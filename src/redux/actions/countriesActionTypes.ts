export const COUNTRY_LOADING = 'COUNTRY_LOADING';
export const COUNTRY_FAIL = 'COUNTRY_FAIL';
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';


export type CountryType =  {
  coordinates: CountryCoordinates;
  description: CountryDescription;
  covidata: CountryCovidLastestData;
}

export type CountryCoordinates = {
  coordinates: {
    latitude: number;
    longitude: number;
  }
}

export type CountryDescription = {
    name: string;
    population: number;
    code: string;
}

export type CountryCovidLastestData = {
  latest_data: {
    death: number;
    confirmed: number;
    recovered: number;
    critical: number;
  }
}


export interface ICountryLoading {
  type: typeof COUNTRY_LOADING,
}

export interface ICountryFail {
  type: typeof COUNTRY_FAIL,
}

export interface ICountrySuccess {
  type: typeof COUNTRY_SUCCESS,
  payload: CountryType,
}


export type CountriesDispatchTypes = ICountryLoading | ICountrySuccess | ICountryFail