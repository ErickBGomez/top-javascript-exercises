const leapYears = function(year) {
    if (year % 100 === 0) { // Century year
        if (year % 400 === 0) {
            return true;
        }
        
        return false;
    } else if (year % 4 === 0){ // Non century year
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
