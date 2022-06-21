"use strict";
var _a;
class Person {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const mario = new Person();
mario.name = "Mario";
mario.health = 400;
mario.isInvincible = true;
mario.greet();
const peach = new Person();
peach.name = "Peach";
peach.health = 100;
peach.isInvincible = false;
peach.greet();
mario.crush = peach;
console.log((_a = mario.crush) === null || _a === void 0 ? void 0 : _a.name); // Peach
