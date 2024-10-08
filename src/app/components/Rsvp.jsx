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

    // try {
    //   const result = await sendEmail(formData);
    //   alert('RSVP sent successfully!');
    //   console.log("form data after try", formData);
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('There was an error sending your RSVP.');
    // }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('RSVP sent successfully!');
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

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const formData = {};

  //   Array.from(e.currentTarget.elements).forEach(field => {
  //     if ( !field.name ) return;
  //     formData[field.name] = field.value;
  //   });

  //   await fetch('/api/sendEmail', {
  //     method: 'POST',
  //     body: JSON.stringify(formData)
  //   });
  // }

  return (
    <div id="rsvp">
      <h2>RSVP</h2>
      <p>Deadline: Some date here</p>
      <p>
        Please fill out one form per invited guest!
      </p>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Attending Yes/No */}
        <div>
          <label>Are you attending?</label>
          <div>
            <input
              type="radio"
              id="attendingYes"
              name="attending"
              value="yes"
              checked={formData.attending === 'yes'}
              onChange={handleChange}
              required
            />
            <label htmlFor="attendingYes">I will accept your quest!</label>

            <input
              type="radio"
              id="attendingNo"
              name="attending"
              value="no"
              checked={formData.attending === 'no'}
              onChange={handleChange}
              required
            />
            <label htmlFor="attendingNo">I regretfully decline.</label>
          </div>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <label htmlFor="dietRestrictions">Dietary Restrictions:</label>
          <input
            type="text"
            id="dietRestrictions"
            name="dietRestrictions"
            value={formData.dietRestrictions}
            onChange={handleChange}
          />
        </div>

        {/* Song Request 1 */}
        <div>
          <label htmlFor="songRequest1">Song Request #1:</label>
          <input
            type="text"
            id="songRequest1"
            name="songRequest1"
            value={formData.songRequest1}
            onChange={handleChange}
          />
        </div>

        {/* Song Request 2 */}
        <div>
          <label htmlFor="songRequest2">Song Request #2:</label>
          <input
            type="text"
            id="songRequest2"
            name="songRequest2"
            value={formData.songRequest2}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}