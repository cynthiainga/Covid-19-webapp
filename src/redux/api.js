import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19/countries';

const FetchData = async () => {
  const dataStore = [];
  const res = await axios.get(URL);
  res.data.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const collectedData = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };
    return dataStore.push(collectedData);
  });
  return dataStore;
};

export default FetchData;
