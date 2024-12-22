import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeListCharacters from "../components/AnimeListCharacters"; // Utilise AnimeList existant
import DescriptionNavigation from "../components/descriptionNavigation";
import PinkLogo from "../components/PinkLogo";

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
      <PinkLogo />
      <h2 className=' text-black0.5 text-center text-3xl font-bold mb-10'>Characters</h2>
      {/* Navigation */}
      <DescriptionNavigation id={id}/>
      {/* Liste des personnages */}
      <AnimeListCharacters link={link} />
    </div>
  );
};

export default AnimeCharacters;
