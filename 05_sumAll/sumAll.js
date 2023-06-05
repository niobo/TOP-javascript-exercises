const sumAll = function(start, end) {
    let res = 0;

    if (!((+start === start) && (+end === end) &&
            (start >= 0) && (end >= 0))) {
        return 'ERROR';
    }

    // change values (start, end = end, start)
    if (start > end) end = start + (start=end) - end;
    for (let i = start; i <= end; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
