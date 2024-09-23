import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar'; 
import Header from '../../components/Header';
import { homePageStyles } from './styles'; 
import FlightsList from '../../components/FlightsList';

const HomePage = () => {
  return (
    <div style={homePageStyles.container}>
      <Header/>
      <section style={homePageStyles.searchSection}>
        <SearchBar /> 
       </section>
       <section style={homePageStyles.flightSection}>
        <FlightsList />
      </section>
    </div>
  );
};

export default HomePage;
