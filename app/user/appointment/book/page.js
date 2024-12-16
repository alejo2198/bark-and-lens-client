"use client";
import { useState } from "react";
import PhotoShootMenu from "../../sections/PhotoShootMenu/PhotoShootMenu";
import DateTimePicker from "../../sections/DateTimePicker/DateTimePicker";

const Book = () => {
  const [appointment, setAppointment] = useState({});

  return (
    <>
      <PhotoShootMenu />
      <DateTimePicker/>
    </>
  );
};
export default Book;
