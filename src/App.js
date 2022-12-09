import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

import countriesData from './countries.json';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

import { useState } from 'react';

function App() {

  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="App">
      <Navbar />

      <div className='container'> 
        <div className='row'>
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;