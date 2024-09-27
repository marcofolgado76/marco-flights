import axios from 'axios';

export async function searchAirport(query) {
  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${query}&locale=en-US`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching the airport data:', error);
    return null;
  }
}

export async function searchFlight({
  originSkyId,
  destinationSkyId,
  originEntityId,
  destinationEntityId,
  date,
  returnDate,
  cabinClass = 'economy',
  adults,
  children,
  sortBy = 'best',
  currency = 'USD',
  countryCode = 'US',
  limit= 8,
}) {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
    params: {
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      date,
      returnDate,
      cabinClass,
      adults: adults.toString(),
      childrens: children.toString(),
      sortBy,
      limit,
      currency,
      countryCode,
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching flight data:', error);
    return null;
  }
}
