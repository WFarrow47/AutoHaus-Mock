const Gorilla = require('./gorilla');


class TrainedGorilla extends Gorilla {
    constructor(name, weight, hatColor){
        super(name,weight)
        this.hatColor = hatColor;
    }

    //need to create some functions
    removeHat(){
        return `${this.name} who is ${this.weight} kgs is removing her ${this.hatColor} hat`;
    }

    putOnHat(){
        return `${this.name} is putting on her ${this.hatColor} hat`;
    }

    dailyRoutine(){
        return `${super.wakeup()}, ${this.poundChest()},
        ${super.eat()}, ${super.sleep()}`;
    }

}

module.exports = TrainedGorilla;