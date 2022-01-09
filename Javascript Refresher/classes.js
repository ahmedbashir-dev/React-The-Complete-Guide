class Human{
    constructor(gender){
        this.gender = gender;
    }

    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(name,gender){
        super(gender);
        this.name = name;
    }

    printName(){
        console.log(this.name);
    }
}

// const person = new Person("Ahmed Bashir");
// person.printName();

const person = new Person("Ahmed Bashir","Male");
person.printName();
person.printGender();