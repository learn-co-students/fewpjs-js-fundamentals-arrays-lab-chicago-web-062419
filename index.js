// Write your solution here!

const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const  removeLast = ["Milo", "Otis", "Garfield"];
const  removeFirst = ["Milo", "Otis", "Garfield"];
const odie = "Odie";

append.push(odie);
prepend.unshift(odie)
removeLast.pop()
removeFirst.shift()

console.log(append);
console.log(prepend);
console.log(removeLast);
console.log(removeFirst)