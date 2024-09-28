import React from 'react';
import { flightCardStyles } from './styles';

const FlightsCard = ({ destination, price, image, dates, duration }) => {
  return (
    <div style={flightCardStyles.card}>
      <img src={image} alt={destination} style={flightCardStyles.image} />
      <div style={flightCardStyles.info}>
        <div style={flightCardStyles.topInfo}>
          <h3 style={flightCardStyles.destination}>{destination}</h3>
          <p style={flightCardStyles.price}>{price}</p>
        </div>
        <p style={flightCardStyles.dates}>{dates}</p>
        <p style={flightCardStyles.duration}>{duration}</p>
      </div>
    </div>
  );
};

export default FlightsCard;
