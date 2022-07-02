class Hero {
    constructor(public health: number, public hunger: number){
        this.health = health
        this.hunger = hunger
    }


}

const darius = new Hero(200, 100)
console.log(darius.health, darius.hunger)