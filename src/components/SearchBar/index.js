import React, { useState, useEffect, useRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { searchBarStyles } from './styles';
import PassengerSelector from 'components/PassengerSelector';
import { searchAirport, searchFlight } from 'services/flightService';
import FlightsContext from 'context/FlightsContext';

const SearchBar = () => {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    ticketType,
    setTicketType,
    setItineraries,
    childrenNumber,
    adultsNumber,
    orderBy,
  } = useContext(FlightsContext);

  const [originResults, setOriginResults] = useState([]);
  const [destinationResults, setDestinationResults] = useState([]);
  const [flightsLoading, setFlightsLoading] = useState(false);
  const [airportsLoading, setAirportsLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverType, setPopoverType] = useState('');
  const [error, setError] = useState('');

  const isOriginTyping = useRef(false);
  const isDestinationTyping = useRef(false);
  const initialRender = useRef(true);

  const fetchAirports = async (query, setResults) => {
    try {
      setAirportsLoading(true);
      const response = await searchAirport(query);
      if (response.status && response.data) {
        setResults(response.data);
      }
    } catch (error) {
      console.error('Error fetching airports:', error);
    } finally {
      setAirportsLoading(false);
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (origin.name && isOriginTyping.current) {
      const timeout = setTimeout(() => {
        setPopoverType('origin');
        setAnchorEl(document.querySelector('#origin-input'));
        fetchAirports(origin.name, setOriginResults);
        isOriginTyping.current = false;
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [origin.name]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (destination.name && isDestinationTyping.current) {
      const timeout = setTimeout(() => {
        setPopoverType('destination');
        setAnchorEl(document.querySelector('#destination-input'));
        fetchAirports(destination.name, setDestinationResults);
        isDestinationTyping.current = false;
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [destination.name]);

  const handleTicketType = (event) => setTicketType(event.target.value);

  const handleSearch = async () => {
    if (!origin.name || !destination.name || !departureDate || !returnDate) {
      setError(
        'Please fill in all required fields: Origin, Destination, Departure Date, and Return Date.'
      );
      return;
    }

    setError('');
    setFlightsLoading(true);

    try {
      const flightSearchParams = {
        originSkyId: origin.skyId,
        destinationSkyId: destination.skyId,
        originEntityId: origin.entityId,
        destinationEntityId: destination.entityId,
        date: departureDate,
        returnDate,
        cabinClass: ticketType,
        adults: adultsNumber,
        children: childrenNumber,
        sortBy: orderBy,
        currency: 'USD',
        countryCode: 'US',
      };

      const searchResults = await searchFlight(flightSearchParams);
      setItineraries(searchResults.data.itineraries);
    } catch (error) {
      console.error('Error searching for flights:', error);
    } finally {
      setFlightsLoading(false);
    }
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleSelectAirport = (airport) => {
    if (popoverType === 'origin') {
      isOriginTyping.current = false;
      setOrigin({
        name: airport.presentation.suggestionTitle,
        entityId: airport.entityId,
        skyId: airport.skyId,
      });
    } else if (popoverType === 'destination') {
      isDestinationTyping.current = false;
      setDestination({
        name: airport.presentation.suggestionTitle,
        entityId: airport.entityId,
        skyId: airport.skyId,
      });
    }
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} style={searchBarStyles.container}>
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
        )}

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={2}>
              <PassengerSelector />
            </Grid>

            <Grid item xs={12} sm={5} md={2}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="ticketType-label">{'Cabin Class'}</InputLabel>
                <Select
                  labelId="ticketType-label"
                  id="ticketType"
                  value={ticketType}
                  onChange={handleTicketType}
                  label={'Cabin Class'}
                  startAdornment={
                    <InputAdornment position="start">
                      <FlightClassIcon />
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

        {/* Origin Input */}
        <Grid item xs={12} sm={6} md={2.5}>
          <TextField
            id="origin-input"
            placeholder="From"
            value={origin.name}
            onChange={(e) => {
              isOriginTyping.current = true;
              setOrigin((prev) => ({ ...prev, name: e.target.value }));
            }}
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

        {/* Destination Input */}
        <Grid item xs={12} sm={6} md={2.5}>
          <TextField
            id="destination-input"
            placeholder="Where to?"
            value={destination.name}
            onChange={(e) => {
              isDestinationTyping.current = true;
              setDestination((prev) => ({ ...prev, name: e.target.value }));
            }}
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

        {/* Departure and Return Dates */}
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
            disabled={flightsLoading}
          >
            {flightsLoading ? (
              <CircularProgress color="white" size={24} />
            ) : (
              'Search Flights'
            )}
          </Button>
        </Grid>
      </Grid>

      <Popover
        open={
          Boolean(anchorEl) &&
          (originResults.length > 0 ||
            destinationResults.length > 0 ||
            airportsLoading)
        }
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: { minWidth: '250px', minHeight: '150px' },
        }}
      >
        <List>
          {airportsLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '150px',
                width: '100%',
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            (popoverType === 'origin' ? originResults : destinationResults).map(
              (airport) => (
                <ListItem
                  button
                  key={airport.skyId}
                  onClick={() => handleSelectAirport(airport)}
                  style={{ cursor: 'pointer' }}
                >
                  <ListItemText
                    primary={airport.presentation.suggestionTitle}
                    secondary={airport.presentation.subtitle}
                  />
                </ListItem>
              )
            )
          )}
        </List>
      </Popover>
    </Container>
  );
};

export default SearchBar;
