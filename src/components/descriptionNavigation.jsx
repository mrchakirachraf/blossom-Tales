import React, { useEffect, useState } from "react";
import styles from "./componentsStyles/descriptionNavigation.module.css";
import Button from "../components/Button";

const DescriptionNavigation = () => {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Déterminer la page active à partir de l'URL actuelle
    const path = window.location.pathname.toLowerCase(); // Ex: "/details", "/characters"
    if (path.includes("description-page")) {
      setActivePage("details");
    } else if (path.includes("characters")) {
      setActivePage("characters");
    } else if (path.includes("relations")) {
      setActivePage("relations");
    } else if (path.includes("recommendations")) {
      setActivePage("recommendations");
    } else if (path.includes("more-infos")) {
      setActivePage("more-infos");
    }
  }, []);

  return (
    <div className={`mt-10 lg:mx-24 lg:mt-0 mb-10 flex flex-row flex-wrap justify-between items-center gap-8 ${styles.buttonsGroupe}`}>
      <Button
        class={`${activePage === "details" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
        text="Details"
      />
      <Button
        class={`${activePage === "characters" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
        text="Characters"
      />
      <Button
        class={`${activePage === "relations" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
        text="Relations"
      />
      <Button
        class={`${activePage === "recommendations" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
        text="Recommendations"
      />
      <Button
        class={`${activePage === "more-infos" ? "btn_pink" : "btn_gray"} w-40 lg:w-60`}
        text="More Infos"
      />
    </div>
  );
};

export default DescriptionNavigation;
