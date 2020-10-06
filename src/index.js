module.exports = function reverse (n) {
    let newNum = 0;
    if(n % 10 === 0) {
        newNum = n / 10;
    } else if(n < 0) {
        newNum = n * -1
    } else {
        newNum = n
    }
    let newString =  String(newNum).split("").reverse().join("");
    return newString
}
