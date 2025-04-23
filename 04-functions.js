function sum (a,b) {

    return a+b;
}

console.log(sum(30,10));     //40

function multiple (a, b) {
    return a*b;
}

console.log(multiple(30,4));

const bigNumber = multiple(2345,987273);
console.log(bigNumber);


setTimeout (function () {
    console.log("hey, you doing great!!")
}, 2000);