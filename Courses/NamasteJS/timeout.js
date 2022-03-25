// // Example
// // const x = () => {
// //     const number = 1;
// //     setTimeout(() => {
// //         console.log(number)
// //     }, 3000)
// //     console.log('Almir Muminovic')
// // }

// // x()

// // First it's prints Almir Muminovic
// // After 3s it prints 1
// // Javascript is synchronous single-threaded and js doesn't wait
// // SetTimeout takes a callback function and attach a timer of 3s to it and it's stores it somewhere and js proceed, once that timer expires it takes that function and put it in a call stack

// // Advanced Example

// const x = () => {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }

// x() // 6 6 6 6 6 

// // Simple Solution

// const x = () => {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }

// x() // 1 2 3 4 5

// Hard solution using (var)
const x = () => {
    for (var i=1; i <= 5; i++) {
        const close = r => {
            setTimeout(() => {
                console.log(r)
            }, r * 1000)
        }
        close(i)
    }
}

x()