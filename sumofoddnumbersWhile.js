// sum of odd numbers
let i = 81;
let oddSum = 0;
while(i<=131)
{
    if(i%2 !=0)
    {
        oddSum += i;
    }
    i++;
}
console.log(oddSum);


// sum of odd numbers
let i = 81;
let evenSum = 0;
while(i<=131)
{
    if(i%2 ==0)
    {
        evenSum += i;
    }
    i++;
}
console.log(evenSum);