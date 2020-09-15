const multiplyBy = function(num1) {
    return function(num2) {
        console.log(num1 * num2)
        return num1 * num2
    }
}

const multiplyByTwo = multiplyBy(2)
multiplyByTwo(4)
multiplyByTwo(10)