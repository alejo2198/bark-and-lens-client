import Button from '../UI/Button/Button';
import styles from'./Sidenav.module.scss';
import Link from 'next/link';
import Image from "next/image";

const SideNav = () => {
    const logo = "/images/logo.png";
    return(
        <nav className={styles.nav}>
            <Image src={logo} alt="logo" height={110} width={160} />
            <ul className={styles['nav__links']}>
                <li className={styles['nav__link-container']}>
                    <Link className={styles['nav__link']} href="/user">Dashboard</Link>
                </li>
                <li className={styles['nav__link-container']}>
                    <Link className={styles['nav__link']} href="/user/appointment/book" >Appointments</Link>
                </li>
                <li className={styles['nav__link-container']}>
                    <Link className={styles['nav__link']} href="/user">Profile</Link>
                </li>
                <Button variant='logout' text="Log Out"/>
            </ul>
        </nav>
    )
}
export default SideNav