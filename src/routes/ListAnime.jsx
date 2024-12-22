import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import AnimeList from "../components/AnimeList";

const ListeAnime = () => {
  const [apiLink, setApiLink] = useState("");

  return (
    <div>
      <div className={`hidden lg:block`}>
        <img 
            src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=B06D6D&bg=FFFFFF&tb=1&s=143" 
            alt="Cursive fonts" 
        />
      </div>
      <p className="mt-10 text-xl text-center text-black0.5 font-bold mb-4">
        Every anime is a journey to a new world. Let your adventure begin here.
      </p>
      <Filter onLinkChange={setApiLink} />
      <AnimeList link={apiLink} />
    </div>
  );
};

export default ListeAnime;
