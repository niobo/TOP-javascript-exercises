const removeFromArray = function(arr, exclude) {
    exclude = [...arguments].slice(1);
    return arr.filter((x) => !exclude.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
