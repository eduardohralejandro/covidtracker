import {
  COUNTRY_FAIL,
  COUNTRY_LOADING,
  COUNTRY_SUCCESS,
  CountriesDispatchTypes,
  CountryType
} from "../actions/countriesActionTypes";

interface IDefaultState {
  loading: boolean,
  country?: CountryType,
}

const defaultState: IDefaultState = {
  loading: false
};

const countryReducer = (state: IDefaultState = defaultState, action: CountriesDispatchTypes) : IDefaultState => {
  switch (action.type) {
    case COUNTRY_FAIL:
      return {
        loading: false,
      }
    case COUNTRY_LOADING:
      return {
        loading: true,
      }
    case COUNTRY_SUCCESS:
      return {
        loading: false,
        country: action.payload
      }
    default:
      return state
  }
};


export default countryReducer;