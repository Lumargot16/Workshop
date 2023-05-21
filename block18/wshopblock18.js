// MULTIPLICATION FUNCTION
// given the following 
 // let x = []
 // let y = []
 // an a function called multiplication 
 // const multiplication = x * y 
 // we expect the function return product x * y
 
// Unit Tests for Multiplication fucntion
// 1. Introduce 5 combinations of two numbers (x,y) and confirm that the reults is the multiplication of both numbers.
// 2. Let x=0 and y=200 and confirm the result as 0.
// 3. Let both x and y empty and confirm the result as 0.
// 4. Let x=0 and y="number" and confirm that the result is NaN.


// concatOdds FUNCTION
// Given 2 arrays of integers, a function called concatOdds should return a single array with only odd numbers in ascending order.
// concatOdds([7, 5, 9, 11], [1, 12, 13, 3, 15, 18]) should result in =>
// => oddArrayUp = [1, 3, 5, 7, 9, 11, 13, 15]

// Unit Tests for concatOdds function
// 1. Introduce  two arrays with diferents integers and confirm that the result should be an array with only odd numbers in ascending order.
// 2. Introduce in one of the arrays a non integer like 2,5 and confirm that receive back an error.
// 3. Introduce only even numbers in both arrays and confirm that the result should be an empty array.
// 4. Introduce in one array a "string" as argument and confirm that receive back an error.
// 5. Introduce null argument in one of the arrays and confirm that receive back an error. 


// SHOPPING CART CHECKOUT
// Given a Shopping Cart Checkout system that allows user to check out as a guest (without an account), or as a logged-in user. 
// They should be allowed to do either, but should be asked if they want to create an account or log in if they chcek out as a guest.

// Functional Tests for Shopping Cart System
  // Using the checkout system as a guest:
    // 1. Going the checkout as a guest (without an account) and check if the system asks if you want to create an account.
    // 2. Choosing not to create an account is the system letting you do the checkout?
    // 3. Is the system checking out the cart? 
    // 4. Are all the products added to the cart included?
    // 5. The final price showed at checking out is correct?
    // 4. If the cart is empty, the systems is showing a message warning this?
    // 5. Choosing to create an account the system is doing the following steps to create it?
  // Using the checkout system as an user:
    // 1. Log in the system and check is this is taking your data
    // 2. The checking out is working? 
    // 3. Are all the products added to the cart included?
    // 4. The final price showed at checking out is correct?
    // 5. If the cart is empty, the systems is showing a message warning this?