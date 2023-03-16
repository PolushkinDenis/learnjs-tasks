// const sumTo = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// при n=100000 идет переполнение стека, рекурсивный метод не работает

// const sumTo = (n) => {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }

const sumTo = (n) => {
    return n * (n + 1) / 2;
}

alert(sumTo(23)) 