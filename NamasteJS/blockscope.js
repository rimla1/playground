// // Block is defines by {}
// {
//     //Also known as Compound Statment
// }

// {
//     // console.log(a)
//     const q = 10
//     console.log(q)
//     // var w = 555 var can run out of block scope
// }
// // console.log(q)
// // console.log(w)

// // if condition expect one statement as a result
// if(true) console.log('One Statement')

// // We need more statements but we store them as block because if condition expect one statement
// if(true) {
//     const name = "Almir"
//     console.log(name)
// }

// // We can define else to use one statement also without {}
// if(false) {
//     const surname = 'Salkovic'
//     console.log(surname)
// } else console.log('Muminovic')


// // How variables works inside Block (Block Scope)
// // We can access value of var a = 10 outside of the block scope, but not let or const
// // console.log(a)
// {
//     var a = 10
//     let b = 20
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// // console.log(a)

// Shadowing in JS
var o = 1000
let p = 2000
const t = 3000;
{
    var o = 100
    let p = 200
    const t = 300;
    console.log(o)
    console.log(p)
    console.log(t)
}

console.log(o)
console.log(p)
console.log(t)

 

