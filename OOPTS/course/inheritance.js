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
    setX(x) {
        this.coordX = x;
    }
    setY(y) {
        this.coordY = y;
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("I am barking");
    }
    returnToOwner() {
        console.log(`I am at (${this.coordX}, ${this.coordY}), and I am returning to owner`);
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
Haski.setX(5);
Haski.setY(8);
Haski.returnToOwner();
