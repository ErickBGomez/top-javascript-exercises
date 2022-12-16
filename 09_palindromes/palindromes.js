const palindromes = function (text) {
    const lowerCaseText = text.toLowerCase();
    const stringArray = Array.from(lowerCaseText).filter((char) => char >= "a" && char <= "z");

    return stringArray.every((char, index, array) => char === array[array.length - 1 - index]);
};

// Do not edit below this line
module.exports = palindromes;
