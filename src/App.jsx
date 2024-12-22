import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavbar from './layouts/WithNavBar';
import WithoutNavbar from './layouts/WithoutNavBar';
import BlossomTales from './routes/BlossomTales';
import SignIn from './routes/SignIn';
import AnimeSearch from './routes/AnimeSearch';
import HomePage from './routes/HomePage';
import AnimeDescription from './routes/AnimeDescription';
import ListeAnime from './routes/ListAnime';










import "./App.css"
import "./tailwind.css"

const App = () => (
  <Router>
    <Routes>

      {/* Pages with Navbar */}
      <Route element={<WithNavbar />}>
        <Route path='/anime-search' element={<AnimeSearch />} />
        <Route path='/home-page' element={ <HomePage /> } />
        <Route path='/description-page/:id' element={ <AnimeDescription /> }/>
        <Route path='/list-anime' element={ <ListeAnime /> }/>
        
      </Route>
      {/* Pages without Navbar */}
      <Route element={<WithoutNavbar />}>
        <Route path="" element={<BlossomTales />} />
        <Route path="/signin" element={<SignIn />} />

      </Route>

    </Routes>
  </Router>
);

export default App;
