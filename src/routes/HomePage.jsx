import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import AnimeSlider from "../components/AnimeSlider";
import AnimeList from "../components/AnimeList";
import PinkLogo from "../components/PinkLogo";

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
            <PinkLogo />
            <div>
                <AnimeSlider />
            </div>
            <div className={`${styles.currentSeason} mt-5`}>
                <h2>{currentSeason}</h2>
            </div>
            <div className="flex flex-col justify-center">
                <AnimeList link={seasonLink} />
            </div>
        </div>
    );
};

export default HomePage;
