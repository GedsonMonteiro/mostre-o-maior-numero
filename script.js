var n1 = parseFloat(prompt("1º número"));
var n2 = parseFloat(prompt("1º número"));
var n3 = parseFloat(prompt("1º número"));
var n4 = parseFloat(prompt("1º número"));
var n5 = parseFloat(prompt("1º número"));
var numbers = [n1, n2, n3, n4, n5];

var maiorNum = numbers.sort(); 
/*O método sort() classifica os itens de um array.*/ 

var results = [];
for (var i = 0; i < numbers.length - 1; i++){
    if (maiorNum[i + 1] == maiorNum[i]){
    results.push(maiorNum[i]);
/*O método push () adiciona novos itens ao final de uma matriz e retorna o novo comprimento.*/
      }
    }

var repetido = (results[0]);
    if (results!=""){
      console.log(repetido);
    }else{
      console.log(Math.max(n1, n2, n3, n4, n5));
    }