import React, { useState, useEffect } from "react";
import styles from "./componentsStyles/Filters.module.css";

const Filters = ({ setSeason, setYear, setCategory, onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({ season: "", year: "", category: "" });
  const seasons = ["fall", "summer", "spring", "winter"];

  const fetchGenres = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/genres/anime");
      const data = await response.json();
      setGenres(data.data || []);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    onFilterChange(filters); // Transmettez les filtres combinés
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));

    if (key === "season") setSeason(value);
    if (key === "year") setYear(value);
    if (key === "category") setCategory(value);
  };

  return (
    <div className={styles.filters}>
      {/* Season Filters */}
      <div className={styles.seasonFilters}>
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => updateFilter("season", s)}
            className={`${styles.seasonButton} ${filters.season === s ? styles.active : ""}`}
          >
            <img src={`${s}.png`} alt={s} className={styles.seasonIcon} />
          </button>
        ))}
      </div>

      {/* Year Filter */}
      <select
        value={filters.year}
        onChange={(e) => updateFilter("year", e.target.value)}
        className={styles.yearDropdown}
      >
        <option value="">Select a year</option>
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i} value={new Date().getFullYear() - i}>
            {new Date().getFullYear() - i}
          </option>
        ))}
      </select>

      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => updateFilter("category", e.target.value)}
        className={styles.categoryDropdown}
      >
        <option value="">Select a category</option>
        {genres.length > 0 ? (
          genres.map((genre) => (
            <option key={genre.mal_id} value={genre.name}>
              {genre.name}
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
