import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import AnimeStaffList from "../components/AnimeStaffList";
import DescriptionNavigation from "../components/descriptionNavigation";
import PinkLogo from "../components/PinkLogo";

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
        <p className="alertDanger text-center">
        Staff not found.
        </p>
    );
    }
    
    return (
        <div>
            <PinkLogo />
            <h2 className=' text-gray-600 text-center text-3xl font-bold mb-10'>Staff</h2>
            <DescriptionNavigation id={id} />
            <AnimeStaffList id={id}/>
        </div>
        
    );



};

export default Staff;