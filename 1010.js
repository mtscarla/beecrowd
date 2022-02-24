var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//var entradalinha = parseFloat(lines).split(" ")
var linha1 = lines[0].split(" ")
var linha2 = lines[1].split(" ")

var cod1= parseInt(linha1.shift())

var num1= parseInt(linha1.shift())

var unitario1= parseFloat(linha1.shift()).toFixed(2)

var cod2= parseInt(linha2.shift())

var num2= parseInt(linha2.shift())

var unitario2= parseFloat(linha2.shift()).toFixed(2)

var valor= (num1*unitario1)+(num2*unitario2)

 console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)