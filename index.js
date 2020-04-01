// eslint-disable-next-line no-unused-vars
function getFibNum(n) {
    // eslint-disable-next-line no-magic-numbers
    const arrFibNumb = [0, 1];
    let num1 = 0,
        num2 = 1,
        fib = 1;
    if (n < fib) {
        return arrFibNumb;
    } else {
        for (let i = 1; i <= n; i++) {
            fib = num1 + num2;
            arrFibNumb.push(fib);
            num1 = num2;
            num2 = fib;
        }
        return arrFibNumb;
    }
}



