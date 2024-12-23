import React from "react";
import { useLocation } from "react-router-dom";
import AnimeList from "../components/AnimeList"; 
import styles from "../styles/AnimeSearch.module.css"
import PinkLogo from "../components/PinkLogo";


const AnimeSearch = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    const link = `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity`;

    return (
        <div className={`relative flex flex-col items-center ${styles.Search_Container}`}>
            <PinkLogo />
            <h2 className="font-bold text-2xl my-5">Results for {query} ...</h2>
            <AnimeList link={link}/>
        </div>
    );
};

export default AnimeSearch;
