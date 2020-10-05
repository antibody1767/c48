class NewUserForm {
    constructor(){
        this.name = createInput("name");
        this.username = createInput("username");
        this.password = createInput("","password");
        this.email = createInput("@gmail.com");
        this.signUp = createButton("signUp");
    }
   
    hide(){
        this.username.hide();
        this.password.hide();
        this.email.hide();
        this.signUp.hide();
        this.name.hide();
    }

    display(){
        login.hide();
        this.name.position(200,100);
        this.username.position(200,150);
        this.password.position(200,250);
        this.email.position(200,200);
        this.signUp.position(200,300);

        this.signUp.mousePressed(()=>{
            user.name=this.name.value();
            user.username=this.username.value();
            user.password=this.password.value();
            user.email=this.email.value();
          
            
            userCount++;
            user.index=userCount;
            user.updateCount(userCount);
            user.update();

            homePage=new HomePage();
            homePage.display();
            this.hide();
        })


     }
}