const age = 12;

var type = age >= 18 ? 'adult'
    : age < 10
        ? 'child'
        : 'young';

console.log(type);

const isLoggedIn = true;

// const access = isLoggedIn === true ? true : false;
// const access = isLoggedIn ? true : false;
const access = isLoggedIn;

console.log(access);