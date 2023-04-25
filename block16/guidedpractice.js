// define variables budget, price1 and price2
let budget =50;
let price1 = 20;
let price2 = 25; 

// define function that calculates sum of two numbers
const sumOfGifts = (a,b) => a + b;

//invoke sumOfGifts and store in giftTotal variable
const giftTotal = sumOfGifts(price1, price2);

//define a function that calculates total after tax
function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}

//invoke addTax with giftTotal as argument
const giftsWithTax = addTax(giftTotal);

//define function that compares budgete with giftsWithTax and return tru if budget is greater
const holidayShopping = (total, budget) => budget >= total;

//invoke holidayShopping function with budget and giftsWithTax variable
const isOverBudget = holidayShopping(giftsWithTax, budget);

console.log(`I am over budget?!? ${isOverBudget}`);