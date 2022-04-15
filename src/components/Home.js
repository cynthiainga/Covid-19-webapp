import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const AllContinents = useSelector((state) => state.continent);

  return (

    <div className="home-container" id={AllContinents}>
      <ul className="continent-list">
        {
      AllContinents.map((continent) => (
        <Link key={continent.name} to={{ pathname: `/continent/${continent.name}` }}>
          <li className="continent-item">
            <div>
              <h2 className="continent-name">{continent.name}</h2>
              <h2 className="country-number">
                {continent.number}
                {' '}
                countries
              </h2>
            </div>
            <div className="continent-image">
              <img src={continent.map} alt="Continent map" className={`map ${continent.classname}`} />
            </div>
          </li>
        </Link>
      ))
    }
      </ul>
    </div>
  );
};

export default Home;
