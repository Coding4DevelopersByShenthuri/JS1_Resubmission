function Person(name, age) {
    return {
        name: name,
        age: age,
        output: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person = Person('Mathi', 23);
person.output(); 