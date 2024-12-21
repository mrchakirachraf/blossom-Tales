import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const WithNavbar = () => (
  <>
    <NavBar />
    <div style={{position: "relative"}} >
      <Outlet />
    </div>
    <Footer />
  </>
);

export default WithNavbar;
