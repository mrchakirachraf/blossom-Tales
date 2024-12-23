import React, { useState, useEffect } from "react";
import styles from "./componentsStyles/Filter.module.css"

const Filter = ({ onLinkChange }) => {
  // Determine the current season based on the current month
  const getCurrentSeason = () => {
    const month = new Date().getMonth() + 1; // Get current month (1-12)
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "fall";
    return "winter";
  };

  const [year, setYear] = useState(new Date().getFullYear().toString()); // Default to the current year
  const [season, setSeason] = useState(getCurrentSeason()); // Default to the current season

  const seasons = [
    { name: "Winter", value: "winter" },
    { name: "Spring", value: "spring" },
    { name: "Summer", value: "summer" },
    { name: "Fall", value: "fall" },
  ];
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

  // Update the API link dynamically when year or season changes
  useEffect(() => {
    const link = `https://api.jikan.moe/v4/seasons/${year}/${season}`;
    onLinkChange(link);
  }, [year, season, onLinkChange]);

  return (
    <div className="filter-container text-center flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-4">
        {/* Season Buttons */}
        {seasons.map((s) => (
          <button
            key={s.value}
            className={` ${styles.seasonButton} p-3 rounded-full text-xl ${
              season === s.value ? "bg-mainPink" : "bg-[#d9d9d9]"
            }`}
            onClick={() => setSeason(s.value)}
          >
            <img src={`${s.value}.png`} alt={s.value} className={styles.seasonIcon}/>
          </button>
        ))}
      </div>

      <div style={{height:'3rem'}} className="flex justify-center items-center gap-4">
        {/* Year Dropdown */}
        <select
          className={`${styles.yearDropdown} text-black0.5 text-xl p-2 rounded-lg`}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="" disabled>
            Select a year
          </option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
