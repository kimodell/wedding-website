import styles from "../styles/Origins.module.css";

export default function Origins() {
  return (
    <div id="origins">
      <h2>The Origin Story</h2>
      <p className={styles.originsParagraph}>
        Our tale together began as only the most enchanting stories of love and adventure do — in Azeroth. It was the year 2010, and we were two young adventurers, each on opposite sides of the country, exploring the wonders of World of Warcraft.
        In the bustling streets of Orgrimmar, we found ourselves side by side, joyfully trolling noobs. Little did we know that these moments of mischief were only the beginning of the main story quest that is our lives.
      </p>
      <p className={styles.originsParagraph}>
        15 years later, we are ready to embark on the greatest quest of our lives IRL. From our humble beginnings in Azeroth to this momentous occasion that has brought you here today!
      </p>
      <h3 className={styles.originsh3}>
        Achievement Unlocked!
      </h3>
    </div>
  );
}