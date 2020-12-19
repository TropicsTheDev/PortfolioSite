const express = require("express");
const cors = require("cors");
const mailer = require("./mail");
const { throwError } = require("./utils/errorHandling");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles errors
app.use((err, req, res, next) => {
  console.log({ ...error });
  console.error(`${err.responseCode} Error found: `, err);
  res.status(err.responseCode || 500).json({
    message: err.message,
    msg: err.message,
    err,
  });
});

// handles email
app.post("/email", (req, res, next) => {
  const { name = "", email = "", subject = "", message = "", spam } = req.body;
  // console.log({ ...req.body });
  if (!spam) {
    mailer({ name, email, subject, text: message })
      .then(() => {
        console.log(`Sent the message "${message}" from <${name}> ${email}.`);
        res
          .status(200)
          .json({ success: true, msg: "Your email has been sent!" });
      })
      .catch((error) => {
        // console.log({ ...error });
        next(error);
      });
  } else {
    res.status(401).json({ success: false, msg: "No spam please." });
  }
});

module.exports = app;
