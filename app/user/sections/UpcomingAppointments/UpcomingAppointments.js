import Button from '@/app/components/UI/Button/Button';
import styles from './UpcomingAppointments.module.scss';
import Image from "next/image";

const UpcomingAppointments = ({ appointment }) => {
    if (appointment) {
        return <div className={styles.appointmentContainer}></div>;
    }

    const dogImage = '/images/upcoming.png';

    return (
        <section className={styles.upcoming}>
            <h1 className={styles['upcoming__header']}>Upcoming Appointments</h1>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles['upcoming__header--secondary']}>No Upcoming Appointments</h2>
                    <p className={styles.paragraph}>
                        Make sure you get your professional pics taken regularly for your memories!
                    </p>
                    <Button variant="cta-book" text="Book Now"/>
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
};

export default UpcomingAppointments;
