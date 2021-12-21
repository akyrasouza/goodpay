import controlerUserLogin from "./moduloInterface.js";
//Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))


//Trazendo os botões da DOM em HTML
const entrar = document.getElementById("btnEntrar");
entrar.addEventListener("click", (event) => {
    let user= document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;
    let alertModal = controlerUserLogin.loginInfo(user,senha); 
    document.getElementById("titleModal").innerHTML = alertModal.title;
    document.getElementById("bodyModal").innerHTML = alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML = alertModal.b1;
    document.getElementById("btnModalSave").innerHTML = alertModal.b2;

    myModal.show();

});
