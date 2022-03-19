// // Callback Queue and Event Loop 
// console.log('Start')

// setTimeout(() => {
//     console.log('Callback')
// }, 5000)

// console.log('End')


// // How Event Listeners Work in JS
// console.log('Start')

// document.getElementById('btn').addEventListener('click', () => {
//     console.log('Callback')
// })

// console.log('End')

// How fetch() function works

console.log('Start')

setTimeout(() => {
    console.log('Hello from callback function after 5s')
}, 5000)

fetch('https://api.netflix.com.example.not.real')
.then(() => {
    console.log('Hello from callback function using fetch function')
})

document.getElementById('btn').addEventListener('click', () => {
    console.log('Hello from cbf on clicking button')
})

console.log('End')