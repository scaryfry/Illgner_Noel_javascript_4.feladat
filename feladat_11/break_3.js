function ellenorzes(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function megjelenites() {
    let str = document.getElementById('str');
    for (let i = 0; i < str.length; i++) {
        if (!ellenorzes(str[i])) {
            break;
        }
        console.log(str[i]);
    }
}