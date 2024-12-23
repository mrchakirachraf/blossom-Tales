import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/MoreInfos.module.css";
import DescriptionNavigation from "../components/descriptionNavigation";
import PinkLogo from "../components/PinkLogo";

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

    fetchAnimeDetails(); 
  }, [id]);

  if (isLoading) {
    return <p className="alertInfo">Loading anime details...</p>;
  }

  if (!anime) {
    return (
      <p className="alertDanger text-center">
       Anime not found.
      </p>
    );
  }

  return (
    <div className={`text-black ${styles.description_container}`}>
      {/* Logo */}
      <PinkLogo />


      {/* Titre et navigation */}
      <div className={`${styles.removeOnMobile} relative mb-10 justify-center mx-24`}>
        <h2 className="text-gray-600 text-center text-3xl font-bold">
            More Infos
        </h2>
      </div>

      <DescriptionNavigation id={id} />

      {/* Section Desktop */}
      <div className={`p-6 mb-10 mx-8 lg:mx-24 lg:flex flex-row justify-center items-center gap-10 text-justify ${styles.removeOnMobile}`}>
        <img className="rounded-2xl"
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
        />
        <div className="flex flex-col justify-evenly gap-8 ">
          <div className="text-xl">
            {anime.background ? (
              <p>{anime.background}</p>
            ) : (
              <p className="italic">No additional information available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Section Mobile */}
      <div
        className={` flex-col justify-center items-center text-justify gap-6 p-4 ${styles.showOnMobile}`}
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
            <p className="italic">No additional information available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreInfos;
