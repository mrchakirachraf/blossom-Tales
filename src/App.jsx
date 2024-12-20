import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavbar from './layouts/WithNavBar';
import WithoutNavbar from './layouts/WithoutNavBar';
import Page1 from './routes/Page1';
import BlossomTales from './routes/BlossomTales';
import SignIn from './routes/SignIn';
import "./App.css"
import "./tailwind.css"

const App = () => (
  <Router>
    <Routes>

      {/* Pages with Navbar */}
      <Route element={<WithNavbar />}>
        <Route path="/page1" element={<Page1 />} />
        
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
