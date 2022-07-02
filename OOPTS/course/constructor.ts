class Character {
    private hunger: number
    private health: number

    setHunger(hunger: number): void{
        this.hunger = hunger
    }

    setHealth(health: number): void{
        this.hunger = health
    }

    getHunger(): number {
        return this.hunger
    }

    getHealth(): number {
        return this.hunger
    }
}

const jeff = new Character()
jeff.setHealth(100)
jeff.setHunger(100)

console.log(jeff.getHealth())
console.log(jeff.getHunger())
