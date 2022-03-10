// Global Scope - accessible from anywhere
const a = 30

const gcode = () => {
    console.log(a);
}

gcode()

// Function Scope - inaccessible from outside function

const fcode = () => {
    const b = 20
}

console.log(b)

// Block Scope - inaccessible from outside block ({})

if (100 > 20) {
    // var c = 70 (we can console log this)
    const c = 70 
}

console.log(c)