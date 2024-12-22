import React, { useState, useEffect } from "react";
import styles from "../styles/Filters.module.css";

const Filters = ({ season, setSeason, year, setYear, category, setCategory }) => {
  const [genres, setGenres] = useState([]);
  const seasons = ["spring", "summer", "fall", "winter"];

  // Fonction pour récupérer les genres depuis l'API
  const fetchGenres = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      const data = await response.json();
      const genresList = data.data.flatMap((anime) =>
        anime.genres.map((genre) => genre.name)
      );
      const uniqueGenres = [...new Set(genresList)];
      setGenres(uniqueGenres);
    } catch (error) {
      console.error("Erreur lors de la récupération des genres :", error);
    }
  };

  // Appeler fetchGenres au montage du composant
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className={styles.filters}>
      {/* Season Filters */}
      <div className={styles.seasonFilters}>
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => setSeason(s)}
            className={`${styles.seasonButton} ${
              season === s ? styles.active : ""
            }`}
          >
            <img src={`/${s}.png`} alt={s} className={styles.seasonIcon} />
          </button>
        ))}
      </div>

      {/* Year Filter */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className={styles.yearDropdown}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i} value={new Date().getFullYear() - i}>
            {new Date().getFullYear() - i}
          </option>
        ))}
      </select>

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.categoryDropdown}
      >
        <option value="">Select a category</option>
        {genres.length > 0 ? (
          genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))
        ) : (
          <option disabled>Loading genres...</option>
        )}
      </select>
    </div>
  );
};

export default Filters;
