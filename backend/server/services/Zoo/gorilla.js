const Animal = require('./animal');

// Gorilla class is a child of Animal and uses the extends keyword to set itself as a sub class
// this means that all the properties/behaviour avail in Animal can be accessed in Gorilla
class Gorilla extends Animal {
    constructor(name, weight){
        super(name,weight)
    }

    //need to create some functions
    climbTree(){
        return `${this.name} who is ${this.weight} kgs is climbing a tree!`;
    }

    poundChest(){
        return `${this.name} is pounding his chest!`;
    }

    showVigour(){
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine(){
        return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
    }



}

//if i made a new object, need to pass in name and weight
// const g = new Gorilla('Dan', 150);

module.exports = Gorilla;