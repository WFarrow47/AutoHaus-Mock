// this is base class - 
// this has functions that we can share and use over and over again
class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    eat(){
        return `${this.name} is eating!`;
    }

    sleep(){
            return `${this.name} is going to sleep zzzzz!`;
    }

    wakeUp(){
        return `${this.name} is waking up!`;

    }
}

module.exports = Animal;


