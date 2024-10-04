const btnCadastrar = document.getElementById ("BotaoCadastro");
btnCadastrar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nomeli").innerHTML = "Nome: " + nome;
    let email = document.getElementById("email").value;
    document.getElementById("emaili").innerHTML = "Email: " + email;
    let data = document.getElementById("data").value;
    document.getElementById("datali").innerHTML = "Data de Nascimento: " + data;
    
});