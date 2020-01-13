const removeFromArray = function (arr, ...args) {
    let arguments = [...args];
    let newArr = [];
    arguments.forEach((argument) => {
        // console.log(argument);
        arr.filter((el) => {
            if (argument !== el) {
                newArr.push(el);
            }
            console.log(newArr);
            return newArr;
        })
    })
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // [1, 2, 4];

// TO DO:
//removeFromArray
//sumAll
//leapYears
//tempConversion