// Lexical Scope (Often confused with closure)

// // global scope
// const x = 1

// const parentFunction = () => {
//     // local scope
//     const myParentValue = 2;
//     console.log(x)
//     console.log(myParentValue)

//     const childFunction = () => {
//         // local scope
//         const myChildValue = 3

//         console.log(x)
//         console.log(myParentValue)
//         console.log(myChildValue)
//     }

//     childFunction()
// }

// parentFunction()



// Closure IIFE(Immediately Invoked Function Expression)
const privateCounter = (() => {
    let count = 0
    console.log(`initial value: ${count}`);
    return () => {count += 1; console.log(count)}
})()

privateCounter();
privateCounter();
privateCounter();


