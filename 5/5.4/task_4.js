const sumInput = () => {
    const arr = []
    let number
    let check = true
    let sum = 0
    while (check) {
        number = prompt("Введите число")
        if(!isFinite(number) || number === null || number === "" || number === "0") {
            check = false
        }
        else {
            arr.push(+number)
        }
    }
    for(let num of arr){
        sum += num
    }
    return sum
}

alert(sumInput())