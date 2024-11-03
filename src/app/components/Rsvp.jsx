"use client";

import { useState } from "react";
import { sendEmail } from "../api/sendEmail/route";
import styles from "../styles/Rsvp.module.css";
import { useRouter } from "next/router";
import { Modal, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import thankyou from "../images/thankyou.jpg";
import { GiFlexibleLamp } from "react-icons/gi";

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "#eaf0db",
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};


export default function Rsvp() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    attending: 'yes',
    dietRestrictions: '',
    songRequest1: '',
    songRequest2: ''
  });

  //modal visability state
  const [openModal, setOpenModal] = useState(false);

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
        setOpenModal(true);
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

  //close modal and clear form data
  const handleClose = () => {
    setOpenModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      attending: 'yes',
      dietRestrictions: '',
      songRequest1: '',
      songRequest2: ''
    });
  };

  return (
    <div id="rsvp">
      <h2>RSVP</h2>
      <p className={styles.rsvpDeadline}>Deadline: <strong>August 1, 2025</strong></p>
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

        <button className={styles.submitButton} type="submit" color="#202e15">Submit</button>

      </form>

      {/* Modal for successful RSVP submission */}
      <Modal
        open={openModal}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <h3>
            Thank You!
          </h3>
          <p>
            Your RSVP has been sent successfully!
          </p>
          <Image
            className={styles.modalImage}
            src={thankyou}
            alt="Thank you image"
          />
          <p>
            We look forward to seeing you there!
          </p>
          <button className={styles.submitButton} onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
            Back
          </button>
        </Box>
      </Modal>
    </div>
  );
}