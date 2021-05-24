import { Dispatch } from 'redux';
import axios from 'axios';

import { CountriesDispatchTypes, COUNTRY_SUCCESS, COUNTRY_LOADING, COUNTRY_FAIL } from './countriesActionTypes';


export const GetCountry = () => async (dispatch: Dispatch<CountriesDispatchTypes>) => {
  try {
    dispatch({ type: COUNTRY_LOADING });
    const response = await axios.get('https://corona-api.com/countries');

    dispatch({ 
      type: COUNTRY_SUCCESS, 
      payload: response.data, 
    });

  } catch (error) {
    dispatch({ type: COUNTRY_FAIL });
  }
}