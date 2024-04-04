


/**
 * compare the mirror word and check whether it is a palindrome or no
 *
 * @param {string} text  // word to compare 
 * @param {string} textReverse // word reverse
 * @param {boolean} result
 */
function checkPalindrome (text){
    let textReverse = "";
    for (i = text.length-1; i >= 0; i--){
        textReverse += text[i];
        console.log(textReverse);
    }
    if(textReverse === text){
        result = true;
        return result;
    } else {
        result = false;
        return result;
    }
}