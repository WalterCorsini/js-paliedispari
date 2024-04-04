


/**
 * check if there are numbers inside the sentence or words
 *
 * @param {string} text1 // word to compare
 * @returns {boolean}
 */
function isNanText(text1){
    let result = false;
    // remove space between word
    text1 = text1.replace(/\s/g, "");
    for(i = 0; i < text1.length; i++){
        if(!isNaN(text1[i] || text1[i] !== "\s")){
            result = true;
            return result;
        }
    }
}


/**
 * compare the mirror word and check whether it is a palindrome or not
 *
 * @param {string} text  // word to compare 
 * @param {string} textReverse // word reverse
 * @returns {boolean}
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
