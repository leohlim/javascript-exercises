const leapYears = function(num, bool) {

    // Check if a given year is a leap year
    // First check whether the given year is divisible by 4.

    if ((num % 400 == 0) || (num % 100 != 0) && (num % 4 == 0)) {
        bool = true;
        
    } else {
        bool = false;
    }

    return bool;
};

// Do not edit below this line
module.exports = leapYears;
