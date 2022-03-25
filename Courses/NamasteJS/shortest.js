// Shortest js file is empty .js file
// Whenever we run code we create GEC(Global Execution Contex) & window(Big global object with a lot of functions) & this keyword that refers to window if it is used in global space

// Global Space
const a = 10

const func = () => {
    // Function Space
    const b = 5
}

// This refers to console.log(window.a) or console.log(this.a) if this refers to global 
console.log(a)
