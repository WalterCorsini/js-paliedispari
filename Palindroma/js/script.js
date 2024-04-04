// INPUT
// let userWord = "";
// let result = false;
// let noNumber = false;

// do{
//     userWord = prompt("inserisci una frase o una parola di almeno 3 lettere");
//     // use function that checks if there are numbers in words
//     noNumber = isNanText(userWord);
//     if(noNumber === true){
//         alert("hai inserito dei numeri nella frase")
//         userWord = "";
//     }
// } while(userWord.length < 3);

// // LOGIC
// // function that checks whether a word is a palindrome or not and save in the boolean variable
// result = checkPalindrome(userWord);

// // OUTPUT
// if(result === true){
//     console.log("la tua parola/frase è palindroma");
// } else {
//     console.log("mi dispiace ma non conosci l'italiano");
// }

///////////////////////////////////

//           2 METHOD            //

///////////////////////////////////

// INPUT
// declaration variable
let userWord = "";
let noNumber = false;
let result = false;
// search element to append
let divElem = document.getElementById("result");

// LOGIC
// click send button
document.getElementById("send-btn").addEventListener("click", function () {
    // disabled send button after click
    document.getElementById("send-btn").disabled = true;
    // save input text in variable
    userWord = document.getElementById("user-text").value;
    // function controll number in input text
    noNumber = isNanText(userWord);
    // controll result function
    if (noNumber === true || userWord.length === 0) {
        alert("ERRORE, ci sono numeri o hai lasciata vuota la casella di testo");
        // reload page if there is problem in input
        window.location.reload();
    }
    // function check palindrome word and save variable;
    result = checkPalindrome(userWord);

// OUTPUT
    // controll result function and output
    if (result === true) {
        const finalresult = 'la parola frase: "' + userWord + '" è palindroma';
        let resultElem = document.createElement("h2");
        resultElem = finalresult;
        divElem.append(resultElem);
    } else {
        const finalresult = 'la parola frase: "' + userWord + '" non è palindroma';
        let resultElem = document.createElement("h2");
        resultElem = finalresult;
        divElem.append(resultElem);
    }
});

// reset button
document.getElementById("reset-btn").addEventListener("click", function () {
    window.location.reload();
});

// control form
document.getElementById("form").addEventListener("click", function (event) {
    event.preventDefault();
});
