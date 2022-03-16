// Function Statement aka Function Declaration
function a() {
    console.log('a called')
}

// Function Expression
const b = function() {
    console.log('b called')
}

// Function Declaration

// Anonymous Function
const c =  () => {
    console.log('c called')
    const d = () => {
        console.log('d called')
    }
    return d
}




// Named Function Expression

const e = function xyz() {
    console.log('Hello World')
    console.log(xyz)
}

// Difference between Parameters & Arguments

// First Class Functions

// Arrow Functions