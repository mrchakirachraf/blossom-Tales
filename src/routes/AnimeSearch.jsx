import React from "react";
import { useLocation } from "react-router-dom";
import AnimeList from "../components/AnimeList"; 
import styles from "../styles/AnimeSearch.module.css"


const AnimeSearch = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    const link = `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity`;

    return (
        <div className={`relative flex flex-col items-center ${styles.Search_Container}`}>
            <div id={styles.logo}>
                <img src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" alt="Cursive fonts" />
            </div>
            <h2 className="font-bold text-xl my-5">Results for {query} ...</h2>
            <AnimeList link={link}/>
        </div>
    );
};

export default AnimeSearch;
