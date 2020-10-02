class Login {
    constructor(){
        this.username = createInput("username");
        this.password = createInput("","password");
        this.login1 = createButton("Log In");
        this.signUp = createButton("Sign Up");
    }
    hide(){
        this.username.hide();
        this.password.hide();
        this.login1.hide();
        this.signUp.hide();
    }
    display(){
        var title = createElement("h1","project");
        title.position(200,30);
        this.username.position(200,100);
        this.password.position(200,160);
        this.login1.position(200,250);
        this.signUp.position(200,320);

        this.signUp.mousePressed(()=>{
            newUserForm = new NewUserForm();
            newUserForm.display();
            state = "signUp";

        })
        this.login1.mousePressed(()=>{
            for(var u in allUsers){
                if(allUsers[u].username===this.username.value() && allUsers[u].password === this.password.value()){
                    user.name= allUsers[u].name;
                    user.username1 = allUsers[u].username;
                    user.email = allUsers[u].email;
                    user.password = allUsers[u].password;
                }
            }
        })
    }
}