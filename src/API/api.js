const BASE_URL = 'https://api.covid19tracking.narrativa.com/api/2022-04-11';

export const getContinent = async () => {
  const continent = 'europe';
  const request = await fetch(`${BASE_URL}?continent=${continent}`);
  const response = await request.json();
  return response;
};

export const getCountry = async (country) => {
  const request = await fetch(`${BASE_URL}?country=${country}`);
  const result = await request.json();
  return result;
};
