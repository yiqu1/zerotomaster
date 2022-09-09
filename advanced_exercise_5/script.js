const array = [1, 2, 10, 16]
const double = [];
const newArray = array.forEach(element => {
   double.push(element*2)
});
console.log(double);

const mapArray = array.map(element => element * 2);
console.log("map",mapArray);

const filterArray = array.filter(element => element >= 5);
console.log("filterArray", filterArray);

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num
}, 1)
console.log("reduceArray", reduceArray);
