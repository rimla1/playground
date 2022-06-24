"use strict";
class Champ {
    setRole(role) {
        this.role = role;
    }
}
class Supp extends Champ {
    printInfoAboutSupport() {
        console.log(`Hello, I am ${this.name}, and my role is: ${this.role}`);
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
