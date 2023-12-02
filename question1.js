
//

function sum (num){
    let sum = 0
    let arr = String(num)
    arr.split('')
    // console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] ** (i+1)
        console.log(sum);
    }

}

sum(321)