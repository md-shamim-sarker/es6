// Array.prototype.splice()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.splice(1, 3, 15, 16, 17);

console.log(result);
console.log(numbers);

// return slice items and change main array