import styles from "../styles/Schedule.module.css"

export default function Schedule () {
  return (
    <div id="schedule">
      <h2>Schedule</h2>
      <p className={styles.schedule}>
        <strong>6:30 pm:</strong> Ceremony
        <br/> 
        <strong>7:30 pm:</strong> Dinner
        <br/>
        <strong>8:30 pm:</strong> Speeches
        <br/>
        <strong>9:00 pm:</strong> The long expected party!
      </p>
    </div>
  );
}