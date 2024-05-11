let form = document.querySelector(".form-main-inner-con");
let msgSucesso = document.getElementById("msgSucesso");
let msgErro = document.getElementById("msgErro");

let nome = document.getElementById("name");
let email = document.getElementById("emailHelp");
let assunto = document.getElementById("subject");
let telefone = document.getElementById("phone");
let mensagem = document.getElementById("comments");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    email: email.value,
    assunto: assunto.value,
    html: `<p>
	<strong>Nome: </strong>${nome.value} 
	<br/> 
	<strong>Telefone: </strong>${telefone.value}
	<br/> 
	<strong>Mensagem: </strong>${mensagem.value} </p>`,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  fetch("https://vinilimadev.com/send", options)
    .then((response) => response.json())
    .then((data) => {

      nome.value = "";
      email.value = "";
      assunto.value = "";
      telefone.value = "";
      mensagem.value = "";

      msgSucesso.setAttribute("class", "mensagem");

      setTimeout(() => {
        msgSucesso.setAttribute("class", "mensagem d-none");
      }, 3000);
    })
    .catch((error) => {
      console.error("Erro ao enviar mensagem:", error);

      msgErro.setAttribute("class", "mensagem");

      setTimeout(() => {
        msgErro.setAttribute("class", "mensagem d-none");
      }, 3000);
    });
});
