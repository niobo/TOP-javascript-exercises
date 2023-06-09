const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    }
    n1 = 1;
    n2 = 1;
    for (let i = 0; i < n - 2; i++) {
        temp = n2;
        n2 += n1;
        n1 = temp;
    }
    return n2;
};

// Do not edit below this line
module.exports = fibonacci;
