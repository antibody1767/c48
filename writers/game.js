class Game {
    constructor(){
    }
    getState(){
        var stateRef = database.ref("state");
        stateRef.on("value",(data)=>{
            state = data.val();
        })

    }
    update(state){
        var stateRef = database.ref('/');
        stateRef.update({
            state:state
        })
        
        
    }
    start(){
        if(state=== "start"){
            user = new User();
            user.getCount();
            login = new Login();
            login.display();
            User.getAllUsers();
        }
    }
}