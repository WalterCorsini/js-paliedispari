// INPUT
// declaration variable
let correct = false;
let result=0;
let userNum = 0;
let browserNum = 0;
let bet = "";
//LOGIC
// choice between even and odd with controll
do{
bet = prompt("scommetti sul pari (P) o sul dispari (D)");
const pari = "pari";
const dispari = "dispari";
if(bet == "p" || bet == "d" || bet == "D" || bet == "P"){
    correct = true;
} 
} while(correct == false);

// choice choice between 1 and 5 with controll
correct = false;
do{
userNum = parseInt(prompt("scegli un numero tra 1 e 5"));
if(isNaN(userNum)){
    console.log("ciao");
} else if(userNum >= 1 && userNum <=5){
    correct = true;
}

} while(correct == false);

// save random number browser from the function rndGenarator;
browserNum = rndGenerator(1,5);

// sum user number and browser number and save inside of variable
result = browserNum + userNum;

// debug controll
// console.log("numero utente: ",userNum, " + numero computer: ", browserNum, " = ", result);

// use the function to know if the result is even or odd and save it in a variable
correct = oddOrEven(result);


// OUTPUT
// check the result of the last function and compare it with the bet made
if (correct == true){
    console.log("il numero è pari");
    if( bet == "p" || bet == "P"){
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
} else {
    console.log("il numero è dispari");
    if( bet == "d" || bet == "D"){
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
}