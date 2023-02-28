const filterRange = (arr, a, b) => {
    const newArr = []
    arr.map(item => {
        if(item >= a && item <= b){
            newArr.push(item)
        }
    })
    return newArr
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)