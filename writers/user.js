class User {
    constructor(){
        this.name = createInput("name");
        this.username1 = createInput("username");
        this.password1 = createInput("","password");
        this.email = createInput("@gmail.com");
        this.signUp1 = createButton("signUp");
    }
    getCount(){
        var userCountref = database.ref("userCount");
        userCountref.on("value",(data)=>{
             userCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            userCount:count
        })
    }
    update(){
        

    }

    
}