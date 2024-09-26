import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { searchBarStyles } from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PassengerSelector from 'components/Common/PassengerSelector';

const SearchBar = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelType, setTravelType] = useState(10);
  const [numberOfPersons, setNumberOfPersons] = useState(10);
  const [ticketType, setTicketType] = useState(10);

  const handleTravelType = (event) => setTravelType(event.target.value);
  const handleNumberOfPersons = (event) =>
    setNumberOfPersons(event.target.value);
  const handleTicketType = (event) => setTicketType(event.target.value);

  const handleSearch = () => {
    console.log(
      `Searching flights from ${origin} to ${destination} departing on ${departureDate} and returning on ${returnDate}`
    );
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={searchBarStyles.container}>
      <Grid item xs={12}>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={5} md={2}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="travelType-label">{'Travel Type'}</InputLabel>
        <Select
          labelId="travelType-label"
          id="travelType"
          value={travelType}
          onChange={handleTravelType}
          label={'Travel Type'}
          startAdornment={
            <InputAdornment position="start">
              <CompareArrowsIcon />
            </InputAdornment>
          }
        >
          <MenuItem value={'round_trip'}>Round trip</MenuItem>
          <MenuItem value={'one_way'}>One way</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12} sm={5} md={2}>
      <PassengerSelector />
    </Grid>

    <Grid item xs={12} sm={5} md={2}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="ticketType-label">{'Ticket Type'}</InputLabel>
        <Select
          labelId="ticketType-label"
          id="ticketType"
          value={ticketType}
          onChange={handleTicketType}
          label={'Ticket Type'}
          startAdornment={
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          }
        >
          <MenuItem value={'economy'}>Economy</MenuItem>
          <MenuItem value={'business'}>Business</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
</Grid>

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
