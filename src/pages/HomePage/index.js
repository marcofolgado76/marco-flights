import React from 'react';
import SearchBar from 'components/SearchBar';
import Header from 'components/Header';
import { homePageStyles } from './styles';
import FlightsList from 'components/FlightsList';
import { searchAirport } from 'services/flightService';
const HomePage = () => {
  searchAirport('new').then((data) => console.log(data));

  return (
    <>
      <Header />
      <div style={homePageStyles.container}>
        <section style={homePageStyles.searchSection}>
          <SearchBar />
        </section>
        <section style={homePageStyles.flightSection}>
          <FlightsList />
        </section>
      </div>
    </>
  );
};

export default HomePage;
