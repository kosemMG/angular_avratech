interface Human {
    firstName: string;
    lastName: string;
    fullName: string;
}

class Person implements Human {
    public firstName: string;
    public lastName: string;
    public fullName: string;
    constructor(firstName, secondName) {
        this.firstName = firstName;
        this.lastName = secondName;
        this.fullName = firstName + ' ' + secondName;
    }

    sayMyName() {
        console.log(`My name is ${this.fullName}`);
    }
}

class Tiger {
    // private name: string;
    // private owner: Person;
    private type = 'Cats';

    constructor(private name: string, private owner: Person) {}

    makeSound() {
        return 'Rrrrrrrr';
    }

    eat(person: Person){
        console.log(`Today I have eaten ${person.fullName}!!!`);
    }
}

const jimmy = new Person('Jimmy', 'Walker');
jimmy.sayMyName();

const kitty = new Tiger('Kitty', jimmy);
console.log(kitty.makeSound());
kitty.eat(jimmy);


