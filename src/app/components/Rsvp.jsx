"use client";

import { useState } from "react";
import { sendEmail } from "../api/sendEmail/route";
import styles from "../styles/Rsvp.module.css";
import { useRouter } from "next/router";


export default function Rsvp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    attending: 'yes',
    dietRestrictions: '',
    songRequest1: '',
    songRequest2: ''
  });

  //handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    //handle form submission here
    console.log("form data from handlesubmit:", formData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! RSVP sent successfully!');
        console.log("RSVP sent:", formData);
      } else {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        throw new Error(`Failed to send RSVP. Status: ${response.status}, Message: ${errorData || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('There was an error sending your RSVP.');
    }
  };

  return (
    <div id="rsvp">
      <h2>RSVP</h2>
      <p className={styles.rsvpDeadline}>Deadline: <strong>Some date here</strong></p>
      <p className={styles.rsvpIntro}>
        Please fill out one form per invited guest!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label className={styles.label} htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.inputText}
            placeholder="Bilbo"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className={styles.label} htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.inputText}
            placeholder="Baggins"
            required
          />
        </div>

        {/* Attending Yes/No */}
        <div>
          <label className={styles.label} >Are you attending?</label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              id="attendingYes"
              name="attending"
              value="yes"
              checked={formData.attending === 'yes'}
              onChange={handleChange}
              className={styles.inputRadio}
              required
            />
            <label className={styles.labelRadio} htmlFor="attendingYes">I will accept your quest!</label>

            <input
              type="radio"
              id="attendingNo"
              name="attending"
              value="no"
              checked={formData.attending === 'no'}
              onChange={handleChange}
              className={styles.inputRadio}
              required
            />
            <label className={styles.labelRadio} htmlFor="attendingNo">I regretfully decline.</label>
          </div>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <label className={styles.label} htmlFor="dietRestrictions">Dietary Restrictions:</label>
          <textarea
            type="text"
            id="dietRestrictions"
            name="dietRestrictions"
            value={formData.dietRestrictions}
            onChange={handleChange}
            className={styles.inputDiet}
            placeholder="I require seven meals a day, with a side of seed cake!"
          />
        </div>

        {/* Song Request 1 */}
        <div>
          <label className={styles.label} htmlFor="songRequest1">Song Request #1:</label>
          <input
            type="text"
            id="songRequest1"
            name="songRequest1"
            value={formData.songRequest1}
            onChange={handleChange}
            className={styles.inputText}
            placeholder="They're taking the hobbits to Isengard - Legolas"
          />
        </div>

        {/* Song Request 2 */}
        <div>
          <label className={styles.label} htmlFor="songRequest2">Song Request #2:</label>
          <input
            type="text"
            id="songRequest2"
            name="songRequest2"
            value={formData.songRequest2}
            onChange={handleChange}
            className={styles.inputText}
            placeholder="Sandstorm - Darude"
          />
        </div>

        <button className={styles.submitButton} type="submit">Submit</button>

      </form>
    </div>
  );
}