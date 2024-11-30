import styles from "../styles/Registry.module.css";

export default function Registry() {
  return (
    <div id="registry">
      <h2>Gifts</h2>
      <div className={styles.registry}>
        <p className={styles.registryParagraph}>We are so grateful to have you join us in celebrating our special day. Your presence alone is the greatest gift we could ask for!</p>
        <p className={styles.registryParagraph}>If you would like to honor us with a gift, we kindly ask for monetary contributions in place of a registry. This will help us create lasting memories as we start this new chapter of our story together.</p>
        <p className={styles.registryParagraph}>Thank you for your love and support - we can't wait to celebrate with you!</p>
      </div>
    </div>
  );
}