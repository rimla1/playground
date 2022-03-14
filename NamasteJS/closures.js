// Simple Example of Closure
const x = () => {
    const a = 7
    const y = () => {
        console.log(a)
    }
    y()
}
x()

// Advanced Example of Closure
const x = () => {
    const a = 7
    const y = () => {
        console.log(a)
    }
    return y
}
const result = x()
result()

// "Cool" senior dev approach:
const x = () => {
    const a = 7
    return y = () => {
        console.log(a)
    }
}
const result = x()
result()
console.log(result)

// Gotcha 1
const x = () => {
    let a = 7
    return y = () => {
        console.log(a)
    }
    a = 500
}
const result = x()
result()
console.log(result)

// Gotcha 2 (level deeper inside scope chain)
const z = () => {
    const b = 500
    const x = () => {
        let a = 7
        const y = () => {
            console.log(a, b)
        }
        a = 1000
        y()
    }
    x()
}

z()


// Where to Use closures
/* 
    Module design patterns
    Currying
    Functions like once
    Memoize
    maintaining state in async world
    setTimeouts
    Iterators
    ...any many more
*/