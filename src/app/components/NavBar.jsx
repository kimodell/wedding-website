//import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar () {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Chris & Kim</h1>
      <h2 className={styles.h2}>September 2025</h2>
      <ul className={styles.navbarlist}>
        <li><a href="#">Home</a></li>
        <li><a href="#origins">Origins</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#travel">Travel</a></li>
        <li><a href="info">Important Information</a></li>
        <li><a href="registry">Registry</a></li>
        <li><a href="#rsvp">RSVP</a></li>
      </ul>
    </nav>
  );

}