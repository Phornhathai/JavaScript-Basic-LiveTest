function findMidChar(str) {
    let word = str.split('')


    let mid = word.length / 2
    mid = Math.floor(mid)
    let arr = ""
    // console.log(word[mid]);
    if (word.length % 2 == 0) {
        arr = arr + word[mid-1] + word[mid]
        console.log(arr);
    } else if (word.length % 2 != 0){
        arr = arr + word[mid]
        console.log(arr);
    } else{
        arr = arr + word
        console.log(word);
    }

}

findMidChar("test")
findMidChar("testing")
findMidChar("middle")
findMidChar("a")

