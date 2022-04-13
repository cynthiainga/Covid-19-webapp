import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchData from '../redux/api';
import { GetStates } from '../redux/countries/countries';

const Details = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = CountryStore.find((country) => country.country === name);

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchData()
        .then((response) => dispatch(GetStates(response)));
    }
  });

  if (!findCountry) return <h1>Loading...</h1>;

  return (
    <div className="details-container">
      <div className="country-details">
        <h1>{name}</h1>
        <img src={findCountry.country_flag} alt="flag" className="flag2" />
        <h2>{findCountry.population.toLocaleString()}</h2>
      </div>
      <div>
        <ul className="details-list">
          <h3>Today&apos;s update:</h3>
          <li className="details-item">
            <h4>New cases:</h4>
            <p className="detail-number">{findCountry.todays_cases.toLocaleString()}</p>
          </li>
          <li className="details-item">
            <h4>Confirmed deaths:</h4>
            <p className="detail-number">{findCountry.todays_deaths.toLocaleString()}</p>
          </li>
          <li className="details-item">
            <h4>New Recoveries:</h4>
            <p className="detail-number">{findCountry.todays_recovered.toLocaleString()}</p>
          </li>
        </ul>
        <ul className="total-list">
          <h3>Total:</h3>
          <li className="total-item">
            <h4>Confirmed cases:</h4>
            <p className="total-number">{findCountry.total_cases.toLocaleString()}</p>
          </li>
          <li className="total-item">
            <h4>Recovered:</h4>
            <p className="total-number">{findCountry.total_recovered.toLocaleString()}</p>
          </li>
          <li className="total-item">
            <h4>Active Cases:</h4>
            <p className="total-number">{findCountry.total_active.toLocaleString()}</p>
          </li>
          <li className="total-item">
            <h4>Total Tests:</h4>
            <p className="total-number">{findCountry.total_tests.toLocaleString()}</p>
          </li>
          <li className="total-item">
            <h4>Deaths:</h4>
            <p className="total-number">{findCountry.total_deaths.toLocaleString()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
