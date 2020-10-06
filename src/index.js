module.exports = function reverse (n) {
    let newNum = n;
    if(n < 0) {
        newNum = n * -1
    }
    return +String(newNum).split("").reverse().join("");
}
