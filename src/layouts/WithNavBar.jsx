import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const WithNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour la navbar

  // Fonction pour basculer l'état de la navbar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div
        className="main-content"
        style={{
          marginLeft: isSidebarOpen ? '250px' : '80px', // Ajuste en fonction de la navbar
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default WithNavbar;
