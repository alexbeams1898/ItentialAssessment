/**
 * Calculates the average of two or more numbers
 * @param  {...object} numbers The numbers that will be averaged
 * @return {number} The average of the numbers
 */
function getAverage(...numbers) {

    // Ensure that all args are converted to a number 
    // Note: args that cannot be converted will result in NaN
    numbers = numbers.map(x => Number(x));

    // Throw error if there are not enough args to average
    if (numbers.length < 2)
        throw "At least two numbers are expected.";

    // Throw error if any args are NaN
    if (!numbers.every((x) => { return !isNaN(x) }))
        throw "Numbers contain a value that is NaN or cannot be converted to a number.";

    // Return average
    return numbers.reduce((x, y) => x + y) / numbers.length;

}

module.exports = { getAverage };