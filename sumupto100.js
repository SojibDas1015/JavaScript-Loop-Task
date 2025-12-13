let sum = 0;
let i = 1;
while (i < 300) {
    sum += i;
    if (sum > 100) {
        console.log(sum)
        break;
    }
}