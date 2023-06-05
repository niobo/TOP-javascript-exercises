const reverseString = function(string) {
    let res = "";
    let chars = string.split('');
    chars.reverse();
    for (let i = 0; i < chars.length; i++) {
        res += chars[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;

console.log(reverseString('Hello, World!'));