"use strict";
class Player {
    setHealth(health) {
        if (health < 0) {
            console.log("Health can not be below 0");
            return;
        }
        this.health = health;
    }
    getHealth() {
        return this.health;
    }
    setSpeed(speed) {
        if (speed < 0) {
            console.log("Speed can not be below 0");
        }
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
}
const mariov1 = new Player();
// mariov1.health = -3
// mariov1.speed = -10
// console.log(mariov1)
mariov1.setHealth(-3);
mariov1.setHealth(19);
const result = mariov1.getHealth();
console.log(result);
