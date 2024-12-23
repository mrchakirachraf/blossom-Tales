import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import styles from './componentsStyles/AnimeSlider.module.css'; // Import the CSS module

const AnimeSlider = () => {
  const [animeList, setAnimeList] = useState([]);

  // Fetch anime data from Jikan API
  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await response.json();
        setAnimeList(data.data.slice(0, 3)); // Limit to 3 anime
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, []);

  const navigate = useNavigate();

  const handleAnimeClick = (animeId) => {
    navigate(`/description-page/${animeId}`); // Redirect to the anime description page
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Swiper container */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        style={{ zIndex: 1 }}
      >
        {animeList.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <div
              className={styles.animeSlide}
              onClick={() => handleAnimeClick(anime.mal_id)} // Handle click event
            >
              {/* Anime Image */}
              <img
                src={anime.trailer.images.maximum_image_url}
                alt={anime.title}
                className={styles.animeImage}
              />
              {/* Title Overlay */}
              <div className={styles.animeTitleOverlay}>
                <h3>{anime.title}</h3>
              </div>
              {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none', // Ensure Swiper is still functional
                zIndex: -2,
                borderRadius: '10px',
              }}
            >
              <img
                  src={anime.trailer.images.maximum_image_url}
                  alt={anime.title}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'fill',
                    borderRadius: '10px',
                  }}
                />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor : 'rgba(0,0,0,0.7)',
                pointerEvents: 'none', // Ensure Swiper is still functional
                zIndex: -1,
                borderRadius: '10px',
              }}
            ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeSlider;
