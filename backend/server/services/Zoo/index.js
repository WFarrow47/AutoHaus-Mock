const Gorilla = require('./gorilla');
const TrainedGorilla = require('./trainedgorilla');

//create a new object (new instance of George)
const george = new Gorilla('George', 160);

function display(data){
    console.log(data);
}

display(george.climbTree());
display(george.poundChest());
display(george.sleep());
display(george.showVigour());
display(george.dailyRoutine());

// OUTPUT IS:
// George is climbing a tree!
// George is pounding his chest!
// George is going to sleep zzzz!
// George is eating!  George is pounding his chest!
// George is waking up!  George is pounding his chest!  George is eating!  George is going to sleep zzzzz!

// create a new object (new instance of )
const tracey = new TrainedGorilla('Tracey', 200, 'Red');

function display(data){
    console.log(data);
}

display(tracey.removeHat());
display(tracey.putOnHat());



// REMAINDER OF OUTPUT IS:
// Will get parent outputs as well as:-
// Tracey is removing her Red hat
// Tracey is putting on her Red hat


