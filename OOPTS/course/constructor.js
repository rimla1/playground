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
class SuperHero extends Character {
    constructor(heroId, hunger, health) {
        super(hunger, health);
        this.heroId = heroId;
    }
    setHeroId(heroId) {
        this.heroId = heroId;
    }
    getHeroId() {
        return this.heroId;
    }
}
const betmen = new SuperHero(575748383, 100, 100);
const printHeroInfo = (hero) => {
    console.log(`Hello my id is: ${hero.getHeroId()}, my health is: ${hero.getHealth()} and my hunger is: ${hero.getHunger()}`);
};
printHeroInfo(betmen);
