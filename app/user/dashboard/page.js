import SideNav from "@/app/components/SideNav/SideNav"
import styles from './Dashboard.module.scss'

const Dashboard = () => {
    return (
        <main className={styles.main}>
            <SideNav/>
        </main>
    )
}
export default Dashboard