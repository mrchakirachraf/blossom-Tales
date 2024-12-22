import React, { useState, useEffect } from "react";
import styles from "./componentsStyles/descriptionNavigation.module.css"
import Button from "../components/Button";

const descriptionNavigation = () => {

    return(
        <div className={`mt-10 lg:mx-24 lg:mt-0 mb-10 flex flex-row flex-wrap justify-between items-center gap-8  ${styles.buttonsGroupe}`}>
            <Button class="btn_pink  w-40 lg:w-60" text="Details"/>
            <Button class="btn_gray  w-40 lg:w-60" text="Characters"/>
            <Button class="btn_gray  w-40 lg:w-60" text="Relations"/>
            <Button class="btn_gray  w-40 lg:w-60" text="Recommendations"/>
            <Button class="btn_gray  w-40 lg:w-60" text="More Infos"/>
        </div>
    );
};

export default descriptionNavigation;