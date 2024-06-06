//Higher order functions
//look in noteService for more examples

//example 1, Method that returns a function
function greaterThan(n) {
  return function(m) {
    return m > n;
  }
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true

//example 2, Method that takes a function as an argument
function noisy(callback) {
  return function(arg) {
    console.log("calling with", arg);
    let val = callback(arg);
    console.log("called with", arg, "- got", val);
    return val;
  }
}