const nodemailer = require("nodemailer");

////////////////////////   Node Mailer   /////////////////////

const transport = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "beraprakash456@gmail.com",
    pass: "nslyqjbhmesqtwez",
  },
});

function sendMail(to, sub, Message) {
  transport.sendMail({
    to: to,
    subject: sub,
    html: Message,
  });
}

exports.getMail = async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data:", data);
    const { email, phone, fullName, message } = data;

    // Process the data as needed
    res.json({ message: "Data received successfully", data });

    const subject = `Message from ${fullName}`;
    const htmlMessage = `
          <h1>New Message from ${fullName}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile Number:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `;

    // Call the sendMail function with extracted values
    await sendMail(email, subject, htmlMessage);
  } catch (error) {
    return res.status(400).json({
      error: "error while creating post",
    });
  }
};
