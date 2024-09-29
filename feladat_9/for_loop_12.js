function megjelenites(){
    var number = document.getElementById('number').value;
    let sumDigits = 0;
    for (let i = 0; i < number.length; i++) {
        sumDigits += parseInt(number.charAt(i)); 
}
let avg = sumDigits / number.length;
document.getElementById('output').innerHTML = `${avg} az átlaga a számjegyeknek.`;


}