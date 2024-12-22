import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import AnimeStaffList from "../components/AnimeStaffList";
import DescriptionNavigation from "../components/DescriptionNavigation";
import FavWatchLater from "../components/FavWatchLater";

const Staff = () => {
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
        Anime not found.
        </p>
    );
    }
    
    return (
        <div>
            <div className={`hidden lg:block mb-10`}>
                <img 
                    src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
                    alt="Cursive fonts" 
                />
            </div>
            <div className={` relative mb-10 justify-center mx-24`}>
                <h2 className=' text-black0.5 text-center text-3xl font-bold'>{anime.title.toUpperCase()}</h2>
                <div className={`absolute top-0 right-0 justify-center`}>
                    <FavWatchLater id={anime.mal_id}/>
                </div>
            </div>
            <DescriptionNavigation />
            <AnimeStaffList id={id} />
        </div>
        
    );



};

export default Staff;