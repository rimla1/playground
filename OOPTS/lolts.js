"use strict";
class Champion {
    ult() {
        console.log(`You have recived a ${this.ultDamage} from ${this.name}`);
    }
}
const diana = new Champion();
diana.name = "diana";
diana.health = 500;
diana.mana = 45;
diana.ultDamage = 100;
diana.ult();
const nidalee = new Champion();
nidalee.name = "nidalee";
nidalee.health = 1000;
nidalee.mana = 250;
nidalee.ultDamage = 10;
nidalee.ult();
diana.crush = nidalee;
diana.crush.ult();
