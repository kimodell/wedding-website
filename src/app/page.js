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
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButtons";
import photo1 from "./images/photo1.jpg"



export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.pageBody}>
      <div className={styles.pageIntro}>
        <div className={styles.pageIntroText}>
        <Intro />
        <Origins />
        </div>
        <Image
          className={styles.pageImage}
          src={photo1}
          alt="Chris and Kim"
          height={500}
        />
       </div>
        <Schedule />
        <Location />
        <Travel />
        <ImportantInfo />
        <Registry />
        <Rsvp />
        <div className={styles.fabWrapper}>
          <FloatingActionButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
