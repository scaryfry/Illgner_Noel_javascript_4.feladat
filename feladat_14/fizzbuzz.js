function fizzBuzz() {
    let output = ""; 

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "fizzbuzz, ";
        } else if (i % 3 === 0) {
            output += "fizz, ";
        } else if (i % 5 === 0) {
            output += "buzz, ";
        } else {
            output += i + ", ";
        }
    }

    document.getElementById("output").textContent = output.slice(0, -2);
}

window.onload = fizzBuzz;