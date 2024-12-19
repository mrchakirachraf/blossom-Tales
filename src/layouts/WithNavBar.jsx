import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const WithNavbar = () => (
  <>
    <NavBar />
    <main>
      <Outlet />
    </main>
  </>
);

export default WithNavbar;
