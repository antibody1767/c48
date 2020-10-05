class User {
    constructor(){
        this.index=null;
        this.name = "";
        this.username = "";
        this.password = "";
        this.email ="";
        
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
        console.log(playerIndexRef)
        console.log(this.name)
        database.ref(playerIndexRef).set({
            index:this.index,
            name:this.name, 
            username: this.username,
            password: this.password,
            email: this.email
        })

    }

    getStoryCount(){
        var storyCountref = database.ref("storyIndex");
        storyCountref.on("value",(data)=>{
             storyIndex = data.val();
        })
    }
    updateStory(story){
        storyIndex++;
        database.ref("/").update({
            storyIndex:storyIndex
        })
        var storiesRef = "stories/story"+storyIndex;
        database.ref(storiesRef).set({
            author:this.name,
            email: this.email,
            story: story
        })
      
    }
    

    static getAllUsers(){
        var userRef= database.ref("users");
        userRef.on("value",(data)=>{
            allUsers=data.val()
        })
        }

    
}