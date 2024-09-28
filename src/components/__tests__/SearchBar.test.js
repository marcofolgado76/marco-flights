import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';
import FlightsContext from 'context/FlightsContext';
import '@testing-library/jest-dom';

test('renders with FlightsContext values', () => {
  const contextValues = {
    origin: { name: 'New York', skyId: 'NYC' },
    destination: { name: 'Los Angeles', skyId: 'LAX' },
    departureDate: '2024-10-01',
    returnDate: '2024-10-10',
    ticketType: 'economy',
    setOrigin: jest.fn(),
    setDestination: jest.fn(),
    setDepartureDate: jest.fn(),
    setReturnDate: jest.fn(),
    setTicketType: jest.fn(),
    setItineraries: jest.fn(),
  };

  act(() => {
    render(
      <FlightsContext.Provider value={contextValues}>
        <SearchBar />
      </FlightsContext.Provider>
    );
  });

  // Verify that the context values are displayed
  expect(screen.getByDisplayValue('New York')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Los Angeles')).toBeInTheDocument();
});
