class LOLCHAMPION {
    health: number 
    experience: number 

    attack() {
        console.log("I'm attacking!")
    }
    move() {
        console.log("I'm moving")
    }

    regen() {
        console.log("I'm regenerating")
    }
}

class ADC extends LOLCHAMPION {
    arrows: number
    attack() {
        super.attack()
        console.log("Firing an arrow")
        this.arrows -= 1
    }

    // SomeUniqueMethodJustForAdc() {
    //     console.log("Bonus Armor")
    // }
}

class MID extends LOLCHAMPION {
    mana: number
    attack(){
        super.attack()
        console.log("Casting an ability")
        this.mana -= 1
    }
}

class TOP extends LOLCHAMPION {
    energy: number
    attack(){
        super.attack()
        console.log("Throwing a rock")
        this.energy -= 1
    }
}

const ashe: LOLCHAMPION = new ADC()

const ryze: LOLCHAMPION = new MID()
const gnar: LOLCHAMPION = new TOP()

// ashe.attack()
// ryze.attack()
// gnar.attack()

class BlueTeam {
    private lolchamps: LOLCHAMPION[]

    setLolChamps(lolchampions: LOLCHAMPION[]){
        this.lolchamps = lolchampions
    }

    attack() {
        for (let lolchamp of this.lolchamps){
            lolchamp.attack();
        }
    }
}

const skt = new BlueTeam()
skt.setLolChamps([ashe, ryze, gnar])
skt.attack()