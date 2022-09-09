const basket = ['apples', 'oranges', 'grapes'];

// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
// 2
basket.forEach(element => {
  console.log(element);
});

// 3 arrays, strings
for (const item of '2as') {
  console.log(item);
}

const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}
// 4 objects
for (const  key in detailedBasket) {
  console.log(detailedBasket[key]);
}