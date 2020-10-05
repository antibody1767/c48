class HomePage {
    constructor(){
        this.story = createInput("stories"); 
        this.write = createButton("+");
        this.read=createButton("Read a story");
        this.storyNum = createInput("input a random index"); 
    }
    display(){
        
        
        var usr = createElement("h5",user.username);
        usr.position(20,20);
        this.story.position(200,200);
        
        this.read.position(60,100);
        this.storyNum.position(60,150);
        
        this.write.position(60,57);
        this.write.mousePressed(()=>{
            
            user.updateStory(this.story.value());
            var s = createElement("h5","your story is updated");
            s.position(200,250);

        })
        this.read.mousePressed(()=>{
            console.log("hi")
            var storyRef="stories/story"+this.storyNum.value();
            console.log(storyRef);
            database.ref(storyRef).on("value",(data)=>{
                story= data.val();
            })
            console.log(story);
        })

    }
}