const nodemailer = require("nodemailer");
require("dotenv").config();

const {UKR_NET_EMAIL, UKR_NET_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: UKR_NET_EMAIL,
        pass: UKR_NET_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    from: UKR_NET_EMAIL,
    to: "pifaw61968@tenjb.com",
    subject: "Test email",
    html: "<Strong>Test email</Strong>"
};

transport.sendMail(email)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(error.message))