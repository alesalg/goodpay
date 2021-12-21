import controlerUserLogin from "./moduloInterface.js";

// trazendo elementos do Bootstrap para o dom;
var myModal = new bootstrap.Modal(document.getElementById('myModal'))


// Trazendo os botões da DOm em HTML
const entrarUsuario = document.getElementById('btnEntrar');
entrarUsuario.addEventListener("click", (event) => {
    let user = document.getElementById('usuario').value,
        senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user, senha);

    document.getElementById("modal-title").innerHTML = alertModal.title;
    document.getElementById("modal-body").innerHTML= alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSalve").innerHTML = alertModal.b2;

    myModal.show();
});