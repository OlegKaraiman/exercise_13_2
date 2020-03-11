// eslint-disable-next-line no-unused-vars
function getFibNum(n) {
    let num1 = 0,
        num2 = 1,
        fib = 1;
    if (n <= fib) {
        return fib;
    } else {
        for (let i = 1; i <= n; i++) {
            fib = num1 + num2;
            num1 = num2;
            num2 = fib;
        }
        return fib;
    }
}
