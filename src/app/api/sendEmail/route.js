"use server";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export async function POST(request) {

  const formData = await request.json();
  const { firstName, lastName, attending, dietRestrictions, songRequest1, songRequest2 } = formData;

  console.log("data from api", formData);

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
      console.error("Full error response:", error.response.body);
    });

  return Response.json({ message: "ok"}); 
}

export async function GET(request) {
  return Response.json({ key: 'value' });

}