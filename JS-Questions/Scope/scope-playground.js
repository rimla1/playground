// Creating 2 global scopes
const x = 100
const y = 50 

// Function scope
const sum = () => {
    const v = 20
    return x + y
}

console.log(sum() + v) // v is not defined because it's in function scope

// Block Scope
if (x > y) {
    const z = 1
}

console.log(z) // z is not defined because we can't access variable in block scope


// Global scope vs Function scope
const x = 100

const randomFunction = () => {
    const x = 50
    console.log(x)
}

randomFunction() // The result will be 50

// Global scope vs Block Scope
const o = 200;

if (100 > 30) {
    const o = 33
    console.log(o)
}
// The result will be 33