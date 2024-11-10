import styles from "../styles/Location.module.css";
import Image from "next/image";
import oast from "../images/oast.png";
import Map from "./Map";

export default function Location() {
  return (
    <div id="location">
      <h2>Location</h2>
      <div className={styles.locationContent}>
        <div className={styles.locationText}>
          <h4>Niagara Oast House Brewers</h4>
          <h4>2017 Niagara Stone</h4>
          <h4>Niagara-on-the-Lake, ON L0S 1J0</h4>
          <br/>
          <p><em>Please note: Parking for our guests is located in the overflow lot to the Southwest of the brewery.
          If you follow directions like Kim, this can be found on the right hand side when facing the front of the big red barn.</em></p>
        </div>
        <Image
          className={styles.locationImage}
          src={oast}
          alt="Niagara Oast House Brewers"
        />
      </div>
      <Map className={styles.locationMap} />
    </div>
  );
}