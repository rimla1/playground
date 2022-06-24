"use strict";
class Champ {
    setRole(role) {
        this.role = role;
    }
    voice() {
        console.log('I am peeling you!');
    }
}
class Supp extends Champ {
    printInfoAboutSupport() {
        console.log(`Hello, I am ${this.name}, and my role is: ${this.role}`);
    }
    voice() {
        console.log(`You received a message from: ${this.name}, and the message is: `);
        super.voice();
    }
}
class PeelSupport extends Supp {
    whatSupportIsDoing() {
        console.log("I'm peeling you!!!!!!!!!");
    }
}
const janna = new Supp();
janna.name = "Janna";
janna.setRole("Support");
janna.printInfoAboutSupport();
const lulu = new PeelSupport();
lulu.name = "Lulu";
lulu.setRole("Support");
lulu.whatSupportIsDoing();
lulu.printInfoAboutSupport();
lulu.voice();
