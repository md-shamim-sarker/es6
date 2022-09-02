class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('Hello');
    }
    myFunction() {
        let array = [1, 2, 3];
        array.find(function() { // no need to 2nd parameter this for arrow function
            this.test();
        }, this); // Notice this second parameter this
    }
}

const shamim = new Student('shamim', 30);
shamim.myFunction();