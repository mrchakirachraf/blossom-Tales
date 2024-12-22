import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeListCharacters from "../components/AnimeListCharacters"; // Utilise AnimeList existant
import DescriptionNavigation from "../components/descriptionNavigation";

const AnimeCharacters = () => {
  const { id } = useParams(); // ID de l'anime dans les paramètres de l'URL
  const [link, setLink] = useState("");

  useEffect(() => {
    if (id) {
      // URL pour récupérer les personnages de l'anime spécifique
      setLink(`https://api.jikan.moe/v4/anime/${id}/characters`);
    }
  }, [id]);

  return (
    <div className="text-black">
      {/* Navigation */}
      <DescriptionNavigation activeTab="Characters" />

      {/* Liste des personnages */}
      <h2 className="text-black0.5 text-2xl font-bold text-center mb-10">
        Characters
      </h2>
      <AnimeListCharacters link={link} />
    </div>
  );
};

export default AnimeCharacters;