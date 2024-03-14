const returnEmptyString = function () {
return ""
};

const returnZeroNumber = function () {
    return 0
};


const returnEmptyArray = function () {
    return []
};


const returnEmptyObject = function () {
    return Object()
};

const returnString = function () {
    return 'abc123'
};

const addition = function (x,y) {
    return x + y
};

const subtraction = function (x,y) {
    return x - y
};

const multiplication = function (x,y) {
    return x * y
};

const division = function (x,y) {
return x/y
};

const returnArray = function (arr) {
    return arr
};

const returnFirstIndex = function (arr) {
    return arr[0]
};

const returnSecondIndex = function (arr) {
return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};

const arraySum = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;

};

const arraySubtraction = function () {
    let total = 0
    for(let i = 0; i <array.length; i++){
        total -= array[i]
    } return total;
};

const multiplicationArray = function () {
    var item = 1;
    for (var i = 0; i < array.length; i++) {
        item *= array[i];
    }
    return item;
};

const divisionArray = function () {
    
};

const oddArray = function () {};

const evenArray = function () {};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
