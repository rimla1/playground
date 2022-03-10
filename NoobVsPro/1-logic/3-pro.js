const numberToAccountingString = number => {
    if (number == null ) return
    if (number < 0) return `(${Math.abs(number)})`
    return number.toString()
}

// guard clause (we returning after if check) -- getting rid of nesting

console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-55))