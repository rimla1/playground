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

class SuperHero extends Character {
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

const betmen = new SuperHero(575748383, 100, 100)

const printHeroInfo = (hero: SuperHero) => {
    console.log(`Hello my id is: ${hero.getHeroId()}, my health is: ${hero.getHealth()} and my hunger is: ${hero.getHunger()}`)
}

printHeroInfo(betmen)