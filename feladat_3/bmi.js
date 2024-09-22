function megjelenítés(){

let mass_in_kg = parseFloat(document.getElementById('mass_in_kg').value);
let height_in_m = parseFloat(document.getElementById('height_in_m').value);

let calc = mass_in_kg / Math.pow(height_in_m, 2);
document.getElementById("output").innerHTML = `This is the BMI: ${Math.round(calc)} `;
}