import styles from "../styles/Info.module.css";

export default function ImportantInfo() {
  return (
    <div id="info">
      <h2>Important Information</h2>
      <div className={styles.info}>
        <p className={styles.infoQuestions}>Can I bring a guest/date?</p>
        <p className={styles.infoAnswers}>
          We are so excited to celebrate our day with our closest people!
          Due to limited space, we are only able to accomodate guests formally
          listed on your wedding invitation. Thank you for understanding!
        </p>
        <p className={styles.infoQuestions}>Can I bring my kids?</p>
        <p className={styles.infoAnswers}>
          While we adore your younglings, we have decided to make our wedding an adult-only celebration.
        </p>
        <p className={styles.infoQuestions}>Will the wedding be outdoors or indoors?</p>
        <p className={styles.infoAnswers}>
          The ceremony will be held outside, in the field south-west of the Oast House barn, ~5-7 minute walk from the brewery.
          Following the ceremony, everyone who has not been asked to stay back for photos will move inside and upstairs to the Oast House Hayloft.
        </p>
        <p className={styles.infoQuestions}>When do I need to RSVP?</p>
        <p className={styles.infoAnswers}>
          As soon as possible! The deadline can be found in the RSVP section below.
        </p>
        <p className={styles.infoQuestions}>What time should I arrive?</p>
        <p className={styles.infoAnswers}>
          The ceremony starts at 6:30 pm. We ask that everyone arrive at least 15 minutes early to get seated and comfortable.
          Remember, the ceremony is a 5-7 minute walk from the washroom, so make sure to stop at the barn to pee before making your way over!
        </p>
        <p className={styles.infoQuestions}>What if I can&apos;t make it?</p>
        <p className={styles.infoAnswers}>
          You will be missed and we are sad you can&apos;t come! Please let us know as soon as possible by filling out the RSVP form below!
        </p>
        <p className={styles.infoQuestions}>Where do I park?</p>
        <p className={styles.infoAnswers}>
          Our venue requires all of our guests park in the overflow lot.
          Please refer to the &quot;Location&quot; section of this page for directions and more information.
        </p>
        <p className={styles.infoQuestions}>Can I take pictures during the ceremony?</p>
        <p className={styles.infoAnswers}>
          We are having an unplugged ceremony and ask that all phones are put away and silenced.
          We have asked specific people to capture our ceremony and will be sure to share these with you all later!
          Once the ceremony is concluded, break out those phones and take as many photos as you would like!
        </p>
      </div>
    </div>
  );
}