

function lastSum(input) {
    let num = String(input)
    num = num.split('')
    
    while (num.length > 1) {
        let sum = 1
        for (let index = 0; index < num.length; index++) {
            sum = sum * num[index]
            console.log(sum);
        }
        num = sum
        num = String(num)
        num = num.split('')
        
    }

}

// lastSum(999)
lastSum(39)