import React, { createContext, useEffect, useState } from 'react';

// Create the context
const FlightsContext = createContext();

// Create a provider component
export const FlightsProvider = ({ children }) => {
  const [itineraries, setItineraries] = useState([]);
  const [origin, setOrigin] = useState({ name: '', entityId: '', skyId: '' });
  const [destination, setDestination] = useState({ name: '', entityId: '', skyId: '' });
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [ticketType, setTicketType] = useState('economy');
  const [adultsNumber, setAdultsNumber] = useState(1);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [orderBy, setOrderBy] = useState('best'); 



  return (
    <FlightsContext.Provider
      value={{
        itineraries,
        setItineraries,
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
        adultsNumber,
        setAdultsNumber,
        childrenNumber,
        setChildrenNumber,
        setOrderBy,
        orderBy
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsContext;
