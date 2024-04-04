// INPUT
let userWord = "";
let result = false;
let noNumber = false;

do{
    userWord = prompt("inserisci una frase o una parola di almeno 3 lettere");
    // use function that checks if there are numbers in words
    noNumber = isNanText(userWord);  
    if(noNumber === true){
        alert("hai inserito dei numeri nella frase")
        userWord = "";
    }
} while(userWord.length < 3);

// LOGIC
// function that checks whether a word is a palindrome or not and save in the boolean variable
result = checkPalindrome(userWord);

// OUTPUT
if(result === true){
    console.log("la tua parola è palindroma");
} else {
    console.log("mi dispiace ma non conosci l'italiano");
}

