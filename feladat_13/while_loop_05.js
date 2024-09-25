
function printDivisors() {
    let output = ""; 

    let number = 10;

    while (number <= 30) {
        output += number + ": "; 

        let divisor = 1;
        let divisors = [];

        while (divisor <= number) {
            if (number % divisor === 0) {
                divisors.push(divisor); 
            }
            divisor++;
        }

        output += divisors.join(", ") + "<br>";

        number++;
    }

    document.getElementById("output").innerHTML = output;
}

window.onload = printDivisors;
