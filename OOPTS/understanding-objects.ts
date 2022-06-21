class Person {
    name: string | undefined
    health: number | undefined
    isInvincible: boolean | undefined
    crush: Person | undefined

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const mario = new Person()
mario.name = "Mario"
mario.health = 400
mario.isInvincible = true
mario.greet()



const peach = new Person()
peach.name = "Peach"
peach.health = 100
peach.isInvincible = false
peach.greet()

mario.crush = peach
console.log(mario.crush?.name) // Peach