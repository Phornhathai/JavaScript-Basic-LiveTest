//รับวันที่ปัจจุบัน วันที่/เดือน/ปี พ.ศ.
//return วันที่ถัดไป 

function nextDay(inputDate){
    let currentDate = inputDate.split(' ')
    let date = Number(currentDate[1])
    let month = currentDate[2]
    let year = Number(currentDate[4])
    let nextDay 
    let nextMonth
    let nextYear

    const dayInMonth = {
        มกราคม : 31,
        กุมภาพันธ์ : isLeapYear(year) ? 29 : 28,
        มีนาคม: 31,
        เมษายน: 30,
        พฤษภาคม: 31,
        มิถุนายน: 30,
        กรกฎาคม: 31,
        สิงหาคม: 31,
        กันยายน: 30,
        ตุลาคม: 31,
        พฤศจิกายน: 30,
        ธันวาคม: 31,
        
    }
    //วันที่ปัจจุบันยังอยุ่ในเดือนที่ input มา
    if(date < dayInMonth[month]){
        nextDay = Number((date + 1))
        return console.log(`วันที่ถัดไป คือ ${nextDay} ${month} ${year}`);
    }else{
        //วันสุดท้ายของเดือน วันถัดไปต้องขึ้นเดือนใหม่
        nextDay = 1
        // ตรวจสอบเดือน เอาค่าตำแหน่งของ key มาระบุเป็น index
        let monthIndex = Object.keys(dayInMonth).indexOf(month)
        // ถ้าเจอ index ของ month แล้ว month มีค่าน้อยกว่า 11 เพราะ index = 0 คือ มกราคม
        if(monthIndex !== -1 && monthIndex < 11){
            nextMonth =  Object.keys(dayInMonth)[monthIndex+1]
            return console.log(`วันที่ถัดไป คือ ${nextDay} ${nextMonth} ${year}`);
        }else{
            //ถ้าเป็นเดือนธันวาคมให้เป็นเดือนมกราคม
            nextMonth = "มกราคม"
            nextYear = Number((year + 1))
            console.log(`วันถัดไป คือ ${nextDay} ${nextMonth} ${nextYear}`);
        }
    }
}

function isLeapYear(year){
    let y = year - 543
    return (((y % 4 === 0) && (y % 100 != 0)) || (y % 400 == 0));
}

nextDay(`วันที่ 28 กุมภาพันธ์ พ.ศ. 2567`);

