var Person = /** @class */ (function () {
    function Person(firstName, secondName) {
        this.firstName = firstName;
        this.lastName = secondName;
        this.fullName = firstName + ' ' + secondName;
    }
    Person.prototype.sayMyName = function () {
        console.log("My name is " + this.fullName);
    };
    return Person;
}());
var Tiger = /** @class */ (function () {
    function Tiger(name, owner) {
        this.name = name;
        this.owner = owner;
        // private name: string;
        // private owner: Person;
        this.type = 'Cats';
    }
    Tiger.prototype.makeSound = function () {
        return 'Rrrrrrrr';
    };
    Tiger.prototype.eat = function (person) {
        console.log("Today I have eaten " + person.fullName + "!!!");
    };
    return Tiger;
}());
var jimmy = new Person('Jimmy', 'Walker');
jimmy.sayMyName();
var kitty = new Tiger('Kitty', jimmy);
console.log(kitty.makeSound());
kitty.eat(jimmy);
