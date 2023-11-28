//จับคู่ค่าใน array เพื่อให้รวมกันได้เท่ากับค่า target


function sumPosition(arr, target) {
    let arrAnswer = {};

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let complement = target - currentNum;

        if (arrAnswer[complement] !== undefined) {
        // ถ้าพบค่าที่บวกกันได้ ให้ return 2 ตำแหน่ง คือตำแหน่งที่มีอยู่ใน key อันแรกเจอ และ ตำแหน่งปัจจุบันที่รวมค่ากันได้ target 
            return [arrAnswer[complement], i];
        }
        // บันทึกตำแหน่งของ key currentNum ใน object arrAnswer แต่ถ้าเจอค่าเท่ากับ target เลยให้ return ตำแหน่งนั้นทันที
        if(currentNum == target){
            return i
        }else{
            arrAnswer[currentNum] = i;
        }
    }

    return null;
}

let result = sumPosition([1, 2, 5, 6], 2);
console.log(result);
