// // Basic Example
// const a = () => {
//     // Local memory
//     console.log(b)
// }
// // Global memory
// const b = 10

// a(); // We have access to global variables

// Advanced Example

const a = () => {
    const b = 10
    const c = () => {
        console.log(b)
    }
    c()
}

a()