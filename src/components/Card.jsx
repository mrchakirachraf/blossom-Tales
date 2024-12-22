import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./componentsStyles/Card.module.css";

const Card = ({ image, title, score, id }) => {
  return (
    <Link
      to={`/description-page/${id}`} 
      className={`${styles.pink_border} bg-white px-4 lg:px-2 py-4 flex flex-col justify-evenly items-center w-56 lg:w-80`}
    >
      <div className="w-full h-56 lg:h-72 flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="rounded-2xl h-56 lg:h-72"
        />
      </div>
      <h3 className="text-black text-center font-bold text-md lg:text-xl mt-2">{title}</h3>
      <div className="text-center mt-1">
        <span className="text-black font-bold">{score} </span>
      </div>
    </Link>
  );
};

export default Card;
