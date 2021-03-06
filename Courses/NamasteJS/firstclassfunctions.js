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
const fullName = (param1, param2) => {
    console.log(`${param1} ${param2}`)
}
// fullName('Almir', 'Muminovic')
// fullName('Edin', 'Muminovic')
// fullName('Amel', 'Muminovic')

// First Class Functions
const firstClassFunction = (param1) => {
    // console.log(param1)
    // Ability to return a function from a function
    return () => {

    }
}

// Ability to pass function to an argument
// const result = firstClassFunction(() => { })
console.log(firstClassFunction())


// Arrow Functions
const arrFunction = () => {
    
}