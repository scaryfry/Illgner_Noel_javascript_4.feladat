function megjelenítés() {
    let player1 = parseInt(document.getElementById('player1').value);
    let player2 = parseInt(document.getElementById('player2').value);

    if (player1 == 1 && player2 == 1 || player1 == 2 && player2 == 2 || player1 == 3 && player2 == 3) {
        document.getElementById('output').innerHTML = "A játék döntetlen!";
    }
    else if (player1 == 1 && player2 == 3 || player1 == 2 && player2 == 1 || player1 == 3 && player2 == 2) {
        document.getElementById('output').innerHTML = "A első játékos nyert!";
    }
    else if (player2 == 1 && player1 == 3 || player2 == 2 && player1 == 1 || player2 == 3 && player1 == 2) {
        document.getElementById('output').innerHTML = "A második játékos nyert!";
    }
    else{
        document.getElementById('output').innerHTML = "Egy vagy több szám is hibás!"
    }
}