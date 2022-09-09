const str = 'Turtle'.padEnd(8, '1')
console.log(str);

const obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Grinch"
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
})
console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

var arr = Object.entries(obj).map(value => {
  return value[1] + value[0].replace('username', '')
})
console.log(arr);