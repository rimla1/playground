// // Case 1: ES5 with normal order
var x = 5

function getName() {
    console.log(' Almir ')
}

getName();
console.log(x)
// // result:  Almir & 5

// // Case 2: ES5 with reverse order
getSurname()
console.log(y)

var y = 2002;

function getSurname() {
    console.log('Muminovic')
}
// // result: Muminovic & undefined

// Case 3: ES6 with normal order
const x = 27

const getName = () => {
    console.log('Amel')
}

getName()
console.log(x)
// result: Amel & 27

// Case 4: ES6 with reverse order
getSurname()
console.log(y)

const y = 1994

const getSurname = () => {
    console.log('Muminovic')
}
// result: Cannot access 'getSurname' before initialization