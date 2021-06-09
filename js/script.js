var outputElememnt = document.getElementById("output");

function palindrome(word) {
    var noSpecialSimbol = /[\W_]/g;
    var lowRegStr = word.toLowerCase().replace(noSpecialSimbol, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

var userWord = prompt("Inserisci una parola e verifica se è palindroma!!")

var wordResult = palindrome(userWord)

if (wordResult === true) {
    outputElememnt.innerHTML += "La tua parola " + userWord + " è PALINDROMA!"
} else {
    outputElememnt.innerHTML += "La tua parola: " + userWord + " è NON è palindroma! ;("
}

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function genderNum(num) {
    if (num % 2 === 0) {
        return outputElememnt.innerHTML += "\n" + "Il risultato è PARI" + " " + num;
    } else {
        return outputElememnt.innerHTML += "\n" + "Il risultato è DISPARI" + " " + num;
    }
}


var userChoice = prompt("Scegliere Pari o Dispari scrivendo P o D");
var userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));

var sum = getRandomNumber() + userNumber;

genderNum(sum);

for (var i = 0; i < userChoice.length; i++) {
    if (userChoice[i] === "P" && sum % 2 === 0) {
        outputElememnt.innerHTML += "\n" + "Hai scelto " + userChoice + " Hai Vinto!";
    } else if (userChoice[i] === "D" && sum % 2 !== 0) {
        outputElememnt.innerHTML += "\n" + "Hai scelto " + userChoice + " Hai Vinto!";
    } else {
        outputElememnt.innerHTML += "\n" + "Ha vinto il computer";
    }
}