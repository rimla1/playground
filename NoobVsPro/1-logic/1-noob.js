// const toAccounting = n => {
//     if (n < 0) {
//         return '(' + Math.abs(n) + ')'
//     } else if (n >= 0) {
//         return n
//     }
// }

// There is no need for another if check

// const toAccounting = n => {
//     if (n < 0) {
//         return '(' + Math.abs(n) + ')'
//     } else{
//         return n
//     }
// }

// This function gives back strings and number values

const toAccounting = n => {
    if (n < 0) {
        return '(' + Math.abs(n) + ')'
    } else{
        return n.toString()
    }
}

// Bad names and forgets to think about null & undefined values


// console.log(toAccounting(null))
console.log(toAccounting(3))
console.log(toAccounting(0))
console.log(toAccounting(-20))