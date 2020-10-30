let myF = function (array) {
    let odd = []
    for (let i of array) {
        if (i % 2 !== 0) {
            odd.push(i)
        }
    }
    return odd
}
let od = myF([1, 2, 3, 4, 5, 6, 7, 8, 9,11,12,13,14])

console.log(od)