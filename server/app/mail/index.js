const nodemailer = require("nodemailer");
const config = require("./config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    ...config
  },
});

function send({ email, name, subject, text }) {
  // console.log({ ...config });
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "tropicstech@gmail.com",
    subject: `${subject} - from ${from} `,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

module.exports = send;
