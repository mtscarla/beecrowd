var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero1= parseInt(lines.shift())
var numero2= parseInt(lines.shift())

var prod = numero1*numero2

console.log(`PROD = ${prod}`)