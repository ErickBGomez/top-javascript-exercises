const findTheOldest = function(array) {

    const currentYear = new Date().getFullYear();

    let oldestToYoungest = array.sort((a, b) => {
        const currentPerson = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
        const nextPerson = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;

        return (currentPerson > nextPerson) ? -1 : 1;
    });

    return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
