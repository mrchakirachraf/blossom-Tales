import React, { useState, useEffect } from "react";
import Card from "./Card";

const AnimeList = ({ link }) => {
    const [anime, setAnime] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAnime = async () => {
            if (!link) return;

            setIsLoading(true);
            try {
                const response = await fetch(link);
                const data = await response.json();
                setAnime(data.data || []); // Handle the fetched data
            } catch (error) {
                console.error("Error fetching anime list:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAnime();
    }, [link]); // Refetch whenever the link changes

    if (isLoading) {
        return <p className="alertInfo">Loading anime...</p>;
    }

    if (!anime.length) {
        return <p className="alertDanger w-10/12 text-center h-screen">No anime found. Try another search.</p>;
    }

    return (
        <div className="my-10 flex flex-row flex-wrap justify-center gap-8">
          {anime.map((item) => (
              <Card
                key={item.mal_id || item.entry?.mal_id}
                id={item.mal_id || item.entry?.mal_id}
                image={item.images?.jpg?.large_image_url || item.entry?.images?.jpg?.large_image_url}
                title={item.title || item.entry?.title}
                score={item.score ? `${item.score} ⭐` : ""}
              />
          ))}
        </div>
    );
};

export default AnimeList;
