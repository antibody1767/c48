class User {
    constructor(){

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
}