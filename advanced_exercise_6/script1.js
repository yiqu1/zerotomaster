const c = [1, 2, 3, 4, 5];
const d = [].concat(c);
d.push(123);
console.log(c, d);

const obj = { a: 'a', b: 'b', c: {deep:"try and copy me"} };
const clone = Object.assign({}, obj);
const clone2 = { ...obj }
const superClone = JSON.parse(JSON.stringify(obj))
obj.c.deep = 'hahaha';
console.log('obj', obj, 'clone', clone, 'clone2', clone2, 'superClone',superClone);