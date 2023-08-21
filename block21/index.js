// Defining a constructor function Car (object)

class Car {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

// Using the method getDescription to return info about Car
    getDescription(){
        return `${this.make} and model ${this.model} of the year ${this.year}`
    }
}
class ElectricCar extends Car {
    constructor(make, model, year, range){
        super(make, model, year)
        this.range = range
    }
    getDescription(){
    return `${this.make} and ${this.model} of the year ${this.year} and a range of ${this.range}`
    }
}
const teslaEcar = new ElectricCar('Tesla', 'Model S', 2019, 300)
console.log(teslaEcar.getDescription())