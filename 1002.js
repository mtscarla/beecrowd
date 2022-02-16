var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//area = π . raio2.
//π = 3.14159

var pi = 3.14159
var raio = parseFloat(lines.shift())

var a = pi*(raio*raio)
console.log(`A=${a.toFixed(4)}`) 
