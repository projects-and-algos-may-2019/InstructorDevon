// name, age (properties)
// greet(), getOlder() => methods

class Person {
    // new Person(name, age)
    constructor(name, age) {
        // name: string
        this.name = name;
        // age: number
        this.age = age;
        // friend: Person
        this.next = null;
    }
    // blake.greet()
    greet() {
        console.log("Hi my name is " + this.name);
    }
    getOlder() {
        // incrementing age by 1
        this.age++;
    }
}

let somebody = new Person('Amy', 56)