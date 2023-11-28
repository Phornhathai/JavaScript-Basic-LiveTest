// //method 1 ใช้ function sort ใน javascript
// function findMindMaxArray(arr1 , arr2){
//     //ใช้ spread merge array
//     let arr = [...arr1,...arr2]
//     //ดูจาก mozila developer sort() returns the reference to the same array
//     let sort = arr.sort((a,b) => a - b)
//     return sort
// }

// let input1 = [1,2,9]
// let input2 = [3,4,22]
// console.log(`เรียงค่าน้อยไปหาค่ามาก ${findMindMaxArray(input1,input2)}`);

// function finMaxdMinArray(arr1 , arr2){
//     //ใช้ spread merge array
//     let arr = [...arr1,...arr2]
//     //ดูจาก mozila developer sort() returns the reference to the same array
//     //เปลี่ยนเป็น b-a
//     let sort = arr.sort((a,b) => b - a)
//     return sort
// }

// let input3 = [1,2,9]
// let input4 = [3,4,22]
// console.log(`เรียกค่ามากไปหาค่าน้อย ${finMaxdMinArray(input3,input4)}`);

//method 2 ใช้ for-loop Bubble Sort Algorithm
function findMindMaxArray1(arr1, arr2){
    let arr = [...arr1,...arr2]
    let n = arr.length

    for (let i = 0; i < n-1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
        if(arr[j] > arr[j+1]){
            //สลับค่าปัจจุบันมีค่ามากกว่าตำแหน่งถัดไป
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
       }
        
    }
    console.log(arr);
}


let input5 = [8,9,9]
let input6 = [3,4,22]
findMindMaxArray1(input5,input6)

function findMaxMinArray1(arr1, arr2){
    let arr = [...arr1,...arr2]
    let n = arr.length

    for (let i = 0; i < n-1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
        if(arr[j] < arr[j+1]){
            //สลับค่าปัจจุบันมีค่ามากกว่าตำแหน่งถัดไป
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        
       }
        
    }
    console.log(arr);
}


let input7 = [8,9,9]
let input8 = [3,4,22]
findMaxMinArray1(input7,input8)