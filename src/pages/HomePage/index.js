import React from 'react';
import SearchBar from 'components/SearchBar';
import Header from 'components/Header';
import { homePageStyles } from './styles';
import FlightsList from 'components/FlightsList';
import ItinerariesList from 'components/ItinerariesList';
const HomePage = () => {

  return (
    <>
      <Header />
      <div style={homePageStyles.container}>
        <section style={homePageStyles.searchSection}>
          <SearchBar />
        </section>
        <section style={homePageStyles.flightSection}>
          <ItinerariesList />
        </section>
        <section style={homePageStyles.flightSection}>
          <FlightsList />
        </section>
      </div>
    </>
  );
};

export default HomePage;
