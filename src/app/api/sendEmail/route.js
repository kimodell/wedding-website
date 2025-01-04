"use server";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export async function POST(request) {

  console.log("POST request received");

  const formData = await request.json();
  const { firstName, lastName, attending, dietRestrictions, songRequest1, songRequest2 } = formData;

  console.log("Incoming data from api", formData);

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

  console.log("Preparing to send email with message:", msg);

  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error("Full error response:", error.response.body);
    });

  return Response.json({ message: "ok"}); 
}

export async function GET(request) {

  console.log("GET request received");

  return Response.json({ key: 'value' }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Content-Type': 'application/json',
    },
  });
}