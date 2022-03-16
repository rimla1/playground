// Example of closure
const outer = () => {
    const a = 5
    const inner = () => {
        console.log(a)
    }
    // inner()
    return inner
}

// outer()

// Instead of this:
// const result = outer()
// result()

// We can do this:
outer()()

//Are functions parameters closed over?

const outer = (b) => {
    const a = 5
    const inner = () => {
        console.log(a, b)
    }
    // inner()
    return inner
}

// outer('Hello World')()
const result = outer('Hello World')
result()


// Relation of Scope Chain and Closures

// Conflicting name Global Variables in JS
const a = 444

const outest = () => {
    const c = 255
    const outer = (b) => {
        const a = 5
        const inner = () => {
            console.log(a, b, c)
        }
    
        return inner
    }
    return outer
}

outest()('Almir Muminovic')()

// // Before Data Hiding
let count = 0;

const incrementCounter = () => {
    count++
    console.log(count)
} 

incrementCounter()
incrementCounter()

// After Data Hiding

const counter = () => {
    let count = 0
    const incrementCounter = () => {
        count++
        console.log(count)
    }
    return incrementCounter

    const decrementCounter = () => {
        count--
        console.log(count)
    }
    return decrementCounter
}

const counter1 = counter()
counter1()
counter1()
counter1()

const counter2 = counter()
counter2()


// Constructor function to make it scalabld with decrementcounter

function Counter ()  {
    let count = 0;

    this.incrementCounter = () => {
        count++
        console.log(count)
    }

    this.decrementCounter = () => {
        count--
        console.log(count)
    }

}

const counter1 = new Counter();
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()

// Constructor with es6

class Counter {
    constructor(count) {
        this.count = count
    }

  
    incrementCounter() {
        this.count++
    }

    decrementCounter() {
        this.count--
    }

    printCount() {
       console.log(this.count)
    }
}

counter1 = new Counter(0)
counter1.incrementCounter()
counter1.printCount()



// Difference between function and class

// Class remebers the value
class Counter {
    constructor(count) {
        this.count = count
    }

    incrementCounter() {
        this.count++
    }

    counterTracker() {
        console.log(this.count)
    }
}

counter1 = new Counter(0)
counter1.incrementCounter() // 1
counter1.incrementCounter() // 2
counter1.incrementCounter() // 3
counter1.incrementCounter() // 4
counter1.incrementCounter() // 5
counter1.counterTracker()

// Function doesn't remebers the value
const counter = (number) => {
    number++
    console.log(number)
}

const add1 = counter(0) // 1
const add2 = counter(0) // 1

// Relation between Garbage Collector and Closures!

const a = () => {
    // Smart Garbage Collector on variable z
    const z = 22;
    // Garbage collector won't work on variable e its closed with function b
    const e = 379;
    const b = () => {
        console.log(e)
    }

    return b;
}

const result = a()
result()