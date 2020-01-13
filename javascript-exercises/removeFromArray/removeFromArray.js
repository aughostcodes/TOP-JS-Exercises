const removeFromArray = function(arr, ...args) {
    let arguments = [...args];
    let result = arguments.forEach(function(e) {
        arr.filter(function(el) {
            if (e !== el) {
                return el;
            };
        });
    });
    return result;
};

module.exports = removeFromArray
