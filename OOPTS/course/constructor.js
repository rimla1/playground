"use strict";
class Character {
    setHunger(hunger) {
        this.hunger = hunger;
    }
    setHealth(health) {
        this.hunger = health;
    }
    getHunger() {
        return this.hunger;
    }
    getHealth() {
        return this.hunger;
    }
}
const jeff = new Character();
jeff.setHealth(100);
jeff.setHunger(100);
console.log(jeff.getHealth());
