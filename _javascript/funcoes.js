/*Funcões Operações Básicas*/ 
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
    document.getElementById("resultado").value = resultado.toFixed(2); 
}
function dividir(event){
    event.preventDefault();
    var valorNum1 = document.getElementById("num1").value;
    var valorNum2 = document.getElementById("num2").value;
    var resultado = (valorNum1 / valorNum2);
    document.getElementById("resultado").value = resultado.toFixed(2); 
}
/*Função Calculando a Área*/
function calcule(event){
    event.preventDefault();
    var comp = document.getElementById("num4").value;
    var larg = document.getElementById("num5").value;
    var areaTotal = (comp * larg);
    document.getElementById("area").value = areaTotal.toFixed(2);
}
/*Funções Outros Cálculos*/
function raiz(event){
    event.preventDefault();
    var Num7 = document.getElementById("num7").value;
    var raiz = Math.sqrt(Num7);
    document.getElementById("calculo").value = raiz;
}
function seno(event){
    event.preventDefault();
    var Num7 = document.getElementById("num7").value;
    var seno = Math.sin(Num7);
    document.getElementById("calculo").value = seno;
}
function cosseno(event){
    event.preventDefault();
    var Num7 = document.getElementById("num7").value;
    var cosseno = Math.cos(Num7);
    document.getElementById("calculo").value = cosseno;
}
function tangente(event){
    event.preventDefault();
    var Num7 = document.getElementById("num7").value;
    var tangente = Math.tan(Num7);
    document.getElementById("calculo").value = tangente;
}
/*Limpando o campo input para usuário digitar novamente*/
function limpar(event){
    event.preventDefault();
    document.getElementById("num1").value ='';
    document.getElementById("num2").value ='';
    document.getElementById("resultado").value ='';
}
function novoCalculo(event){
    event.preventDefault();
    document.getElementById("num4").value ='';
    document.getElementById("num5").value = '';
    document.getElementById("area").value ='';
}
function novo(event){
    event.preventDefault();
    document.getElementById("num7").value ='';
    document.getElementById("calculo").value ='';
}
