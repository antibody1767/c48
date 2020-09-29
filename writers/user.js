class User {
    constructor(){
        this.name = ""
        this.username1 = ""
        this.password1 = ""
        this.email = ""
        
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
        var playerIndexRef = "users/user"+this.index;
        database.ref(playerIndexRef).set({
            name:this.name, 
            username: this.username1,
            password: this.password1,
            email: this.email
        })

    }

    static getAllUsers(){
        var userRef= database.ref("users");
        userRef.on("value",(data)=>{
            allUsers=data.val()
        })
        }

    
}