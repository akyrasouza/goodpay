import controlerUserLogin from "./moduloInterface.js";
//Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert.
var myModal = new bootstrap.Modal(document.getElementById('myModal'))


//Trazendo os botões da DOM em HTML
const entrar = document.getElementById("btnEntrar");
entrar.addEventListener("click", (event) => {
    let user= document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;

    //Testando se os campo não estão vazios.
    if(!user|| user=== null || user==="" || !senha || senha === null || senha===""){
        alert("Campos vazios, não há como executar o login");
        document.getElementById("titleModal").innerHTML = "Campos vazios";
        document.getElementById("bodyModal").innerHTML = "Os Campos não podem servazios";
        document.getElementById("btnModalClose").innerHTML = "Fechar";
        document.getElementById("btnModalSave").innerHTML = "Salvar";
        myModal.show();
    } else {
        controlerUserLogin.loginInfo(user,senha);    }
})
