const dinner = {
    hamburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16
};
console.log(Object.values(dinner));
const prices = Object.values(dinner);
let totalCost  = 0;

for (let i = 0; i < prices.length; i++){
    totalCost += prices[i];
}
console.log(totalCost);
