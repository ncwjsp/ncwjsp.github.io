L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = L.reduce((acc, cur) => acc + cur);
console.log("Sum", sum);

let mul = L.reduce((acc, cur) => acc * cur);
console.log("Product", mul);
