"use strict";
class Animal {
    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    move() {
        console.log("I am moving");
    }
    makeNoise() {
        console.log("I am making noise.");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("I am barking");
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meow");
    }
}
const Haski = new Dog();
Haski.makeNoise();
const Nidalee = new Cat();
Nidalee.makeNoise();
