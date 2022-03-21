// //Map

// // Example 1: double, triple, binary

// const arrMap = [5, 1, 3, 2, 6]

// const double = (x) => {
//     return x * 2
// }

// const triple = (x) => {
//     return x * 3
// }

// const binary = (x) => {
//     return x.toString(2);
// }

// const outputMap = arrMap.map(binary)
// console.log(outputMap)

// // We can pass function too

// const outputMap1 = arrMap.map((x) =>  x * 3)

// console.log(outputMap1)

// // Filter

// // Example 1: Filter odd values

// const arrFilter = [2, 4, 5, 6, 7, 9]

// const greaterThanFour = (y) => {
//     return x > 4
// }

// const isOdd = (y) => {
//     return y % 2
// }

// const isEven = (y) => {
//     return y % 2 === 0;
// }

// const outputFilter = arrFilter.filter(isEven)
// console.log(outputFilter)

// // Reduce

// // Example 1: sum 

// const arrReduce = [120, 130, 140, 150, 160]

// const findSum = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(findSum(arrReduce))

// const findSum = (acc, curr) => {
//     acc = acc + curr
//     return acc
// }

// const output = arrReduce.reduce(findSum, 0)

// console.log(output)

// // Example 1: max value of array 
const arrMax = [10, 25, 50, 100, 1001, 54]

const output = arrMax.reduce((max, curr) => {
    if (curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(output)