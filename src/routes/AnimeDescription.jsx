import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/AnimeDescription.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DescriptionNavigation from "../components/descriptionNavigation";
import FavWatchLater from "../components/FavWatchLater";

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
    return <p className="alertInfo">Loading anime details...</p>;
  }

  if (!anime) {
    return (
      <p className="alertDanger w-10/12 text-center h-screen">
        Details not found.
      </p>
    );
  }

  return (
    <div className={` text-black ${styles.description_container}`}>
        
        <div className={`${styles.removeOnMobile} mb-10`} id={styles.logo}>
          <img 
              src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
              alt="Cursive fonts" 
          />
        </div>
        
        <div className={`${styles.removeOnMobile} relative mb-10 justify-center mx-24`}>
          <h2 className=' text-black0.5 text-center text-3xl font-bold'>{anime.title.toUpperCase()}</h2>
          <div className={`absolute top-0 right-0 justify-center`}>
            <FavWatchLater id={anime.mal_id}/>
          </div>
        </div>

        <DescriptionNavigation id={id}/>
        
        <div className={`${styles.removeOnMobile} p-6 mb-10 mx-8 lg:mx-24 lg:flex flex-row justify-center items-center gap-10 text-justify`}>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          <div className='flex flex-col justify-evenly gap-8'>
            <h3 className='text-black0.5 text-2xl font-bold text-center'>Synopsis</h3>
            <div className='text-xl'>
              {anime.synopsis}
            </div>
          </div>
        </div>

        <div className={`p-6 mx-0 lg:mx-8 lg:hidden flex-col justify-center items-center gap-10 text-justify ${styles.showOnMobile}`}>
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
                objectFit: 'fit',
                borderRadius: '10px',
                position: 'absolute',
                top: 0,
                left: 'auto',
                zIndex: 0,
              }}
            />
          </div>
          <h2 className="text-black0.5 text-center text-2xl font-bold">
            {anime.title.toUpperCase()}
          </h2>
        </div>

        <div className={`${styles.showOnMobile} relative flex-row justify-evenly mb-10`}>
          <div className={`flex items-center justify-center gap-6`}>
            <p className={`font-bold inline text-center align-middle`} >{anime.score} ⭐</p>
            <FavWatchLater id={anime.mal_id}/>
          </div>
        </div>


        <div className=' mb-10 bg-[#D9D9D9] text-black0.5 text-center lg:text-left rounded-lg p-8 mx-8 lg:mx-24 flex flex-col items-center lg:flex-row lg:justify-between'>
          <div className='w-5/12'>
            <p><strong>Source:</strong> {anime.source}</p>
            <p><strong>Status:</strong> {anime.status}</p>
            <p><strong>Broadcast:</strong> {anime.broadcast.string}</p>
            <p><strong>Genres: </strong>{anime.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          <div className='w-5/12'>
            <p><strong>Aired: </strong>{anime.aired.string}</p>
            <p><strong>Rank: </strong>{anime.rank}</p>
            <p><strong>Episodes: </strong>{anime.episodes}</p>
            <p className={`${styles.removeOnMobile}`} ><strong>Score: </strong>{anime.score} ⭐</p>
          </div>
        </div>
        
        

        <h3 className={` lg:hidden text-black0.5 text-2xl font-bold text-center mb-10`}>Synopsis</h3>
        <div className={`${styles.showOnMobile} text-justify mx-8 mb-10`}>
          {anime.synopsis}
        </div>
        

        <h2 className=' mb-10 text-black0.5 text-2xl font-bold text-center'>Trailer</h2>
        <div className='mb-10 bg-[#D9D9D9] rounded-lg px-8 py-2 mx-8 lg:mx-24 flex flex-row justify-center'>
          <div className=' border-mainPink border-4 w-full lg:w-fit'>
            <iframe className={`${styles.trailerIframe}`} src={anime.trailer.embed_url}></iframe>
          </div>
        </div>


    </div>
  );
};

export default AnimeDescription;
