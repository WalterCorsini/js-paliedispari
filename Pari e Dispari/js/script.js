// INPUT
// declaration variable
// let correct = false;
// let result=0;
// let userNum = 0;
// let browserNum = 0;
// let bet = "";
// //LOGIC
// // choice between even and odd with controll
// do{
// bet = prompt("scommetti sul pari (P) o sul dispari (D)");
// if(bet == "p" || bet == "d" || bet == "D" || bet == "P"){
//     correct = true;
// } 
// } while(correct == false);

// // choice choice between 1 and 5 with controll
// correct = false;
// do{
// userNum = parseInt(prompt("scegli un numero tra 1 e 5"));
// if(isNaN(userNum)){
//     console.log("ciao");
// } else if(userNum >= 1 && userNum <=5){
//     correct = true;
// }

// } while(correct == false);
// console.log("numero utente", userNum);

// // save random number browser from the function rndGenarator;
// browserNum = rndGenerator(1,5);
// console.log("numero pc", browserNum);

// // sum user number and browser number and save inside of variable
// result = browserNum + userNum;
// console.log("totale", result);


// // debug controll
// // console.log("numero utente: ",userNum, " + numero computer: ", browserNum, " = ", result);

// // use the function to know if the result is even or odd and save it in a variable
// correct = oddOrEven(result);
// console.log("if true is Even, else is Odd", correct)

// // OUTPUT
// // check the result of the last function and compare it with the bet made
// if (correct == true){
//     console.log("il numero è pari");
//     if( bet == "p" || bet == "P"){
//         console.log("hai vinto");
//     } else {
//         console.log("hai perso");
//     }
// } else {
//     console.log("il numero è dispari");
//     if( bet == "d" || bet == "D"){
//         console.log("hai vinto");
//     } else {
//         console.log("hai perso");
//     }
// }


/////////////////////////////////////////////////


//                2 METHOD                     //


/////////////////////////////////////////////////
//  solution with form
// submit button
document.getElementById("submit-btn").addEventListener("click", function(){

// INPUT
// declaration variable
let submitBtn = document.getElementById("submit-btn");
submitBtn.disabled = true;
let correct = false;
let result=0;
let userNum = 0;
let browserNum = 0;
let bet = "";
let divElem = document.getElementById("result");

//LOGIC
// choice between even and odd with controll
bet = document.querySelector('input[name="choice"]:checked').value;
// console.log(bet);
userNum = parseInt(document.getElementById("user-number").value);

// console.log(userNum, typeof userNum);
// save random number browser from the function rndGenarator;
browserNum = rndGenerator(1,5);
// console.log(typeof browserNum, browserNum);

// sum user number and browser number and save inside of variable
result = browserNum + userNum;
// console.log(result);

// use the function to know if the result is even or odd and save it in a variable
correct = oddOrEven(result);

// OUTPUT
// check the result of the last function and compare it with the bet made

    if( bet == "pari" && correct == true){
        const finalresult = `la somma dei due numeri è:${result},hai scommesso su ${bet}, e quindi hai vinto`;
        let resultElem = document.createElement("h2");
        resultElem = finalresult;
        divElem.append(resultElem);

    } else if(bet == "dispari" && correct == false){
        const finalresult = `la somma dei due numeri è:${result},hai scommesso su ${bet}, e quindi hai vinto`;
        let resultElem = document.createElement("h2");
        resultElem = finalresult;
        divElem.append(resultElem);
    } else {
        const finalresult = `la somma dei due numeri è:${result},hai scommesso su ${bet}, e quindi hai perso`;
        let resultElem = document.createElement("h2");
        resultElem = finalresult;
        divElem.append(resultElem);
    }
    // console.log(correct);
});

// the page not refresh when click on the button
document.getElementById("submit-form").addEventListener("submit", function(event){
    event.preventDefault();
});

// reset button
document.getElementById("reset-btn").addEventListener("click", function(event){
    window.location.reload();
});


