const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const user = process.env.EMAIL || "viniciusmateus.dev@gmail.com";
const pass = process.env.SENHA || "frjl mciy hqru vhsb";

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: "465",
    auth: { user, pass },
  });

  transporter
    .sendMail({
      from: user,
      to: user,
      replyTo: req.body.email,
      subject: req.body.assunto,
      html: req.body.html,
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
