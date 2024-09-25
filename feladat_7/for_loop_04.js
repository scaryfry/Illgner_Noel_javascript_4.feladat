function megjelenites(){

    let word = document.getElementById('word');

    for (let i = 0; i < word.length; i++) {
        let element = word.charAt(i);
        document.getElementById('output').innerHTML = `${element} <br>`;
    }
}
