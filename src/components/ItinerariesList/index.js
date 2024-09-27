import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FlightsContext from 'context/FlightsContext';
import { searchFlight } from 'services/flightService';

const ItinerariesList = () => {
  const { itineraries,setOrderBy ,orderBy,destination,departureDate,returnDate,ticketType,adultsNumber,childrenNumber,setItineraries } = useContext(FlightsContext);

  if (itineraries.length === 0) {
    return <p>No itineraries available</p>;
  }

  // Function to handle sorting
  const handleOrderChange = async (event) => {
    setOrderBy(String(event.target.value));

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
        sortBy: String(event.target.value),
        currency: 'USD',
        countryCode: 'US',
      };
      console.log({flightSearchParams})

      const searchResults = await searchFlight(flightSearchParams);
      setItineraries(searchResults.data.itineraries);  
    } catch (error) {
      console.error('Error searching for flights:', error);
    } finally {
      //setLoading(false);
    }  
  };

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2>Flight Itineraries</h2>
        <FormControl variant="outlined" size="large">
          <InputLabel id="order-by-label">Order By</InputLabel>
          <Select
            labelId="order-by-label"
            id="order-by-select"
            value={orderBy}
            onChange={handleOrderChange}
            label="Order By"
          >
            <MenuItem value="best">Best</MenuItem>
            <MenuItem value="price_high">Cheapest</MenuItem>
            <MenuItem value="outbound_take_off_time">Outbound Take Off Time</MenuItem>
            <MenuItem value="outbound_landing_time">Outbound Landing Time</MenuItem>
            <MenuItem value="return_take_off_time">Return Take Off Time</MenuItem>
            <MenuItem value="return_landing_time">Return Landinf Time</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="itineraries table">
          <TableHead>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Arrival</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Non-stop</TableCell>
              <TableCell>Carrier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itineraries.map((itinerary) =>
              itinerary.legs.map((leg) => (
                <TableRow key={leg.id}>
                  <TableCell>{itinerary.price.formatted}</TableCell>
                  <TableCell>{leg.origin.city} ({leg.origin.displayCode})</TableCell>
                  <TableCell>{leg.destination.city} ({leg.destination.displayCode})</TableCell>
                  <TableCell>{new Date(leg.departure).toLocaleString()}</TableCell>
                  <TableCell>{new Date(leg.arrival).toLocaleString()}</TableCell>
                  <TableCell>{Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m</TableCell>
                  <TableCell>{leg.stopCount === 0 ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img 
                        src={leg.carriers.marketing[0].logoUrl} 
                        alt={leg.carriers.marketing[0].name} 
                        style={{ height: '20px', marginRight: '8px' }} 
                      />
                      {leg.carriers.marketing[0].name}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ItinerariesList;
