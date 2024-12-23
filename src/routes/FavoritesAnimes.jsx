import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import PinkLogo from "../components/PinkLogo";
import {  Link  } from "react-router-dom";

const FavouritesAnimes = () => {
  const [favorites, setFavorites] = useState([]);
  const [animeDetails, setAnimeDetails] = useState([]);

  // Load favorites from local storage
  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoriteIds);
  }, []);

  // Fetch anime details for favorites
  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) return; // No favorites, skip fetch
      try {
        const animePromises = favorites.map((id) =>
          fetch(`https://api.jikan.moe/v4/anime/${id}`).then((res) => res.json())
        );
        const animeResponses = await Promise.all(animePromises);
        const details = animeResponses.map((response) => response.data); // Extract anime data
        setAnimeDetails(details);
      } catch (error) {
        console.error("Error fetching favorite anime details:", error);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <div className="text-black0.5 " style={{ padding: "20px" }}>
        <PinkLogo/>
        <div className="relative mx-10 lg:mx-24">
            <h1 className=' text-black0.5 text-center text-3xl font-bold mb-10'>My Favorites</h1>
            <div className={`absolute top-0 right-0 justify-center`}>
                <div>
                    <Link to="/my-list-fav">
                        <button className={`px-4 py-2 rounded-full
                        bg-mainPink text-white`}>
                            <i className="fas fa-heart"></i>
                        </button>
                    </Link>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <Link to="/my-watch-later">
                        <button className={`px-4 py-2 rounded-full
                        bg-[#D9D9D9] text-black0.5`}>
                            <i className="fas fa-clock"></i>
                        </button> 
                    </Link>
                </div>
            </div>

        </div>
        
      {animeDetails.length === 0 ? (
        <p className="alertDanger text-center" >No favorites added yet.</p>
      ) : (
        
        <div className="mx-10 lg:mx-24" >
            {animeDetails.map((item) => (
                <div>
                    <Card
                        key={item.mal_id || item.entry?.mal_id}
                        id={item.mal_id || item.entry?.mal_id}
                        image={item.images?.jpg?.large_image_url || item.entry?.images?.jpg?.large_image_url}
                        title={item.title || item.entry?.title}
                        score={item.score ? `${item.score} ⭐` : ""}
                    />
                </div>
            ))
            }
        </div>
          
      )}
    </div>
  );
};

export default FavouritesAnimes;
