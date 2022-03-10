// Before ES6 (result: undefined)
console.log(x)
var x = 5

// ES6 (result: Cannot access 'y' before initialization)
console.log(y)
const y = 10

// Function (result: 'Step one' (it works!))
stepOne()
function stepOne () {
    console.log('Step one')
}

// Arrow Function (result: )
stepTwo()
const stepTwo = () => {
    console.log('Step two')
}
