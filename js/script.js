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

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

function genderNum(num) {
    if (num % 2 === 0) {
        return "P"
    } else {
        return "D"
    }
}


var userChoice = prompt("Scegliere Pari o Dispari scrivendo P o D").toUpperCase();
var userNumber = parseInt(prompt("Scegliere un numero da 1 a 5"));

var sum = getRandomNumber() + userNumber;

if (userChoice === genderNum(sum)) {
    outputElememnt.innerHTML += "\n" + "Hai scelto " + userChoice + " Hai Vinto!" + " " + sum;
} else {
    outputElememnt.innerHTML += "\n" + "Ha vinto il computer" + " " + sum;
}