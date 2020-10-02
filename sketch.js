var login, game, user;
var newUserForm,homePage;
var userCount, allUsers;
var state = "start";
var userCount=0;

function setup(){
    var canvas = createCanvas(400,400);
    database =firebase.database();
    
    game = new Game();
    game.start();

}

function draw(){
    
}