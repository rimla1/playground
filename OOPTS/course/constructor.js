"use strict";
class Character {
    constructor(hunger, health) {
        this.health = health;
        this.hunger = hunger;
    }
    setHunger(hunger) {
        this.hunger = hunger;
    }
    setHealth(health) {
        this.health = health;
    }
    getHunger() {
        return this.hunger;
    }
    getHealth() {
        return this.health;
    }
}
const jeff = new Character(200, 500);
console.log(jeff.getHealth());
console.log(jeff.getHunger());
