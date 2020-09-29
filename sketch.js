var login, game, user;
var newUserForm;
var userCount, allUsers;
var state = "start";
function setup(){
    var canvas = createCanvas(400,400);
    database =firebase.database();
    game = new Game();
    game.start();

}

function draw(){
    
}