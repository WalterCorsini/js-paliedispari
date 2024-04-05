/**
 * generates a number between two number
 *
 * @param {number} min  // the smallest of the values
 * @param {number} max  // the greatest of values
 * @returns {number} // result of the function
 */
function rndGenerator(min, max){
    const result = Math.floor(Math.random() * (max - min +1)+1);
    return result;
}


/**
 * Checking a number if it is even or odd
 *
 * @param {number} number  // number to check
 * @returns {string}      // control result
 */
function oddOrEven(number){
    let result = "";
    if(number % 2 === 0){
        result = "pari";
        return result;
    } else {
        result = "dispari";
        return result;
    }
    
}