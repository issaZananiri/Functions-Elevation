const calculator = {
    add: function (number1, number2) {
        return number1 + number2
    },
    subtract: function (number1, number2) {
        return number1 - number2
    }
}


const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42