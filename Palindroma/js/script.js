// INPUT
let userWord = prompt("inserisci una parola");
let result = false;

userword = checkPalindrome(userWord);

// LOGIC
// function that checks whether a word is a palindrome or not and save in the boolean variable
result = checkPalindrome(userWord);

// OUTPUT
if(result === true){
    console.log("la tua parola è palindroma");
} else {
    console.log("mi dispiace ma non conosci l'italiano");
}

