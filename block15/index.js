const customer = {
    firsName : "jake",
    lastName : "smith",
    email : "jaekSmih!aol.com",
    phone : undefined,
    zipcode : "631",
    favoriteFlavors : 32,
    cupSize : "medium",
    favoriteStore : "Target",
    firstVisit : false
};

customer["email"] = "Jak3Smith1992@email.com"
customer["phone"] = 3195551234
customer["zipcode"] = "63132"
customer["favoriteFlavors"] = "coffe"+ "," + "strawberry"+ " " + "and"+ " "+ "matcha"

delete customer["zipcode"]
delete customer["favoriteStore"]

customer.toppings = "chocolate sprinkles"+","+" "+"water straws"+" "+"and"+" "+"gummy bears"
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = 5.32

console.log(Object.values(customer));

for (const property in customer){
    console.log(property)
}