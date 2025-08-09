// testEmail.js
require("dotenv").config();
const nodemailer = require("nodemailer");

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,
  });

  try {
    console.log("Verifying transporter ...");
    await transporter.verify();
    console.log("Transporter verified. Sending test email...");

    const info = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "Nodemailer test email",
      text: "This is a test email sent from testEmail.js",
    });

    console.log("✅ Test email sent:", info.messageId);
  } catch (err) {
    console.error("❌ Test email failed:", err);
  }
}

testEmail();
