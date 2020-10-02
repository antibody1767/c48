class NewUserForm {
    constructor(){
        this.name = createInput("name");
        this.username1 = createInput("username");
        this.password1 = createInput("","password");
        this.email = createInput("@gmail.com");
        this.signUp1 = createButton("signUp");
    }
   
    hide(){
        this.username1.hide();
        this.password1.hide();
        this.email.hide();
        this.signUp1.hide();
        this.name.hide();
    }

    display(){
        login.hide();
       this.name.position(200,100);
        this.username1.position(200,150);
        this.password1.position(200,250);
        this.email.position(200,200);
        this.signUp1.position(200,300);

        this.signUp1.mousePressed(()=>{
            user.name=this.name.value();
            user.username1=this.username1.value();
            user.password1=this.password1.value();
            user.email=this.email.value();
          
            
            userCount++;
            user.index=userCount;
            user.updateCount(userCount);
            user.update();

            homePage=new HomePage();
            homePage.display();
        })


     }
}