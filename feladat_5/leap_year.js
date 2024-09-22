function megjelenítés(){
    let year = parseInt(document.getElementById('year').value)

    if(year % 4 == 0){
        document.getElementById('output').innerHTML = "Ez az év egy szökőév!";
    }
    else{
        document.getElementById('output').innerHTML = "Ez az év nem szökőév!";
    }
} 