const getContinent = async () => {
  const request = await fetch('https://api.covid19tracking.narrativa.com/api/2022-04-11?continent=africa');
  const countries = await request.json();
  return countries;
};

const getCountry = async (country) => {
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/2022-04-11?country=${country}`);
  const result = await request.json();
  return result;
};

export { getContinent, getCountry };
