import styles from "../styles/Travel.module.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";

export default function Travel() {
  return (
    <div id="travel">
      <h2>Travel</h2>
      <p className={styles.travelIntro}>
        Journeying from afar? Here is some information to assist you on your quest!
      </p>
      <div className={styles.travelInfo}>
        <div className={styles.travelIcons}>
          <GiAirplaneDeparture className={styles.planeIcon} />
          <MdLocalHotel className={styles.hotelIcon} />
        </div>
        <div className={styles.travelText}>
          <div className={styles.travelFlights}>
            <div className={styles.flightsInfo}>
              <h4>Hamilton International Airport (YHM)</h4>
              <p>~1 hour from Niagara-on-the-lake</p>
              <h4>Toronto Pearson Airport (YYZ)</h4>
              <p>~2 hours and 15 minutes from Niagara-on-the-lake</p>
            </div>
          </div>

          <div className={styles.travelHotels}>
            <div className={styles.hotelsInfo}>
              <h4>Hotels</h4>
              <p>Coming soon!</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}