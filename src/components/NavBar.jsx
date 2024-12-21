import React, { useState } from "react";
import styles from "./componentsStyles/NavBar.module.css";
import { BsSearch, BsBook, BsPerson } from 'react-icons/bs';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar Navigation */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ""}`}>
        <div className={styles.top}>
          <button id="btn" className={styles.hamburger} onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <ul>
          <li>
            <a href="#">
              <BsSearch size={30} />
              <span className={styles.navItem}>Search</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsBook size={30} />
              <span className={styles.navItem}>Anime List</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BsPerson size={30} />
              <span className={styles.navItem}>My List</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${styles.navbar} ${styles.mobileNav}`}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.hamburger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            fill="#E7B3C0"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        <img
          src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143"
          alt="Logo"
          className={styles.logo}
        />
        <button className={styles.searchIcon}>
          <BsSearch size={30} color="#E7B3C0" />
        </button>
        <div className={styles.topLine}></div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">Anime list</a></li>
            <li><a href="#">My List</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
