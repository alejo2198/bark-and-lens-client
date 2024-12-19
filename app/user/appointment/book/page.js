"use client";
import { useState } from "react";
import PhotoShootMenu from "../../sections/PhotoShootMenu/PhotoShootMenu";
import DateTimePicker from "../../sections/DateTimePicker/DateTimePicker";
import Modal from "../../modal/Modal";

const Book = () => {
  const [appointment, setAppointment] = useState({});

  return (
    <>
      <PhotoShootMenu />
      <DateTimePicker/>
      <Modal/>
    </>
  );
};
export default Book;
