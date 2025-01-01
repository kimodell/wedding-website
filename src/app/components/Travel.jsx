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
              <h4>Airports</h4>
              <p> <strong>Hamilton International Airport (YHM)</strong></p>
              <p>~1 hour from Niagara-on-the-lake</p>
              <p><strong>Toronto Pearson Airport (YYZ)</strong></p>
              <p>~2 hours and 15 minutes from Niagara-on-the-lake</p>
            </div>
          </div>
          <div className={styles.travelHotels}>
            <div className={styles.hotelsInfo}>
              <h4>Short-Term Rentals</h4>
              <p>While Niagara-on-the-Lake is where the festivities will be held, be sure to enquire about the surrounding lands of St. Catharines and Niagara Falls as well!</p>
              <div className={styles.hotelsLinks}>
                <a href="https://www.airbnb.ca/s/Niagara~on~the~Lake--Ontario--Canada/homes?flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-12-01&monthly_length=3&monthly_end_date=2025-03-01&query=Niagara-on-the-Lake%2C%20ON&place_id=ChIJsQIX2RRf04kRwKIRfVRRAXY&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&date_picker_type=calendar&source=structured_search_input_header&search_type=filter_change&adults=2&search_mode=regular_search&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&checkin=2025-09-13&checkout=2025-09-14">airbnb</a>
                <a href="https://www.vrbo.com/en-ca/search?destination=Niagara-on-the-Lake%2C%20Ontario%2C%20Canada&regionId=8957&latLong=&flexibility=1_DAY&d1=2024-12-07&d2=2024-12-21&adults=2&theme=&userIntent=&semdtl=&sort=RECOMMENDED&children=&mapBounds=&pwaDialog=&searchRange=2025-09-01_2025-09-30&amenities=">Vrbo</a>
                <a href="https://www.rentalsniagara.com/">Rentals Niagara</a>
              </div>
              <h4>Hotels</h4>
              <p>For those who prefer the comforts of an inn on their journey, we have arranged a 10% discount at the <strong>Holiday Inn Express</strong> and <strong>Staybridge Suites</strong>. Both are located in Niagara-on-the-Lake, just a short 14-minute drive from Oast House Brewers!</p>
              <p>To secure your room, you may use the booking links below or summon aid by calling 289-362-2400 or 289-362-2500.</p>
              <div className={styles.hotelsLinks}>
                <a href="https://www.hiexpress.com/redirect?path=hd&brandCode=EX&localeCode=en&hotelCode=XLVNL&_PMID=99502056&corpNum=786997096&cn=no&viewfullsite=true">Holiday Inn Express</a>
                <a href="https://www.staybridge.com/redirect?path=hd&brandCode=SB&localeCode=en&hotelCode=XLVNF&_PMID=99502056&corporateNumber=786997096&cn=no&viewfullsite=true">Staybridge Suites</a>
              </div>
              <p><em>Remember to use <strong>Wedding Rate I.D. 786997096</strong> when booking!</em></p>
            </div>
          </div>
          <div className={styles.travelCars}>
            <div className={styles.carsInfo}>
              <h4>Car Rentals</h4>
              <p>
                We&apos;ve secured special discount codes for car rentals through <a className={styles.carLinks} href="https://www.budget.com/">Budget</a> and <a className={styles.carLinks} href="https://www.avis.com/">Avis</a> to aid you in your journey. 
                These codes will be valid for one week before and one week after the wedding. 
              </p>
              <p>
                Should you require a discount code for your travels, simply to reach out to us for the details!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}