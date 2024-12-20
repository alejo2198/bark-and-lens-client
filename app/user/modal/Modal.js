"use client";
import Button from "@/app/components/UI/Button/Button";
import styles from "./Modal.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Modal = ({toggleModal}) => {
  const router = useRouter();
 
  const handleClose = () => {
    toggleModal()
    router.push("/user")
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles["modal__header"]}>
          <h2 className={styles["modal__heading"]}>
            Successfully Booked Appointment
          </h2>
          <div role="button" onClick={handleClose} tabIndex={0}>
          <Image
            src={"/icons/close.svg"}
            alt="an x"
            height={25}
            width={25}
            className={styles.icon}
            onClick={handleClose}
          />
          </div>
        </div>
        <p className={styles.paragraph}>
          Thank you for booking an appointment with us. I guarantee you won’t be
          disappointed.
        </p>
        <Button variant="home" text="Back to Home" />
        <Image
          src={"/images/success-puppy.png"}
          alt="pug cartoon holding a camera"
          height={220}
          width={220}
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default Modal;
