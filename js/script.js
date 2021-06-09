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
        return outputElememnt.innerHTML += "\n" + "Il risultato è PARI";
    } else {
        return outputElememnt.innerHTML += "\n" + "Il risultato è DISPARI";
    }
}


var userChoice = prompt("Scegliere Pari o Dispari scrivendo P o D");
var userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));

var sum = getRandomNumber() + userNumber;

genderNum(sum);