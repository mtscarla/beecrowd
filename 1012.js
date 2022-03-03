var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line = lines[0].split(' ')
var A = parseFloat(line[0])
var B = parseFloat(line[1])
var C = parseFloat(line[2])
var pi = 3.14159

var a = (A*C)/2

console.log(`TRIANGULO: ${a.toFixed(3)}`)

var b = (pi * Math.pow(C,2))
console.log(`CIRCULO: ${b.toFixed(3)}`)

var c = (A + B) * C/2
console.log(`TRAPEZIO: ${c.toFixed(3)}`)

var d = B*B
console.log(`QUADRADO: ${d.toFixed(3)}`)

var e = A*B
console.log(`RETANGULO: ${e.toFixed(3)}`)