const array = [1, [2, 3], [4, 5]];
console.log(array.flat());

const array1 = [1, 2, [3, 4, [5]]];
console.log(array1.flat());

const entries = ['bob', 'sally', , , , 'cindy'];
console.log(entries.flat());

const newArray = array.flatMap(item => item + 0);
console.log(newArray);
const newArray1 = array1.flatMap(item => item + 0);
console.log(newArray1);

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
console.log(Object.fromEntries(userProfiles));

try {
  console.log(bob+'hi');
} catch {
  console.log('You messed up');
}