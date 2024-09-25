      function printNumbersWithSkip() {
        let divisibleBy3Count = 0; 
        let output = ""; 

        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0) {
                divisibleBy3Count++; 

                if (divisibleBy3Count === 1 || divisibleBy3Count === 2 || divisibleBy3Count === 3) {
                    continue; 
                }

                if (divisibleBy3Count === 3) {
                    divisibleBy3Count = 0;
                }
            }
            output += i + ", ";
        }

        document.getElementById("output").textContent = output.slice(0, -2);
    }

    window.onload = printNumbersWithSkip;