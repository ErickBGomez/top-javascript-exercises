const removeFromArray = function(array, ...prompts) {
    for (let prompt of prompts) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === prompt) array.splice(i, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
