// Array.prototype.filter()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.filter(values => {
    return values > 6;
});

console.log(result);