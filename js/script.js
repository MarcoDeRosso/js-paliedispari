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



// var userWord = prompt("Inserisci una parola");


// function palindrome(word) {
//     lungezzaWord = word.lenght;
//     var wordReverse = " ";

//     for (var i = (userWord - 1); i >= 0; i--) {
//         wordReverse += userWord[i];
//     }
//     return wordReverse;
// }
// var wordPalindrome = palindrome(userWord);

// if (userWord == wordPalindrome) {
//     outputElememnt.innerHTML += "La tua parola è un palindromo!"
// } else {
//     outputElememnt.innerHTML += "Non è un palindromo!"

// }

// function palindroma(parola) {
//     var wordReverse = parola.split("").reverse().join("");
//     return wordReverse;
// }

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genderNum(num) {
    if (num % 2 === 0) {
        return "P"
    } else {
        return "D"
    }
}


var userChoice = prompt("Scegliere Pari o Dispari scrivendo P o D").toUpperCase();
while (userChoice !== "P" && userChoice !== "D") {
    alert("attenzione devi inserire o pari o dispari scrivendo P o D")
    var userChoice = prompt("Scegliere Pari o Dispari scrivendo P o D").toUpperCase();
}
var userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert("attenzione devi inserire un numero da 1 a 5");
    var userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
}

var sum = getRandomNumber(1, 5) + userNumber;

if (userChoice === genderNum(sum)) {
    outputElememnt.innerHTML += "\n" + "Hai scelto " + userChoice + " Hai Vinto!" + " " + sum;
} else {
    outputElememnt.innerHTML += "\n" + "Ha vinto il computer" + " " + sum;
}