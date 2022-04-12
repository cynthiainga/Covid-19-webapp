import { getContinent, getCountry } from '../../API/api';

const LOAD_CONTINENT = 'covid-19-webapp/LOAD_CONTINENT';
const LOAD_COUNTRY = 'covid-19-webapp/LOAD_COUNTRY';
const FILTER_DATA = 'covid-19-webapp/FILTER_DATA';

const initialState = [];

export const loadContinent = () => async (dispatch) => {
  const continent = await getContinent();
  const countries = Object.values(continent);

  if (countries) {
    dispatch({
      type: LOAD_CONTINENT,
      payload: countries,
    });
  }
};

export const loadCountry = (name) => async (dispatch) => {
  const countryData = await getCountry(name);
  const country = Object.values(countryData)[0];

  if (country) {
    dispatch({
      type: LOAD_COUNTRY,
      payload: country,
    });
  }
};

const filterNumbers = (countries, value) => {
  switch (value) {
    case '10000':
      return countries.filter((country) => country.All.confirmed < 50000);
    case '50000':
      return countries.filter((country) => country.All.confirmed >= 50000
              && country.All.confirmed < 200000);
    case '100000':
      return countries.filter((country) => country.All.confirmed >= 100000
              && country.All.confirmed < 300000);
    case '200000':
      return countries.filter((country) => country.All.confirmed >= 200000);
    default:
      return countries;
  }
};

export const filterCountry = (value) => async (dispatch) => {
  const continent = await getContinent();
  const countries = Object.values(continent);
  const filteredCountry = filterNumbers(countries, value);

  if (filteredCountry) {
    dispatch({
      type: FILTER_DATA,
      payload: filteredCountry,
    });
  }
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTINENT:
      return { continent: action.payload };
    case LOAD_COUNTRY:
      return {
        ...state,
        current_country: action.payload,
      };
    case FILTER_DATA:
      return { continent: action.payload };
    default:
      return state;
  }
};

export default countriesReducer;
