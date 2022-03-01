var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi= 3.14159
var R= parseInt(lines.shift())

var volume= (4/3.0)*pi* Math.pow(R,3)
console.log(`VOLUME = ${volume.toFixed(3)}`)