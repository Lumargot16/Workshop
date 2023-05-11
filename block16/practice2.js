// In order to assure the budget to buy holidays gifts
// Declaring variables for budget, price1 and price2

const budget = 100;
const price1 = 50;
const price2 = 46;

// Defining a function the sum of the two prices before tax 

function sumOfGifts (gift1, gift2) {
    return gift1 + gift2;
}

// Invoking the sumOfGifts function with price1 and price2 and store in a new variable giftTotal

const giffTotal = sumOfGifts(price1, price2)

// Defining function that calculates the cost of the giftTotal with tax (8%)

function addTax(giftTotal) {
    return giftTotal + (giftTotal * 0.08);
}
// Invoke addTax passing gifsTotal storing in a new variable giftswithTax

const giftsWithTax = addTax(giffTotal);

// Defining a function to compares giftsWithTax and budget variable and return a boolean indicating is it over the budget

function holidayShopping(budget, giftsWithTax) {
    return budget >= giftsWithTax;
}
holidayShopping(budget, giftsWithTax);

const expectedReturn = holidayShopping(budget, giftsWithTax);
console.log(expectedReturn)
