const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const user = process.env.EMAIL;
const pass = process.env.SENHA;
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(bodyParser.json());

app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  res.setHeader("Access-Control-Allow-Origin", "https://vinilimadev.com");
  res.setHeader("Access-Control-Allow-Methods", "POST");
});

app.post("/send", async (req, res) => {
  const recaptchaToken = req.body.recaptcha_token;
  console.log(recaptchaToken)
  try {
    // Validar o token reCAPTCHA
    const response = await axios.post(
  
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );

    if (response.data.success) {
      // Token reCAPTCHA válido, processar os dados do formulário
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
    } else {
      // Token reCAPTCHA inválido
      res.status(400).json({ error: "Erro: Token reCAPTCHA inválido.", token: recaptchaToken });
    }
  } catch (error) {
    console.error("Erro ao verificar token reCAPTCHA:", error);
    res.status(500).json({
      error: "Erro interno do servidor ao verificar token reCAPTCHA.",
    });
  }
});

app.listen(port, () => console.log(`listening on port ${port}!`));
