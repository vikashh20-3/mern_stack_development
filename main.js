const imports = require("./import"); //import from the other file

console.log(imports.i);
console.log("hi");

var a = 9;
var b = 23;
var c = 32;
const arr = [3, "vi", 3, 231];
console.log(arr[0]);
console.warn(a + b + c);
// JAVASCRIPT FUNDAMENTAL

var x = 3;
let y = 34;
y = 29;
1;
const z = 10;
// z = 32; can't able to change the const value after decalring
console.log(x + y + z);

if (x === 3) {
  //with three operators it also check the data type of the varible if x='3' it will show error if there is two operartors then this is okay
  console.log("matched");
}

var arrr = [9, 32, 5, 23, 5, 6, 4, 6];
let result = arrr.filter((item) => {
  //we can perform various actions lke equal to ,greater than ,less than etc
  return item >= 3;
});
console.log(result);
