class LOLCHAMPION {
    health: number | undefined
    experience: number | undefined

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

}

class MID extends LOLCHAMPION {

}

class TOP extends LOLCHAMPION {
    
}

const ashe = new ADC()
const ryze = new MID()
const gnar = new TOP()