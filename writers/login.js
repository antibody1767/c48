class Login {
    constructor(){
        this.username = createInput("username");
        this.password = createInput("","password");
        this.login = createButton("Log In");
        this.signUp = createButton("Sign Up");
    }
    hide(){
        this.username.hide();
        this.password.hide();
        this.login.hide();
        this.signUp.hide();
    }
    display(){
        var title = createElement("h1","project");
        title.position(200,30);
        this.username.position(200,100);
        this.password.position(200,160);
        this.login.position(200,250);
        this.signUp.position(200,320);
        user.getStoryCount();

        this.signUp.mousePressed(()=>{
            newUserForm = new NewUserForm();
            newUserForm.display();
            state = "signUp";

        })
        this.login.mousePressed(()=>{
            for(var u in allUsers){
                
                if(allUsers[u].username===this.username.value() && allUsers[u].password === this.password.value()){
                    user.index=allUsers[u].index;
                    user.name= allUsers[u].name;
                    user.username = allUsers[u].username;
                    user.email = allUsers[u].email;
                    user.password = allUsers[u].password;

                    homePage=new HomePage();
                    homePage.display();
                    this.hide();
                }
            }
            
        })
    }
}