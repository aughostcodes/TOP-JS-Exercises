const repeatString = function(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    if (num < 0) {
        return 'ERROR';
    }
    return result;
}

module.exports = repeatString
