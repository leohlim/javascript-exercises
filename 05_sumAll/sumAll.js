const sumAll = function(int1, int2) {

    // Loop through numbers
    // Initialize at int1
    // As long as i <= int 2, add 1
    // When int 2 is reached, terminate loop

    let finalSum = 0;

    if (int1 < 0 || int2 < 1 || typeof(int1) !== "number" || typeof(int2) !== "number") {
        return "ERROR";
    }

    if (int1 > int2) {
        startingVal = int2;
        endingVal = int1;
    } else {
        startingVal = int1;
        endingVal = int2;
    }

    for (let i = startingVal; i <= endingVal; i++)
    {
        finalSum += i;
    }

    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
