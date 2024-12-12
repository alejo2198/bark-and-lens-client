import Button from '../UI/Button/Button';
import styles from'./Sidenav.module.scss';
import Link from 'next/link';

const SideNav = () => {
    
    return(
        <nav className={styles.nav}>
            <ul className={styles['nav__links']}>
                <li className={styles['nav__link-container']}>
                    <Link href="/user/dashboard" className={styles['nav__link-container']}>Dashboard</Link>
                </li>
                <li className={styles['nav__link-container']}>
                    <Link href="/user/book" className={styles['nav__link-container']}>Appointments</Link>
                </li>
                <li className={styles['nav__link-container']}>
                    <Link href="/user/profile" className={styles['nav__link-container']}>Profile</Link>
                </li>
                <Button variant='logout' text="Log Out"/>
            </ul>
        </nav>
    )
}
export default SideNav