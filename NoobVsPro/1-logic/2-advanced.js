const numberToAccountingString = number => {
    if (number != null) {
        if (number < 0) {
            return `(${Math.abs(number)})`
        } else  {
            return number.toString()
        }
    }
}

// Better naming
// Checking for null value

console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-55))