class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){

    contestantCountRef.on("value",(data)=>{
     contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref("/").update({
      contestantCount: count
    });
  }

 

 
}
