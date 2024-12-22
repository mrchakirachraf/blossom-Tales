import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavbar from './layouts/WithNavBar';
import WithoutNavbar from './layouts/WithoutNavBar';
import Page1 from './routes/Page1';
import BlossomTales from './routes/BlossomTales';
import SignIn from './routes/SignIn';
import AnimeSearch from './routes/AnimeSearch';
import HomePage from './routes/HomePage';
import AnimeDescription from './routes/AnimeDescription';










import "./App.css"
import "./tailwind.css"
import ListeAnime from './routes/ListAnime';

const App = () => (
  <Router>
    <Routes>

      {/* Pages with Navbar */}
      <Route element={<WithNavbar />}>
        <Route path="/page1" element={<Page1 />} />
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
