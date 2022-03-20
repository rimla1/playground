// Trust issues with setTimeout()
console.log("Start")

setTimeout(() => {
    console.log('callback after 5s')
}, 5000)

console.log("end")

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime()
}

console.log('While expires')

// setTimeout with 0s delay

console.log('start')

setTimeout(() => {
    console.log('first callback in code from top-bottom with timer 1s')
}, 1000)

setTimeout(() => {
    console.log('second callback in code from top-bottom with timer 0s')
}, 0000)

console.log('end')