// // Example of closure
// const outer = () => {
//     const a = 5
//     const inner = () => {
//         console.log(a)
//     }
//     // inner()
//     return inner
// }

// // outer()

// // Instead of this:
// // const result = outer()
// // result()

// // We can do this:
// outer()()

//Are functions parameters closed over?

const outer = (b) => {
    const a = 5
    const inner = () => {
        console.log(a, b)
    }
    // inner()
    return inner
}

outer('Hello World')()