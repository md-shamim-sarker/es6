const array = [1, 2, 3, 4, 5];

const result = array.reduce((previous, current) => {
    return previous + current;
}, 0);

console.log(result);