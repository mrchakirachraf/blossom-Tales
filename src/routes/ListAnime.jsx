import React, { useState, useEffect } from "react";
import styles from "../styles/ListeAnime.module.css";
import Filters from "../components/Filters";
import AnimeList from "../components/AnimeList";

const ListeAnime = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterParams, setFilterParams] = useState({});
  const [link, setLink] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    updateLink(query, filterParams);
  };

  const handleFilterChange = (filters) => {
    setFilterParams(filters);
    updateLink(searchQuery, filters);
  };

  const updateLink = (query, filters) => {
    const baseUrl = "https://api.jikan.moe/v4/anime";
    const searchParam = query ? `q=${query}` : "";
    const filterParam = Object.keys(filters)
      .map((key) => `${key}=${filters[key]}`)
      .filter((param) => param !== "")
      .join("&");
    const fullLink = `${baseUrl}?${searchParam}&${filterParam}&order_by=popularity`;

    console.log("Updated Link:", fullLink); // Vérifiez si l'URL est correcte
    setLink(fullLink);
  };

  return (
    <div className={styles.ListeAnime_container}>
      <div id={styles.logo}>
        <img
          src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143"
          alt="Cursive fonts"
        />
      </div>
      <div>
        <h2 className={styles.currentSeason}>
          Every anime is a journey to a new world, let your adventure begin here.
        </h2>
      </div>

      <Filters
        setSeason={(season) => handleFilterChange({ ...filterParams, season })}
        setYear={(year) => handleFilterChange({ ...filterParams, year })}
        setCategory={(category) => handleFilterChange({ ...filterParams, category })}
        onFilterChange={handleFilterChange}
      />

      <div className="flex flex-col justify-center mt-8">
        {searchQuery || Object.keys(filterParams).length ? (
          <h2 className={styles.currentSeason}>
            Search Results {searchQuery && `for "${searchQuery}"`}
          </h2>
        ) : (
          <h2 className={styles.currentSeason}>Top-rated Anime</h2>
        )}
        <AnimeList link={link} />
      </div>
    </div>
  );
};

export default ListeAnime;
