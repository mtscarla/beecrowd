
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift()
var fixo= parseFloat(lines.shift())
var vendas= parseFloat(lines.shift())

var comissao= (vendas/100)*15 
var salario= fixo+comissao;


console.log(`TOTAL = R$ ${salario.toFixed(2)}`)