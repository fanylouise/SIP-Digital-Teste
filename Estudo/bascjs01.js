/////////01-04//////

// alert("Console.log");
//console.log("Hello World");

//var a = "SSD";
//var b = "PC tem";
//var c = "RAM";

//console.log(b)
//a = "motherBoard";

// b = a +","+ "" +c;
//console.log(b);

///////05-10///////

//var a = "LG";
//var b = 23;

//console.log(a);

//var c = null;
//console.log(c);

//cremento e decremento

//a = 3;
//a++;
//a--;
//++a;
//--a;
//console.log(a)

//operadores de atribuição

// =     f  = a   f = a;
// +=    f += a   f = f + a;
// -=    f -= a   f = f - a;
// *=    f *= a   f = f * a;
// /=    f /= a   f= f / a;
// %=    f%=a     f = f%a;

//operadores de comparação
//==
//===
//!=
//!==
//>
//<
//>=
//<=

//operadores lógicos avaliar booleanos

// && AND
// || OR
// ! NOT

/*
var idade = 21;

var maior65 = idade >= 65;
var menor10 = idade <= 10;

var gratuidade = maior65 || menor10;

console.log("Idade é:", idade);
console.log("Maior que 65," , maior65);
console.log("Menor que 10," , menor10);
console.log("Tem direito a gratuidade?", gratuidade);
*/
/*parseInt && parseFloat*/
//var a = '3.9';
//var b = '5';
//var c = parseFloat(a) + parseInt(b);
//console.log(c);

/*
alert("Bom dia, Pessoa!");
var nome = prompt("Qual o seu nome?");
alert("AHH Entendi! Então seu nome é: " + nome);

var idade = prompt('Digite sua idade')*2;

alert("Sua idade em 2044 será: " + idade);
*/

/*
idade = 20;

if(idade >= 18 && idade <= 35){
  console.log("pode se quiser");
  console.log("Mas, por favor mostre a identidade");
}
else{
  console.log("nao pode ");
}
*/

//Ternário = turu ? (true)jkjdf ()senao: (false)fhdgjh~;

// var idade = 20;

// var pode = idade >= 18 ? true : false;
// console.log(pode);

// if(media == 10){
//   console.log("Ganhará um curso e uma barra de chocolate!");

// }else if(media >= 7 && media < 10){
//   console.log("Aprovado");
// }
// if( media <= 6.9 ){
//   console.log("Prova Final");
// }

//////COM SWITCH/////

// var nota1 = 6;
// var nota2 = 8;

// var media = (nota1 + nota2)/2;

// switch(media){

//     case media == 10 :
//       console.log("Não fez mais que a obrigação, tome  aqui um suco de uva integral");
//     break;

//     case media >= 7 && media < 10 :
//       console.log("Tá ruim mas da pra passar");
//     break;

//     case media <= 6.9 :
//       console.log("Como você é burro cara");
//     break;

//     default :
//     console.log("Houve um erro");
// }

//FOR//

// var numero = 5

// for (var vez = 1; vez < numero; vez++) {
//   console.log('Executando o for, pela ' + vez + ' vez ')
// }
// console.log('Acabou')

//WHILE//

// var numero = Math.random() * 100 ;

//  while(numero < 90){

//   console.log(numero);
//   numero = Math.random() * 100;
//  }
//  console.log(numero);
//  console.log("Acabou");



function mostrarData(){
  document.getElementById("data").innerHTML=Date();
}
function mostrarMensagem(){
  alert("Estou aprendendo a programar em JavaScript");
}


// let alunos = ["naruto","sasuke","sakura"];
// alert(alunos.length);

var alunos = ["fany","socorro","michele"];

for(aluno in alunos){
alert(aluno);
}

