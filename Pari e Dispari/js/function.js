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
 * @returns {boolean}      // control result
 */
function oddOrEven(number){
    if(number % 2 === 0){
        result = true;
        return result;
    } else {
        result = false;
        return result;
    }
}