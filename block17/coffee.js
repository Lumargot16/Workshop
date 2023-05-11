// Create a function to include index.js file within this file

const coffeeData = require("./index")

// Declaring the arrays to print (project requirements 2 to 7 in workshop )
const drinkArray = []
const drinksUnder5 = []
const drinkEvenprice = []
let totalDrinks = 0
const seasonalDrinks = []
const seasonalWithWords = []

// Checking all menu and Print all the drinks on the menu 
for (let i=0; i< coffeeData.length; i++){
    drinkArray.push(coffeeData[i].name)

// Print those drinks that cost 5 and under
    if(coffeeData[i].price <=5){
    drinksUnder5.push(coffeeData[i].name)
    }

// Print drinks priced at an even number
    if(coffeeData[i].price %2 === 0){
    drinkEvenprice.push(coffeeData[i].name)
    }

// Print the Total price for all drinks of the menu
    totalDrinks = totalDrinks + coffeeData[i].price

// Print seasonal drinks
    if(coffeeData[i].seasonal === true){
    seasonalDrinks.push(coffeeData[i].name)
    }  
}

// Print seasonal drinks adding the phrase "with imported beans"
for (let i=0; i < seasonalDrinks.length; i++){
  seasonalWithWords.push(`${seasonalDrinks[i]} with imported beans`)
}

console.log(drinkArray)
console.log(drinksUnder5)
console.log(drinkEvenprice)
console.log(totalDrinks)
console.log(seasonalDrinks)
console.log(seasonalWithWords)














