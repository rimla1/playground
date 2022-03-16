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
const c = function () {
    console.log('c called')
    const d = () => {
        console.log('d called')
    }
    return d
}

const result = c()
result()


// Named Function Expression

// Difference between Parameters & Arguments

// First Class Functions

// Arrow Functions