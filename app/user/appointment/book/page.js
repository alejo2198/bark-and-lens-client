"use client";
import { useState } from "react";
import PhotoShootMenu from "../../sections/PhotoShootMenu/PhotoShootMenu";
import DateTimePicker from "../../sections/DateTimePicker/DateTimePicker";
import Modal from "../../modal/Modal";

const Book = () => {
  const [appointment, setAppointment] = useState({package:"",date: new Date(),time:"5:00 PM"});
  const [modalIsOpen,setModalIsOpen] = useState(false);

   // Add a package to the appointment
   const addPackage = (name) => {
    setAppointment((prev) => ({
      ...prev,
      package: name, // Add or update the package name
    }));
    
  };

  // Add date and time to the appointment
  const addDateTime = (date, time) => {
    setAppointment((prev) => ({
      ...prev,
      date,
      time, // Add or update date and time
    }));
    toggleModal();
  };
  const toggleModal = () => {
    console.log("toogled")
    setModalIsOpen((prev) => !prev);
  }

  return (
    <>
    {!appointment.package && <PhotoShootMenu handlePackage = {addPackage}/>}
    {appointment.package && <DateTimePicker handleDateTime = {addDateTime} handlePackage = {addPackage}/>}
    {modalIsOpen &&<Modal toggleModal={toggleModal}/>}
    </>
  );
};
export default Book;
