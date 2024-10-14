import styles from "../styles/Location.module.css"
import Image from "next/image";
import oast from "../images/oast.png"
import Map from "./Map";

export default function Location () {
  return (
    <div id="location">
      <h2>Location</h2>
      <h4>
        Niagara Oast House Brewers
      </h4>
      <p>
        2017 Niagara Stone
      </p>
      <p>
        Niagara-on-the-Lake, ON L0S 1J0
      </p>
      <Image
        src={oast}
        alt="Niagara Oast House Brewers"
        width={500}
        height={300}
      />
      <Map/>

    </div>
  );
}