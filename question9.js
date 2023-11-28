//รับแบงค์ หรือ เหรียญมา แล้วต้อง return ว่าคืนเงินทอนเท่าไร
//กำหนดให้มีเงินทอน 10 , 20 , 50 , 100 , 500 , 1000 

function changeMoney(totalAmount , expense){
    
    const banknote = [10, 20 , 50 , 100 , 500 , 1000]
    console.log(banknote.sort((a , b) => b - a));
    //สร้าง object เพื่อจะได้ระบุ key เป็น bank และ value เป็นจำนวนของเงิน
    let changeDetail = {}
    let count
    let changeMoney = totalAmount - expense
    for (let bank of banknote) {
            if(changeMoney >= bank ){
                //หาจำนวนแบงค์แต่ละใบที่จะต้องทอน 
                count = Math.floor(changeMoney / bank)
                changeDetail[bank] = count
                changeMoney = changeMoney - (count * bank)
            }
        }
        
        for (let bank in changeDetail) {
            console.log(`ทอนเงินด้วย ${bank} บาท จำนวนทั้งหมด ${changeDetail[bank]} ใบ`);
        }
        console.log(changeDetail);
}

changeMoney(300  , 200)