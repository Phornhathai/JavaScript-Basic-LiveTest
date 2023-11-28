function printChar(input) {
    // input = String(input)
    // input.split('')
    let arr = ""
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j <= i; j++) {
            arr = arr + input[i]
        }
    }
    let result = arr.toUpperCase()
    return result
}
// console.log(printChar(["ABCDE"]));
console.log(printChar(['A','B','C','D']));

