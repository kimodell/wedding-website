import styles from "../styles/Intro.module.css"

export default function Intro () {
  return (
    <div id="intro">
      <h2>You're Invited!</h2>
      <p className={styles.introParagraph}>
      If you've made it this far, it means you have received a truly exclusive invitation! 
      You are among the most cherished individuals in our lives, and we sincerely hope you will 
      join us for our long expected party. 
      Your presence will make our celebration a night to remember!
      Join us as we embark on this epic adventure together!
      </p>
    </div>
  );
}