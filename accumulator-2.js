let n = [1,2,-3,4,-5,6,7,8,-9,10]
let accumulator = 0;
let i = 0;
while (i < n.length) {
    if (n[i] > 0) {
        accumulator += n[i]
    }
    i++
}
console.log(accumulator)