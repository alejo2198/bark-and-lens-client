"use client";
import Image from "next/image";
import Button from "@/app/components/UI/Button/Button";
import { useState } from "react";
import styles from "./DateTimePicker.module.scss";

const DateTimePicker = () => {
  let initialState = {
    date: new Date(),
    time: "9:00 AM",
  };
  let today = new Date();
  let dateValue = today.toISOString().substring(0,10);

  const [datetime, setDateTime] = useState(null);

  const handleTimeClick = (time) => {
    let newTime = time;
  };

  const handleDateChange = (date) => {
    let newDate = date;
  };

  return (
    <section className={styles.datetime}>
      <div className={styles.header}>
        <Image
          src={"/icons/chevron.svg"}
          height={25}
          width={25}
          alt="navigational arrow"
          className={styles["chevron"]}
        />
      <h2>Select a Date & Time</h2>
      </div>
      <div className={styles["datetime__container"]}>
        <form action="" method="post" className={styles.form}>
          <div className={styles["form__control"]}>
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" defaultValue={dateValue} className={styles["form__input"]}/>
        </div>
            <Button variant="select-time" text="Select" />
        </form>
            <h4 className={styles["datetime__header"]}>AM</h4>
          <ul className={styles["datetime__morning"]}>
            <li
              className={styles["datetime__time"]}
              onClick={() => {
                handleTimeClick("9:00 AM");
              }}
            >
              9:00 AM
            </li>
            <li
              className={styles["datetime__time"]}
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
              className={styles["datetime__time"]}
              onClick={() => {
                handleTimeClick("5:00 PM");
              }}
            >
              5:00 PM
            </li>
            <li
              className={styles["datetime__time"]}
              onClick={() => {
                handleTimeClick("5:30 PM");
              }}
            >
              5:30 PM
            </li>
            <li
              className={styles["datetime__time--selected"]}
              onClick={() => {
                handleTimeClick("6:00 PM");
              }}
            >
              6:00 PM
            </li>
            <li
              className={styles["datetime__time"]}
              onClick={() => {
                handleTimeClick("6:30 PM");
              }}
            >
              6:30 PM
            </li>
            <li
              className={styles["datetime__time"]}
              onClick={() => {
                handleTimeClick("7:00 PM");
              }}
            >
              7:00 PM
            </li>
            <li
              className={styles["datetime__time"]}
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
