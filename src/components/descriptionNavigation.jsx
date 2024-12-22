import React, { useEffect, useState } from "react";
import styles from "./componentsStyles/descriptionNavigation.module.css";
import Button from "./Button";
import { Link  } from "react-router-dom";


const DescriptionNavigation = ({id}) => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Déterminer la page active à partir de l'URL actuelle
    const path = window.location.pathname.toLowerCase(); // Ex: "/details", "/characters"
    if (path.includes("description-page")) {
      setActivePage("details");
    } else if (path.includes("characters")) {
      setActivePage("characters");
    } else if (path.includes("staff-page")) {
      setActivePage("staff");
    } else if (path.includes("recommendations")) {
      setActivePage("recommendations");
    } else if (path.includes("more-info")) {
      setActivePage("more-info");
    }
  }, []);

  return (
    <div className={`mt-10 lg:mx-24 lg:mt-0 mb-10 flex flex-row flex-wrap justify-between items-center gap-8 ${styles.buttonsGroupe}`}>
      <Link to={`/description-page/${id}`}>
        <Button
          class={`${activePage === "details" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
          text="Details"
        />
      </Link>
      <Link to={`/characters/${id}`}>
        <Button
          class={`${activePage === "characters" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
          text="Characters"
        />
      </Link>
      <Link to={`/staff-page/${id}`}>
        <Button
          class={`${activePage === "staff" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
          text="Staff"
        />
      </Link>
      <Link to={`/recommendations-page/${id}`}>
        <Button
          class={`${activePage === "recommendations" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
          text="Recommendations"
        />
      </Link>
      <Link to={`/more-info/${id}`}>
        <Button
          class={`${activePage === "more-info" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
          text="More Infos"
        />
      </Link>
    </div>
  );
};

export default DescriptionNavigation;
