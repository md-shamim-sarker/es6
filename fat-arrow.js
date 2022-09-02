const javascript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    function1: function() { // Here arrow function creates error
        this.libraries.forEach(element => {  // Here normal function creates error
            console.log(`${this.name} loves ${element}`);
        });
    },

};
javascript.function1();

function Person(name, age) { // Here arrow function creates error
    this.name = name;
    this.age = age;
}
const shamim = new Person('Shamim', 30);
console.log(shamim);