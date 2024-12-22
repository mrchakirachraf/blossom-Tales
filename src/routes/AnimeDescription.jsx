import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../styles/AnimeDescription.module.css";
import Button from '../components/Button';

const AnimeDescription = () => {
  const { id } = useParams(); // Get the mal_id from the URL params
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`); // Use Jikan API with the anime ID
        const data = await response.json();
        setAnime(data.data); // Store the fetched anime data in the state
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimeDetails(); // Fetch anime details whenever the id changes
  }, [id]);

  if (isLoading) {
    return <p>Loading anime details...</p>;
  }

  if (!anime) {
    return <p>Anime not found.</p>;
  }

  return (
    <div className={` text-black ${styles.description_container}`}>
        <div className={styles.buttonsGroupe}>
            
        </div>
        <h2>{anime.title}</h2>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <p>{anime.synopsis}</p>
        <p>Score: {anime.score} ⭐</p>
        <p>Genres: {anime.genres.map(genre => genre.name).join(', ')}</p>
        <p>Aired: {anime.aired.string}</p>
        {/* Add more anime details as needed */}
    </div>
  );
};

export default AnimeDescription;
