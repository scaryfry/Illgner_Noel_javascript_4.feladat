function megjelenítés(){
    let grade = parseInt(document.getElementById('grade').value);

    if(grade == 5){
        document.getElementById('output').innerHTML = "Az érdemjegyed betűvel: A";
    }
    if(grade == 4){
        document.getElementById('output').innerHTML = "Az érdemjegyed betűvel: B";
    }
    if(grade == 3){
        document.getElementById('output').innerHTML = "Az érdemjegyed betűvel: C";
    }
    if(grade == 2){
        document.getElementById('output').innerHTML = "Az érdemjegyed betűvel: D";
    }
    if(grade == 1){
        document.getElementById('output').innerHTML = "Az érdemjegyed betűvel: F";
    }
    else{
        document.getElementById('output').innerHTML = "Ilyen eredményed nem lehet!"
    }
}