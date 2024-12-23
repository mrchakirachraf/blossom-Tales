import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import AnimeList from "../components/AnimeList";
import PinkLogo from "../components/PinkLogo";

const ListeAnime = () => {
  const [apiLink, setApiLink] = useState("");

  return (
    <div>
      <PinkLogo />
      <p className="mt-10 text-2xl text-center text-gray-600 font-bold mb-10">
        Every anime is a journey to a new world. Let your adventure begin here.
      </p>
      <Filter onLinkChange={setApiLink} />
      <AnimeList link={apiLink} />
    </div>
  );
};

export default ListeAnime;
