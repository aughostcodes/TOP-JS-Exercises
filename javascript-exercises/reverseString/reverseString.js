const reverseString = function(str) {
    str = str.split('');
    let result = str.reverse().join('');
    return result;
}

module.exports = reverseString
