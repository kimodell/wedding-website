"use server";

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



export async function create(props) {

  const { firstName, lastName, attending, dietRestrictions, songRequest1, songRequest2 } = props

  const msg = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: `New RSVP From ${firstName}`,
    text: `
      New RSVP Response:
      Name: ${firstName} ${lastName}
      Attending: ${attending}
      Dietary Restrictions: ${dietRestrictions}
      Song Request 1: ${songRequest1}
      Song Request 2: ${songRequest2}
    `,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });

}