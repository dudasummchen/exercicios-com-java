//soma os valores
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click",  () => {
  let numero1 = document.getElementById("valor1").value;
  let numero2 = document.getElementById("valor2").value;
  let soma = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerHTML = "O resultado é " + soma;
});

//subtrai os valores
const btnSubtração = document.getElementById("subtrair");
btnSubtração.addEventListener("click",  () => {
  let numero1 = document.getElementById("valor1").value;
  let numero2 = document.getElementById("valor2").value;
  let subtração = parseInt(numero1) - parseInt(numero2);
  document.getElementById("resultado").innerHTML = "O resultado é " + subtração;
});

//multiplica os valores
const btnMultiplicação = document.getElementById("multiplicar");
btnMultiplicação.addEventListener("click",  () => {
  let numero1 = document.getElementById("valor1").value;
  let numero2 = document.getElementById("valor2").value;
  let multiplicação = parseInt(numero1) * parseInt(numero2);
  document.getElementById("resultado").innerHTML = "O resultado é " + multiplicação;
});

//divide os valores
const btnDivisão = document.getElementById("dividir");
btnDivisão.addEventListener("click",  () => {
  let numero1 = document.getElementById("valor1").value;
  let numero2 = document.getElementById("valor2").value;
  let divisão = parseInt(numero1) / parseInt(numero2);
  document.getElementById("resultado").innerHTML = "O resultado é " + divisão;
});