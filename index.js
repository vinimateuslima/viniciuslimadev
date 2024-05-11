const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");

const user = process.env.EMAIL;
const pass = process.env.SENHA;

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(bodyParser.json());

app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  res.setHeader('Access-Control-Allow-Origin', 'https://vinilimadev.com');
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST"
  );
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
