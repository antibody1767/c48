class HomePage {
    constructor(){
        this.story = createInput("stories"); 
        this.write = createButton("+");
    }
    display(){
        newUserForm.hide();
        var usr = createElement("h5",user.username1);
        usr.position(20,20);
        this.story.position(200,200);

     
        this.write.position(60,57);
        this.write.mousePressed(()=>{
        updateStory(this.story.value());
        })

    }
}