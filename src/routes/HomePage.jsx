import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import AnimeSlider from "../components/AnimeSlider";
import AnimeList from "../components/AnimeList";

const HomePage = () => {
    const [currentSeason, setCurrentSeason] = useState('');
    const [seasonLink, setSeasonLink] = useState('');

    // Calculate the current season
    useEffect(() => {
        const getSeason = () => {
            const month = new Date().getMonth() + 1; // Month is zero-indexed
            const year = new Date().getFullYear();

            let season = '';
            if (month >= 1 && month <= 3) {
                season = 'winter';
            } else if (month >= 4 && month <= 6) {
                season = 'spring';
            } else if (month >= 7 && month <= 9) {
                season = 'summer';
            } else {
                season = 'fall';
            }

            setCurrentSeason(`${season.charAt(0).toUpperCase() + season.slice(1)} ${year}`);
            setSeasonLink(`https://api.jikan.moe/v4/seasons/${year}/${season}`);
        };

        getSeason();
    }, []);

    return (
        <div className={`${styles.HomePage_container}`}>
            <div id={styles.logo}>
                <img 
                    src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
                    alt="Cursive fonts" 
                />
            </div>
            <div>
                <AnimeSlider />
            </div>
            <div className={`${styles.currentSeason} mt-5`}>
                <h2>{currentSeason}</h2>
            </div>
            <AnimeList link={seasonLink} />
        </div>
    );
};

export default HomePage;
