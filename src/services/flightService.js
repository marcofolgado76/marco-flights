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
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching the airport data:', error);
    return null;
  }
}
