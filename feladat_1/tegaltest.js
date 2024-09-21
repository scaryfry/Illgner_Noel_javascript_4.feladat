var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var console = document.getElementById('c').value;

let surface = 2 * (a * b + a*c + b*c)
let volume = a * b * c


document.getElementById("output1").innerHTML = `Surface area: ${surface} `;
document.getElementById("output2").innerHTML = `Volume: ${volume}`;
