var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notaA = parseFloat(lines.shift())
var notaB = parseFloat(lines.shift())

var média= (notaA*3.5 + notaB*7.5)/11
console.log(`MEDIA = ${média.toFixed(5)}`)