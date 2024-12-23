import React, { useState } from "react";
import styles from "./componentsStyles/NavBar.module.css";
import SearchBar from "./SearchBar";
import { BsSearch, BsBook, BsPerson } from 'react-icons/bs';
import { useNavigate, Link  } from "react-router-dom";


const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (query.trim()) {
        navigate(`/anime-search?query=${encodeURIComponent(query)}`);
    }
  };
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
            <a>
              <div onClick={toggleSidebar} className={`${styles.SearchIcon}`}><BsSearch size={30} /></div>
              <div className={`${styles.SearchBar}`} ><SearchBar onSearch={handleSearch} /></div>
            </a>
          </li>
          <li>
            <Link to="/list-anime">
              <BsBook size={30} />
              <span className={styles.navItem}>Anime List</span>
            </Link>
          </li>
          <li>
            <Link to="/my-list-fav">
              <BsPerson size={30} />
              <span className={styles.navItem}>My Lists</span>
            </Link>
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
        <Link to={"/home-page"}>
          <img
            src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        <button className={styles.searchIcon}>
        </button>
        <div className={styles.topLine}></div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><SearchBar onSearch={handleSearch} /></li>
            <li><Link to="/list-anime">Anime list</Link></li>
            <li><Link to="/my-list-fav">My Lists</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
