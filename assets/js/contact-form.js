let form = document.querySelector(".form-main-inner-con");
let msgSucesso = document.getElementById("msgSucesso");
let msgErro = document.getElementById("msgErro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    email: document.getElementById("emailHelp").value,
    assunto: document.getElementById("subject").value,
    html: `<p>
	<strong>Nome: </strong>${document.getElementById("name").value} 
	<br/> 
	<strong>Telefone: </strong>${document.getElementById("phone").value}
	<br/> 
	<strong>Mensagem: </strong>${document.getElementById("comments").value} </p>`,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  fetch("/send", options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Resposta do servidor:", data);

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
