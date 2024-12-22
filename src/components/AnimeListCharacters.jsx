import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"; // Nouveau composant de carte

const AnimeListCharacters = ({ link }) => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAnime = async () => {
      if (!link) return;

      setIsLoading(true);
      try {
        const response = await fetch(link);
        const data = await response.json();
        setAnime(data.data || []); // Récupération des personnages
      } catch (error) {
        console.error("Error fetching anime list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [link]);

  if (isLoading) {
    return <p className="alertInfo">Loading characters...</p>;
  }

  if (!anime.length) {
    return <p className="alertDanger w-10/12 text-center h-screen">No characters found.</p>;
  }

  return (
    <div className="my-10 flex flex-row flex-wrap justify-center gap-8">
      {anime.map((item) => (
        <CharacterCard
          key={item.character.mal_id}
          id={item.character.mal_id}
          image={item.character.images.jpg.image_url}
          name={item.character.name}
          role={item.role}
        />
      ))}
    </div>
  );
};

export default AnimeListCharacters;
