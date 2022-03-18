// Callback Queue and Event Loop 
console.log('Start')

setTimeout(() => {
    console.log('Callback')
}, 5000)

console.log('End')


// How Event Listeners Work in JS
console.log('Start')

document.getElementById('btn').addEventListener('click', () => {
    console.log('Callback')
})

console.log('End')

