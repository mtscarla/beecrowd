var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X= parseInt(lines.shift())
var horas= parseFloat(lines.shift())
var salario= parseFloat(lines.shift())


var salario = (horas*salario)
console.log(`NUMBER = ${X}`)
console.log(`SALARY = U$ ${salario. toFixed(2)}`)


