import React from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import styles from "../styles/BlossomTales.module.css";
import { Link, useNavigate  } from "react-router-dom";

const BlossomTales = () => {

    const navigate = useNavigate();

    const handleSearch = (query) => {
      if (query.trim()) {
          navigate(`/anime-search?query=${encodeURIComponent(query)}`);
      }
    };

    return (
        <div className={styles.blossom_tales_container}>
            <div className={styles.overlay}>
                <div>
                    <div id={styles.logo}>
                        <img
                            src="https://see.fontimg.com/api/rf5/axo9R/NWY4ZDEwYzM0YjUxNDI1N2FjMjMzZWUzOWUxNDlhNmUudHRm/Qmxvc3NvbSBUYWxlcw/lucky-sunshine.png?r=fs&h=143&w=1000&fg=FFF7F7&bg=FFFFFF&tb=1&s=143"
                            alt="Cursive fonts"
                        />
                    </div>
                    <p className={styles.subtitle}>
                        Welcome to Blossom Tales 🌸 <br />
                        Embark on a journey through the captivating world of anime with Blossom Tales,
                        your go-to destination for discovering and exploring anime gems!
                    </p>

                    {/* Search Section */}
                    <div style={{ width: "100%" }}>
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    <div className={styles.button_group}>
                        <Link to="/home-page">
                            <Button style={{}} class="btn_purple  w-28 lg:w-52" text="Anime List" />
                        </Link>
                        <Link to="/signin">
                            <Button style={{}} class="btn_purple  w-28 lg:w-52" text="Sign in" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlossomTales;
