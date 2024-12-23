import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

const AnimeStaffList = ({ id }) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  
    useEffect(() => {
        const fetchAnimeStaff = async () => {
          try {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/staff`); // Use Jikan API with the anime ID
            const data = await response.json();
            setAnime(data.data); // Store the fetched anime data in the state
          } catch (error) {
            console.error("Error fetching anime Staff:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchAnimeStaff(); // Fetch anime Staff whenever the id changes
      }, [id]);

    if (isLoading) {
        return <p className="alertInfo">Loading anime Staff...</p>;
    }

    if (!anime.length) {
        return <p className="alertDanger text-center ">Anime not found.</p>;
    }

    return (
      <div className="my-10 flex flex-row flex-wrap justify-center gap-8">
        {anime.map((item) => (
          <CharacterCard
            key={item.person.mal_id}
            id={item.person.mal_id}
            image={item.person.images.jpg.image_url}
            name={item.person.name}
            role={item.positions.map((position, index) => (
              index < item.positions.length - 1 ? `${position}, ` : position
            )).join('')}
          />
        ))}
      </div>

    );
};

export default AnimeStaffList;
