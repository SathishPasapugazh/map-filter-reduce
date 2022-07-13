/*var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

/*function num(x){
  return (x*2);
}
const ss= numbers.map(num);
console.log(ss);*/

//Filter - Create a new array by keeping the items that return true.
/*function num(x){
return x > 10
} 
var ss = numbers.filter(x)

console.log(ss);*/

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.*/
import emojipedia from "./emojipedia"

function mean(x){
  return (x.meaning.substring(0, 99))
};


const xx= emojipedia.map(mean);

console.log(xx);
