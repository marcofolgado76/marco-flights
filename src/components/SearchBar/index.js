import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { searchBarStyles } from './styles';

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    console.log(
      `Searching flights from ${origin} to ${destination} departing on ${departureDate} and returning on ${returnDate}`
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={searchBarStyles.container}>
        <Grid item xs={12} sm={6} md={2.5}>
          <TextField
            placeholder="From"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon />
                </InputAdornment>
              ),
            }}
            style={searchBarStyles.input}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.5}>
          <TextField
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightLandIcon />
                </InputAdornment>
              ),
            }}
            style={searchBarStyles.input}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.1}>
          <TextField
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
            style={searchBarStyles.input}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.1}>
          <TextField
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            }}
            style={searchBarStyles.input}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button
            onClick={handleSearch}
            variant="contained"
            style={searchBarStyles.button}
            fullWidth
          >
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchBar;
