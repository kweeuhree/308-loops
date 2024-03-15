// Part 1: Fizz Buzz

for(let i = 1; i <= 100; i++) {
    if(i%3 === 0 && i%5===0) {
        console.log('Fizz Buzz.' + ` ${i} is divisible by both 3 and 5`)
    } else if(i%3===0) {
        console.log('Fizz.'+ ` ${i} is divisible by 3`)
    } else if(i%5===0) {
        console.log('Buzz.'+ ` ${i} is divisible by 5`)
    } else {
        console.log(i);
    }
}