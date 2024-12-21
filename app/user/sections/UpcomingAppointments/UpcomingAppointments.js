import Button from "@/app/components/UI/Button/Button";
import styles from "./UpcomingAppointments.module.scss"
import Image from "next/image";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const UpcomingAppointments = ({ appointment }) => {
  const db = getFirestore();
  const router = useRouter();

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  const cancelAppointment = async () => {
    try {
      console.log(appointment)
      await deleteDoc(doc(db, "appointments", appointment.id));
      console.log("Appointment canceled");

      // If you need to navigate or update the state, you can call the onCancel function
      
      window.location.reload(); // Redirect back to the dashboard or any other page
    } catch (error) {
      console.error("Error canceling appointment: ", error);
    }
  };
  if (appointment) {
    return (
      <section className={styles["upcoming"]}>
        <h1 className={styles.upcoming__header}>Upcoming Appointments</h1>
        <div className={styles["container--apt"]}>
          <div className={styles.appointment__container}>
            <h2 className={styles["upcoming__header--secondary"]}>
              {`${capitalizeFirstLetter(appointment.package)} Photo Package`}
            </h2>
            <div className={styles["appointment__info"]}>
              <ul className={styles.appointment__fields}>
                <li className={styles.appointment__field}>
                  <p className={styles["appointment__data"]}>
                    <span className={styles["appointment__span"]}>Date: </span>
                    {appointment.date.toDate().toDateString()}
                  </p>
                </li>
                <li className={styles.appointment__field}>
                  <p className={styles["appointment__data"]}>
                    <span className={styles["appointment__span"]}>Location: </span>
                    Humber Bay Bridge
                  </p>
                </li>
                <li className={styles.appointment__field}>
                  <p className={styles["appointment__data"]}>
                    <span className={styles["appointment__span"]}>Time: </span>
                    {appointment.time}
                  </p>
                </li>
              </ul>
                <div className={styles.appointment__buttons}>
                  <button className={styles.button} onClick={cancelAppointment}>cancel</button>
                <Button variant="cancel" text="cancel" />
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else{
    const dogImage = "/images/upcoming.png";
    return (
        <section className={styles.upcoming}>
          <h1 className={styles["upcoming__header"]}>Upcoming Appointments</h1>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 className={styles["upcoming__header--secondary"]}>
                No Upcoming Appointments
              </h2>
              <p className={styles.paragraph}>
                Make sure you get your professional pics taken regularly for your
                memories!
              </p>
              <Button variant="cta-book" text="Book Now" />
            </div>
            <Image
              src={dogImage}
              alt="beagle cartoon holding a camera"
              height={250}
              width={250}
              className={styles.image}
            />
          </div>
        </section>
      );
  }

  
};

export default UpcomingAppointments;
