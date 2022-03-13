// let/const vs var
console.log(a) // ReferenceError: Can't access value 'a' before initialization
console.log(b) // Undefined

const a = 10
var b = 100

// Example of Temporal Dead Zone (Time since this let/const variable was hosted till its initialization some value)
console.log(y)
// Temporal Dead Zone
// Temporal Dead Zone
const y = 10

// Reference error example: Whenever we try to access a variable in TDZ it gives ReferenceError
console.log(z)
// Temporal Dead Zone
// Temporal Dead Zone
const z = 200

// Syntax error example: We can't name same values with let/const
const t = 10
// t = 50 We can reassign value like this, but not using let same name of variable (In a case of a let, const won't work)
let t = 100
console.log(t)

// Const vs Let

// let approach works, we can initialize value later on
let l;
l = 140
console.log(l)

// const approach doesn't work, SyntaxError: Missing initializer in const declaration
const c;
c = 30
console.log(c)

// TypeError example Can't assign new value to the const later
const b = 100
b = 1000;
console.log(b)