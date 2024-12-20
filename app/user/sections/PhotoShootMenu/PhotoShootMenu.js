"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./PhotoShootMenu.module.scss";
import Button from "@/app/components/UI/Button/Button";

const PhotoShootMenu = ({onDashboard,handlePackage}) => {
  const photoshoots = [
    {
      name: "basic",
      title: "The Basic Photo Package",
      price: 100,
      duration: "30 minutes",
      familyPhotos: 1,
      pupPhotos: 1,
    },
    {
      name: "recommended",
      title: "The Recommended Photo Package",
      price: 160,
      duration: "1 hour",
      familyPhotos: 2,
      pupPhotos: 2,
    },
    {
      name: "premium",
      title: "The Premium Photo Package",
      price: 200,
      duration: "2 hours",
      familyPhotos: 3,
      pupPhotos: 3,
    },
  ];
  const [photoshoot, setPhotoshoot] = useState(photoshoots[0]);

  const handlePackageChange = (name) => {
    if (name === "basic") {
      setPhotoshoot(photoshoots[0]);
    } else if (name === "recommended") {
      setPhotoshoot(photoshoots[1]);
    } else if (name === "premium") {
      setPhotoshoot(photoshoots[2]);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Available Packages</h2>
      <div className={styles.main}>
        <div className={styles.content} >
          <div className={styles["header-container"]}>
            <h2 className={styles["photoshoot__header"]}>{photoshoot.title}</h2>
            <p className={styles["photoshoot__duration"]}>
              {"Duration: " + photoshoot.duration}
            </p>
          </div>
          <div className={styles["photoshoot__price"]}>
            {"$" + photoshoot.price}
          </div>
          <div className={styles["photoshoot__photos"]}>
            <div className={styles["photo__container"]}>
              <Image
                src="/images/family-photoshoot.png"
                height={170}
                width={250}
                className={styles["photoshoot__photo"]}
                alt="Family Photoshoot"
              />
              <p className={styles["photoshoot__description"]}>
                {"x" + photoshoot.familyPhotos + " family photos"}
              </p>
            </div>
            <div className={styles["photo__container"]}>
              <Image
                src="/images/pup-photoshoot.png"
                height={170}
                width={250}
                className={styles["photoshoot__photo"]}
                alt="Pup Photoshoot"
              />
              <p className={styles["photoshoot__description"]}>
                {"x" + photoshoot.pupPhotos + " pup portrait photos"}
              </p>
            </div>
          </div>
          {!onDashboard && <button className={styles.button} onClick={() => {handlePackage(photoshoot.name)}}>Select</button>}
         
        </div>
      <aside className={styles.aside}>
        <ul className={styles["photoshoot__menu"]}>
          <li className={styles[`photoshoot__option${photoshoot.name === 'basic' ? "--selected": ''}`]} onClick={() => handlePackageChange("basic")}>Basic</li>
          <li className={styles[`photoshoot__option${photoshoot.name === 'recommended' ? "--selected": ''}`]} onClick={() => handlePackageChange("recommended")}>Recommended</li>
          <li className={styles[`photoshoot__option${photoshoot.name === 'premium' ? "--selected": ''}`]} onClick={() => handlePackageChange("premium")}>Premium</li>
        </ul>
      </aside>
      </div>
    </section>
  );
};
export default PhotoShootMenu;
