class Login {
    constructor(){
        this.username = createInput("username");
        this.password = createInput("","password");
        this.login = createButton("Log In");
        this.signUp = createButton("Sign Up");
    }
    display(){
        var title = createElement("h1","project");
        title.position(200,200);
        this.username.position(200,220);
        this.password.position(200,240);
        this.login.position(200.260);
        this.signUp.position(200,280);

    }
}