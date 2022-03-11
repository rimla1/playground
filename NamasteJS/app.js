const n = 2

const square = (number) => {
    const answer = number * number
    return answer
}

const result2 = square(n)
const result4 = square(4)

console.log(result2)
console.log(result4)

// How JavaScript Works
   // Everytime we run javascript Execution Contex is created
        // Variable enviroment(Memory) and Thread of execution(Code)
           // Execution Contex have 2 phases:
            // Memory creation phase
            // Code execution phase
   // JavaScript is a synchronous single-threaded languange
    
   // Whenever new function is invoked a brand new execution contex is created

   // Call Stack: Best way of handling nested execution contex
