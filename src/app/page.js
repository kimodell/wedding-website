import Image from "next/image";
import styles from "./styles/page.module.css";
import NavBar from "./components/NavBar";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Travel from "./components/Travel";
import ImportantInfo from "./components/ImportantInfo";
import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import Origins from "./components/Origins";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Origins />
      <Schedule />
      <Location />
      <Travel />
      <ImportantInfo />
      <Registry />
      <Rsvp />
    </div>
  );
}
