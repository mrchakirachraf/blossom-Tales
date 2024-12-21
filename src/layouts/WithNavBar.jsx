import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const WithNavbar = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default WithNavbar;
