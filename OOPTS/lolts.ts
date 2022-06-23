class Champion {
    name: string | undefined
    health: number | undefined
    mana: number | undefined
    ultDamage: number | undefined
    ult() {
        console.log(`You have recived a ${this.ultDamage} from ${this.name}`)
    }



    crush: Champion | undefined



    private damageOnQ: number | undefined

    setQdamage(Qdamage: number) {
        if(Qdamage < 0 || Qdamage > 100) {
            console.log("Damage can not be below 0 or above 100")
            return;
        }
        this.damageOnQ = Qdamage
    }

    getQdamage() {
        return this.damageOnQ
    }
}

const diana = new Champion()
diana.name = "diana"
diana.health = 500
diana.mana = 45
diana.ultDamage = 100
diana.ult()

const nidalee = new Champion()
nidalee.name = "nidalee"
nidalee.health = 1000
nidalee.mana = 250
nidalee.ultDamage = 10
nidalee.ult()

diana.crush = nidalee
diana.crush.ult()

diana.setQdamage(75)
console.log(diana.getQdamage())