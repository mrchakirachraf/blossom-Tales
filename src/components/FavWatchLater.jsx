import React, { useState, useEffect } from "react";
import styles from "./componentsStyles/FavWatchLater.module.css";

const FavWatchLater = ({id}) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    // Load status from localStorage
    useEffect(() => {
        const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
        const watchLaterList =
        JSON.parse(localStorage.getItem("watchLater")) || [];

        setIsFavorited(favoriteList.includes(id));
        setIsWatchLater(watchLaterList.includes(id));
    }, [id]);

    // Toggle Favorite
    const toggleFavorite = () => {
        const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favoriteList.includes(id)) {
        const updatedList = favoriteList.filter((animeId) => animeId !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedList));
        setIsFavorited(false);
        } else {
        favoriteList.push(id);
        localStorage.setItem("favorites", JSON.stringify(favoriteList));
        setIsFavorited(true);
        }
    };

    // Toggle Watch Later
    const toggleWatchLater = () => {
        const watchLaterList =
        JSON.parse(localStorage.getItem("watchLater")) || [];
        if (watchLaterList.includes(id)) {
        const updatedList = watchLaterList.filter((animeId) => animeId !== id);
        localStorage.setItem("watchLater", JSON.stringify(updatedList));
        setIsWatchLater(false);
        } else {
        watchLaterList.push(id);
        localStorage.setItem("watchLater", JSON.stringify(watchLaterList));
        setIsWatchLater(true);
        }
    };

    return(
        <div>
            {/* Add to Favorites */}
            <button
              className={`px-4 py-2 rounded-full ${styles.FW_Buttons} ${
                isFavorited ? "bg-mainPink text-white" : "bg-[#d9d9d9] text-black"
              }`}
              onClick={toggleFavorite}
            >
              <i className="fas fa-heart"></i>
            </button>
            <span>&nbsp;&nbsp;&nbsp;</span>
            {/* Add to Watch Later */}
            <button
              className={`px-4 py-2 rounded-full ${styles.FW_Buttons} ${
                isWatchLater ? "bg-mainPink text-white" : "bg-[#d9d9d9] text-black"
              }`}
              onClick={toggleWatchLater}
            >
              <i className="fas fa-clock"></i>
            </button>
          </div>
    );
};

export default FavWatchLater;