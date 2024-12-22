import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const WithNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width

  // Function to toggle the sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Update windowWidth when the window is resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the margin-left based on screen width
  const marginLeft = windowWidth < 1024 ? '0px' : isSidebarOpen ? '250px' : '80px';

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div
        className="main-content"
        style={{
          marginLeft, // Apply the calculated margin-left
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default WithNavbar;
