// What is a Callback Function in JavaScript

// const a = (x) => {
//     x()
//     console.log('a function')
// }

// a(() => {
//     console.log('Hello from callback function')
// })

// Example

// setTimeout(() => {
//     console.log('Hello after 5s from callback function')
// }, 5000)

// JavaScript is a synchronous and single-threaded languange

// Blocking the main thread

// Power of Callbacks?

// Deep about Event Listeners
// let count = 0
// document.getElementById('clickMeId').addEventListener('click', () => {
//     count++
//     console.log(`Button clicked: ${count}`)
// })



// Closures Demo with Event Listeners
const counterClosure = () => {
    let count = 0
    document.getElementById('clickMeId').addEventListener('click', () => {
    
    console.log('Button clicked: ', ++count )
})
}
counterClosure()

// Scope Demo with Event listeners

// Garbage Collection & removeEventListeners