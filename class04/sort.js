L = [6, 7, 4, 10, 3, 8, 1, 9, 5, 2];

// comp function in normal way
// function comp(a, b) {
//   return a - b;
// }

// writing in arrow function
// comp = (a, b) => a - b;

// or inside the function
L.sort((a, b) => a - b);

console.log(L);

// reversed
L.sort((a, b) => b - a);
console.log(L);
