class Person {
    constructor(name='anonymous',age=0) {
        this.name = name;
    }
    getGreeting() {
        return `hi! this is ${this.name}, I am ${this.age} years old.`;
    }

};
class Traveler extends Person {
    constructor(name,age,home) {
        super(name,age);
        this.home=home;
    }
    getGreeting() {
        const greeting = super.getGreeting();
        return (!!this.home?`${greeting} I am from ${this.home}`:greeting);
    }
};
const me = new Traveler('aashish',21);
console.log(me.getGreeting());
const other = new Traveler('ash',20,'philly');
console.log(other.getGreeting());
