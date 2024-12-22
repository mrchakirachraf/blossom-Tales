import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/MoreInfos.module.css";
import DescriptionNavigation from "../components/DescriptionNavigation";

const MoreInfos = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data); // Stocke les détails de l'anime
      } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'anime:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimeDetails(); // Appelle la fonction pour récupérer les détails
  }, [id]);

  if (isLoading) {
    return <p className="alertInfo">Chargement des détails de l'anime...</p>;
  }

  if (!anime) {
    return (
      <p className="alertDanger w-10/12 text-center h-screen">
        Anime introuvable.
      </p>
    );
  }

  return (
    <div className={`text-black ${styles.description_container}`}>
      {/* Logo */}
      <div className={`${styles.removeOnMobile} mb-10`} id={styles.logo}>
        <img 
          src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
          alt="Cursive fonts" 
        />
      </div>

      {/* Titre et navigation */}
      <div className={`${styles.removeOnMobile} relative mb-10 justify-center mx-24`}>
        <h2 className="text-black0.5 text-center text-3xl font-bold">
          {anime.title.toUpperCase()}
        </h2>
      </div>

      <DescriptionNavigation />

      {/* Section Desktop */}
      <div className={`p-6 mb-10 mx-8 lg:mx-24 lg:flex flex-row justify-center items-center gap-10 text-justify ${styles.removeOnMobile}`}>
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className="rounded-lg w-1/2"
        />
        <div className="flex flex-col justify-evenly gap-8 w-1/2">
          <h3 className="text-black0.5 text-2xl font-bold text-center ">More Infos</h3>
          <div className="text-xl">
            {anime.background ? (
              <p>{anime.background}</p>
            ) : (
              <p className="italic">Aucune information supplémentaire disponible.</p>
            )}
          </div>
        </div>
      </div>

      {/* Section Mobile */}
      <div
        className={`flex flex-col justify-center items-center text-justify gap-6 p-4 ${styles.showOnMobile}`}
      >
        <div
          style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            overflow: 'hidden',
            width: '100%',
            height: '500px',
          }}
          className="flex flex-col justify-center items-center"
        >
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255,255,255,0.5)',
              pointerEvents: 'none',
              zIndex: 0,
              borderRadius: '10px',
            }}
          ></div>
          
          {/* Anime Image */}
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            style={{
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              position: 'absolute',
              top: 0,
              left: 'auto',
              zIndex: 0,
            }}
          />
        </div>
        <h3 className="text-black0.5 text-2xl font-bold text-center">More Infos</h3>
        <div className="text-lg">
          {anime.background ? (
            <p>{anime.background}</p>
          ) : (
            <p className="italic">Aucune information supplémentaire disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfos;
