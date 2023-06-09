const palindromes = function (s) {
    exclude_symbols = ['.', ',', ' ', '!', ';', '?'];
    for (symbol of exclude_symbols) {
        s = s.split(symbol).join('');
    }
    arr1 = [...s];
    arr2 = arr1.slice();
    arr2.reverse();
    // console.log(arr1.join(''));
    // console.log(arr2.join(''));
    return arr1.join('').toLowerCase() == arr2.join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
