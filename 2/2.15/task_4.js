function pow(x,n) {
    let res = x
    for(let i = 1; i<n; i++) {
        res *= x
    }
    return res
}

let x = prompt("Введите первое число")
let n
do {
    n = prompt("Введите степень")
} while(n < 1)

alert(pow(x, n))
