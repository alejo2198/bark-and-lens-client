import SideNav from "../components/SideNav/SideNav";
import styles from "./layout.module.scss";

export default function UserLayout({ children }) {
    return (
        <div className={styles.userLayout}>
            <aside className={styles.sideNav}>
                <SideNav />
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}