function megjelenites(){
    let number = document.getElementById('number').value;

    for(i = 1; i < number; i++){
        let factorial = number * i;
        document.getElementById('output').innerHTML = `${number} faktoriálisa: ${factorial}`;

    }
}