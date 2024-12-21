"use client";
import { useState } from "react";
import PhotoShootMenu from "../../sections/PhotoShootMenu/PhotoShootMenu";
import DateTimePicker from "../../sections/DateTimePicker/DateTimePicker";
import Modal from "../../modal/Modal";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Book = () => {
  const [appointment, setAppointment] = useState({package:"",date: new Date(),time:"5:00 PM"});
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const db = getFirestore(); // Firestore instance
  const auth = getAuth(); // Firebase authentication instance

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
    addAppointment(date,time)
    toggleModal();
  };
  const toggleModal = () => {
    console.log("toogled")
    setModalIsOpen((prev) => !prev);
  }
  const addAppointment = async (date, time) => {
    const user = auth.currentUser; // Get the current user from Firebase Auth

    if (!user) {
      console.log("No user is logged in.");
      return;
    }

    try {
      // Add the appointment document to Firestore
      const docRef = await addDoc(collection(db, "appointments"), {
        email: user.email,        // User's email
        package: appointment.package,  // Package selected
        date: date,               // Selected date
        time: time,               // Selected time
        user_id: user.uid,        // Current user's UID (foreign key)
      });

      console.log("Appointment added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding appointment: ", error);
    }
  };

  return (
    <>
    {!appointment.package && <PhotoShootMenu handlePackage = {addPackage}/>}
    {appointment.package && <DateTimePicker handleDateTime = {addDateTime} handlePackage = {addPackage}/>}
    {modalIsOpen &&<Modal toggleModal={toggleModal}/>}
    </>
  );
};
export default Book;
