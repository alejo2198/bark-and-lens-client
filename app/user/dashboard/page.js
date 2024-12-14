import SideNav from "@/app/components/SideNav/SideNav"
import styles from './Dashboard.module.scss'
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments"
import PhotoShootMenu from "../components/PhotoShootMenu/PhotoShootMenu"

const Dashboard = () => {
    return (
        <section >
            <aside>
                <SideNav/>
            </aside>
            <main className={styles.main}>
                <UpcomingAppointments/>
                <PhotoShootMenu/>
            </main>
        </section>
    )
}
export default Dashboard