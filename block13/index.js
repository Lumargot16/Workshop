console.log("----------------IS TRUTHY---------------------")

// Creating an input
const input = "I am a string"
// conditional to print true
if (input === "I am a string") {
    console.log("true");
} 
// conditionals for falsy values
    else if (input === false) {
        console.log("The boolean value false is falsy")
        }

    else if (input === null) {
        console.log("The null value is falsy")
        }

    else if (input === undefined) {
        console.log("undefined is falsy")
        }
    else if (input === 0) {
        console.log("The number 0 is falsy (the only falsy number)")
        }
    else if (input === "") {
        console.log("The empty string is falsy (the only falsy string)")
        }

console.log("------------------------------------------------");
console.log("-------------NUMBER LINE------------------------");

// Creating parameters to sum + and comparing results
let num1 = 99
let num2 = -2
let sum = (num1 + num2)

// Conditional when sum + is greater than 100
if (sum >=101){
        console.log("101 is greater than 100");
        }   

// Conditional when sum + is greater than 0   
    else if (sum > 0) {
        console.log(sum + " " + "is greater than 0")
            }

// Conditional when sum + is equal to 0
        else if (sum === 0) {
        console.log("0 is equal to 0")
            }

// Conditional when num1 is a negative number
        else if (sum < 0 && num2===0) {
        console.log(num1 +" "+"is a negative number")
        }

    console.log("------------------------------------------------");
    console.log("-------------GREATER THAN 5------------------------");

// Two parameters to be compared
let numX = 6
let numY = 4

// Stablishing a comparison with two conditions to meet (true)
if (numX >= 5 && numY >= 5) {
    console.log(true);
 }
 else console.log(false)

 console.log("------------------------------------------------");
 console.log("-------------PAIR and COMPARE------------------------");

 // Parameters to be compared
 let param1A = 0
 let param1B = false
 let param2A = "horse"
 let param2B = "horse"
// using if/else statements and strict equality operators for one truthy set of parameters 
 if (param1A === param1B || param2A === param2B) {
    console.log(true);
 }
 else (false)
