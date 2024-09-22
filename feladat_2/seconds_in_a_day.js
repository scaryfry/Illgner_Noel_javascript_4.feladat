function megjelenítés(){
let currentHours = parseInt(document.getElementById('currentHours').value)
let currentMinutes = parseInt(document.getElementById('currentMinutes').value);
let currentSeconds = parseInt(document.getElementById('currentSeconds').value);

let hourToSeconds = currentHours * 60 * 60; //50400
let minuteToSeconds = currentMinutes * 60; //2040
let wholeDay = 24 * 60 * 60; //86400
let remainingSeconds = wholeDay - (hourToSeconds + minuteToSeconds + currentSeconds);

document.getElementById("output").innerHTML = `This is how much minute left: ${remainingSeconds} `;
}