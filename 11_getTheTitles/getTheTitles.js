const getTheTitles = function(arr) {
    res_arr = []
    for (obj of arr) {
        res_arr.push(obj.title);
    }
    return res_arr;
};

// Do not edit below this line
module.exports = getTheTitles;
