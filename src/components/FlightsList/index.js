import React from 'react';
import FlightsCard from 'components/FlightsCard';
import { flightData } from 'components/utils/mockData';
const FlightsList = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
    >
      {flightData.map((flight, index) => (
        <FlightsCard key={index} {...flight} />
      ))}
    </div>
  );
};

export default FlightsList;
