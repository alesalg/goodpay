import controlerUserLogin from "./moduloInterface.js";
// trazendo elementos do Bootstrap para o dom;
var myModal = new bootstrap.Modal(document.getElementById('myModal'))


// Trazendo os botões da DOm em HTML
const entrarUsuario = document.getElementById('btnEntrar');
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById('usuario').value,
        senha = document.getElementById("senha").value;
    // testando se os campos não estão vazios.
    if(!user || user===null || user==="" || !senha || senha===null || senha==="") {
        alert("Campos estão vazios, não há como executar o login.")
        myModal.show();
    } else {
        controlerUserLogin.loginInfo(user, senha);
    }
})