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

/*
const data = {
    to: "pifaw61968@tenjb.com",
    subject: "Test email",
    html: "<Strong>Test email</Strong>"
};
*/

const sendEmail = async data => {
    const email = {...data, from: UKR_NET_EMAIL};
    return transport.sendMail(email);
}

module.exports = sendEmail;