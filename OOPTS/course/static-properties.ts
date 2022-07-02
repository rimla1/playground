class Characterr {

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

class SuperHeroo extends Character {
    private heroId: number

    constructor(heroId: number, hunger: number, health: number){
        super(hunger, health)
        this.heroId = heroId
    }

    setHeroId(heroId: number){
        this.heroId = heroId
    }

    getHeroId(){
        return this.heroId
    }
}

const spidermen = new SuperHeroo(999, 100, 100)
