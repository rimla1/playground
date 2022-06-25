"use strict";
class Character {
    move() {
        console.log("I'm moving");
    }
    playVoiceRecording() { }
}
class Mario extends Character {
}
class Luigi extends Character {
}
class Peach extends Character {
    move() {
        console.log("I'm flying");
    }
}
const peachh = new Peach();
peachh.move();
