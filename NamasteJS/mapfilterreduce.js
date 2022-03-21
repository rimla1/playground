//Map

// Example 1: double, triple, binary

const arr = [5, 1, 3, 2, 6]

const double = (x) => {
    return x * 2
}

const triple = (x) => {
    return x * 3
}

const binary = (x) => {
    return x.toString(2);
}

const output = arr.map(binary)
console.log(output)



