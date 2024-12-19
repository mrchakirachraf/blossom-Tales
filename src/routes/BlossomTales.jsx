import React from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import "../styles/BlossomTales.css"
import { Link } from 'react-router-dom';


const BlossomTales = () => {
  let AnimeListBtnProps = {
    class : "btn-purple",
    text : "Anime List"
  }
  let signInBtnProps = {
    class : "btn-purple",
    text : "Sign in"
  }

  return (
    <div className="blossom-tales-container">
      <div className="overlay">
        <div>
          
          <div id="logo">
            <img style={{width : "80%"}} src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=FFF7F7&bg=FFFFFF&tb=1&s=143" alt="Cursive fonts"></img>
          </div>
          <p className="subtitle">
            Welcome to Blossom Tales 🌸 <br />
            Embark on a journey through the captivating world of anime with Blossom Tales, 
            your go-to destination for discovering and exploring anime gems!
          </p>
          

          {/* Search Section */}
          <div style={{width : "100%"}}>
            <SearchBar></SearchBar>
          </div>

          <div className="button-group">
            <Link to="/anime-list">
              <Button {...AnimeListBtnProps}></Button>
            </Link>
            <Link to="/signin">
              <Button {...signInBtnProps}></Button>
            </Link>
          </div>
        </div>

        {/* to make the overlay text be placed left */}
        <div></div>
      </div>
    </div>
  );
};

export default BlossomTales;
