// Create a logic for a Pharmacy's checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.

// Declare the given Customer Objects 

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}


const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
// Define a function for checkout systems returning the refill's Total cost including subscription and/or a coupon that customer could have

// Declare a function that calculates customer's initial price prescription per refills 
const initialPrice = (customer) => customer.refills * customer.pricePerRefill

// Declare a function that calculates a 25% discount if the customer has a subscription

const hasSubscription = (customer) => customer.subscription ? initialPrice(customer) - initialPrice(customer) * 0.25 : initialPrice(customer)

// Declare a function that calculates a 10$ discount if the customer has a coupon
const hasCoupon = (customer) => customer.coupon ? hasSubscription(customer) - 10 : hasSubscription(customer)

// Function that return the total price after discount 
function totalPrice(customer) {
    return hasCoupon(customer);
}

// Print expected results 
console.log("Timmy"+"=>"+"Your grand total is $" + totalPrice(timmy))
console.log("Sarah"+"=>"+"Your grand total is $" + totalPrice(sarah))
console.log("Rocky"+"=>"+"Your grand total is $" + totalPrice(rocky))




