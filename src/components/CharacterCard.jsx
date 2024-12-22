import React from "react";
import styles from "./componentsStyles/Card.module.css"; 

const CharacterCard = ({ id, image, name, role }) => {
  return (
    <div
      className={`${styles.pink_border} bg-white px-4 lg:px-2 py-4 flex flex-col justify-evenly items-center w-56 lg:w-80`}
    >
      <div className="w-full h-56 lg:h-72 flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="rounded-2xl h-56 lg:h-72"
        />
      </div>
      <h3 className="text-black text-center font-bold text-md lg:text-xl mt-2">{name}</h3>
      <div className="text-center mt-1">
        <span className="text-gray-600 font-medium">{role}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
