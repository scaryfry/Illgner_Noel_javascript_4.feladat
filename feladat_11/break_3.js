function megjelenites(){

let str = document.getElementById('str').value;
for (let i = 0; i < str.length; i++)
    {
        let char = str.charCodeAt(i);
        if ((char >= 65 && char < 91) || (char >= 97 && char < 123))
            document.getElementById("output").innerHTML += `${str.charAt(i)} <br>`;
        else
            break;
    }
}