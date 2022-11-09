const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    let initialValue;
    let finalValue;

    // Check if parameters are ONLY positive integer numbers (including the 0)
    for (let num of arguments) {
        if (num < 0 || typeof num !== "number") return "ERROR";
    }

    // Ensure that initialValue is less than finalValue
    if (firstNum > secondNum) {
        initialValue = secondNum;
        finalValue = firstNum;
    } else {
        initialValue = firstNum;
        finalValue = secondNum;
    }

    // Add all integers between initialValue and finalValue (inclusive)
    for (let i = initialValue; i <= finalValue; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
