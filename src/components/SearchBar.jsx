import React, { useState } from "react";
import styles from "./componentsStyles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm); // Pass the input value back to the parent
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={styles.search_bar}>
            <input
                type="text"
                className={styles.search_input}
                placeholder="Search by anime title..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className={styles.search_button} onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#E7B3C0">
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
