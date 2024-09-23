import React, { useState } from 'react';
import { searchBarStyles } from './styles'; 

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    console.log(`Searching flights from ${origin} to ${destination} departing on ${departureDate} and returning on ${returnDate}`);
  };

  return (
    <div style={searchBarStyles.container}>
      <input
        type="text"
        placeholder="From"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        style={searchBarStyles.input}
      />
      <input
        type="text"
        placeholder="To"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        style={searchBarStyles.input}
      />
      <input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        style={searchBarStyles.input}
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
        style={searchBarStyles.input}
      />
      <button onClick={handleSearch} style={searchBarStyles.button}>
        Search Flights
      </button>
    </div>
  );
};

export default SearchBar;
