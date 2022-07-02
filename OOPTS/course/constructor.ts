class Character {

    constructor(hunger: number, health: number){
        this.health = health
        this.hunger = hunger
    }

    private hunger: number
    private health: number

    setHunger(hunger: number): void{
        this.hunger = hunger
    }

    setHealth(health: number): void{
        this.health = health
    }

    getHunger(): number {
        return this.hunger
    }

    getHealth(): number {
        return this.health
    }
}

const jeff = new Character(200, 500)


console.log(jeff.getHealth())
console.log(jeff.getHunger())
