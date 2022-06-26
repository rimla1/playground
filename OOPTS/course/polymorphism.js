"use strict";
class LOLCHAMPION {
    attack() {
        console.log("I'm attacking!");
    }
    move() {
        console.log("I'm moving");
    }
    regen() {
        console.log("I'm regenerating");
    }
}
class ADC extends LOLCHAMPION {
    attack() {
        super.attack();
        console.log("Firing an arrow");
        this.arrows -= 1;
    }
}
class MID extends LOLCHAMPION {
    attack() {
        super.attack();
        console.log("Casting an ability");
        this.mana -= 1;
    }
}
class TOP extends LOLCHAMPION {
    attack() {
        super.attack();
        console.log("Throwing a rock");
        this.energy -= 1;
    }
}
const ashe = new ADC();
const ryze = new MID();
const gnar = new TOP();
ashe.attack();
ryze.attack();
gnar.attack();
