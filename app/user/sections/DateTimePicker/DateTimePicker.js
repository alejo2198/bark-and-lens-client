"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./DateTimePicker.module.scss";


const DateTimePicker = ({handleDateTime,handlePackage}) => {
  
  let today = new Date();
  let dateValue = today.toISOString().substring(0,10);

  const [time, setTime] = useState("5:00 PM");

  const handleTimeClick = (timeValue) => {
    setTime(timeValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDateTime(new Date(e.target.date.value),time)
  }
  const handleReturn = (e) => {
    handlePackage("")
  }
  

  return (
    <section className={styles.datetime}>
      <div className={styles.header}>
        <Image
          src={"/icons/chevron.svg"}
          height={25}
          width={25}
          alt="navigational arrow"
          className={styles["chevron"]}
          onClick={handleReturn}
        />
      <h2>Select a Date & Time</h2>
      </div>
      <div className={styles["datetime__container"]}>
        <form onSubmit={handleSubmit} action="" method="post" className={styles.form}>
          <div className={styles["form__control"]}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" defaultValue={dateValue} className={styles["form__input"]}/>
        </div>
        <button type="submit" className={styles.button}>Select</button>  
        </form>
            <h4 className={styles["datetime__header"]}>AM</h4>
          <ul className={styles["datetime__morning"]}>
            <li
              className={styles[`datetime__time${time === "9:00 AM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("9:00 AM");
              }}
            >
              9:00 AM
            </li>
            <li
              className={styles[`datetime__time${time === "9:30 AM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("9:30 AM");
              }}
            >
              9:30 AM
            </li>
          </ul>
            <h4 className={styles["datetime__header"]}>PM</h4>
          <ul className={styles["datetime__afternoon"]}>
            <li
              className={styles[`datetime__time${time === "5:00 PM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("5:00 PM");
              }}
            >
              5:00 PM
            </li>
            <li
              className={styles[`datetime__time${time === "5:30 PM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("5:30 PM");
              }}
            >
              5:30 PM
            </li>
            <li
              className={styles[`datetime__time${time === "6:00 PM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("6:00 PM");
              }}
            >
              6:00 PM
            </li>
            <li
              className={styles[`datetime__time${time === "6:30 PM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("6:30 PM");
              }}
            >
              6:30 PM
            </li>
            <li
              className={styles[`datetime__time${time === "7:00 PM" ? "--selected" : ''}`]}
              onClick={() => {
                handleTimeClick("7:00 PM");
              }}
            >
              7:00 PM
            </li>
            <li
              className={styles[`datetime__time${time === "7:30 PM" ? "--selected" : ''}`]}
                onClick={() => {
                    handleTimeClick("7:30 PM");
              }}
            >
              7:30 PM
            </li>
          </ul>
          </div>
        
      
    </section>
  );
};

export default DateTimePicker;
