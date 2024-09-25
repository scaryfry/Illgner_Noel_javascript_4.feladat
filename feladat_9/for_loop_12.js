function megjelenites(){
    var number = document.getElementById('number');

    for (let i = 0; i < number.length; i++) {
        sumDigits += parseInt(number[i]); 
        countDigits++;
}
let avg = sumDigits / countDigits;
document.getElementById('output').innerHTML = `${avg} az átlaga a számjegyeknek`;


}