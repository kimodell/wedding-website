import styles from "../styles/Travel.module.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { MdLocalHotel } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";



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
          <FaCarSide />
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
              <h4>Short-Term Rentals</h4>
              <p>Don't forget to check out St Catharines and Niagara Falls in addition to Niagara-On-The-Lake!</p>
              <div className={styles.hotelsLinks}>
                <a href="https://www.airbnb.ca/s/Niagara~on~the~Lake--Ontario--Canada/homes?flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-12-01&monthly_length=3&monthly_end_date=2025-03-01&query=Niagara-on-the-Lake%2C%20ON&place_id=ChIJsQIX2RRf04kRwKIRfVRRAXY&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&date_picker_type=calendar&source=structured_search_input_header&search_type=filter_change&adults=2&search_mode=regular_search&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&checkin=2025-09-13&checkout=2025-09-14">airbnb</a>
                <a href="https://www.vrbo.com/en-ca/search?destination=Niagara-on-the-Lake%2C%20Ontario%2C%20Canada&regionId=8957&latLong=&flexibility=1_DAY&d1=2024-12-07&d2=2024-12-21&adults=2&theme=&userIntent=&semdtl=&sort=RECOMMENDED&children=&mapBounds=&pwaDialog=&searchRange=2025-09-01_2025-09-30&amenities=">Vrbo</a>
                <a href="https://www.rentalsniagara.com/">Rentals Niagara</a>
              </div>
              <h4>Hotels</h4>
              <p>Block of rooms coming soon!</p>
            </div>
          </div>
          <div className={styles.travelCars}>
            <div className={styles.carsInfo}>
              <h4>Car Rentals</h4>
              <p>Coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}