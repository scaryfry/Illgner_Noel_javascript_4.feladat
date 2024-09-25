function megjelenites(){
    let number = document.getElementById('number').value;
    for (let row = 0; row < number; row++) {
        let line = "";
        for (let col = 0; col < number; col++) {
            if (row === 0 || row === number - 1 || col === 0 || col === number - 1 || row === col) {
                line += "%";
            } else {
                line += " ";
            }
        }
        document.getElementById('output').innerHTML = `${line}`;
    }
}