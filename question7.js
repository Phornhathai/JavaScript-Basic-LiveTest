
function findSwapValue(array){

    let oddValue = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            // หาตำแหน่งของเลขคี่ 
            oddValue.push(i);
        }
    }
    
    // ตรวจสอบเลขคี่ที่มีจำนวนมากกว่า 1 คู่ หรือถ้ามีอย่างน้อย 1 คู่ก็ต้องสลับ 1 คู่จากค่าซ้ายไปขวาใน array
    if (oddValue.length > 1 || oddValue.length === 1) {
        for (let i = 0; i < oddValue.length; i += 2) {
            // ตรวจสอบว่ายังมีเลขคี่ที่ตำแหน่งถัดไปหรือไม่
            if (i + 1 < oddValue.length) {
                // สลับตำแหน่งของเลขคี่
                let currentIndex = oddValue[i];              
                let nextIndex = oddValue[i + 1];
    
                let temp = array[currentIndex];
                array[currentIndex] = array[nextIndex];
                array[nextIndex] = temp;
            }
        }
    }
      
    console.log(array);
}

findSwapValue([2,1,2,3,1])