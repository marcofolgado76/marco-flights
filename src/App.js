import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
/* import SearchResults from './pages/SearchResults';
import FlightDetails from './pages/FlightDetails'; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*  <Route path="/results" element={<SearchResults />} />
        <Route path="/flight/:id" element={<FlightDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
