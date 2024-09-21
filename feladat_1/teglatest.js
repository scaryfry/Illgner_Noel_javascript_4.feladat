  function megjelenítés(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    let surface = 2 * (a * b + a*c + b*c)
    let volume = a * b * c

    document.getElementById("output1").innerHTML = `Surface area: ${surface} `;
    document.getElementById("output2").innerHTML = `Volume: ${volume}`; 
  }
