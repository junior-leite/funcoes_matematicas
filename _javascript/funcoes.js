function somar(event){
    event.preventDefault();
    var valorNum1 = document.getElementById("num1").value;
    var valorNum2 = document.getElementById("num2").value;
    var resultado = parseInt(valorNum1) + parseInt(valorNum2);
    document.getElementById("resultado").value = resultado; 
}
function subtrair(event){
    event.preventDefault();
    var valorNum1 = document.getElementById("num1").value;
    var valorNum2 = document.getElementById("num2").value;
    var resultado = parseInt(valorNum1) - parseInt(valorNum2);
    document.getElementById("resultado").value = resultado;
}
function multiplicar(event){
    event.preventDefault();
    var valorNum1 = document.getElementById("num1").value;
    var valorNum2 = document.getElementById("num2").value;
    var resultado = (valorNum1 * valorNum2);
    document.getElementById("resultado").value = resultado; 
}
function dividir(event){
    event.preventDefault();
    var valorNum1 = document.getElementById("num1").value;
    var valorNum2 = document.getElementById("num2").value;
    var resultado = (valorNum1 / valorNum2);
    document.getElementById("resultado").value = resultado; 
}
/*Limpando o campo input para usuário digitar novamente*/
function limpar(event){
    event.preventDefault();
    document.getElementById("num1").value ='';
    document.getElementById("num2").value ='';
    document.getElementById("resultado").value ='';
}
