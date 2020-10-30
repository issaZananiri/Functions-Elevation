let numbers = [1, 2, 3,4,5,6,7,8,9]

const fun = function (arr, num) {
    for (let i of arr) {
        if (num === numbers[i]) {
            return true
        }
    }
    return false
}

console.log(fun(numbers, 7))