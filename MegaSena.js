class MegaSena{

   constructor() {
      this.numbers = []
   }
   
	 getRandomNumber(){
     let numberRandom = Math.floor(Math.random() * (60 - 1 + 1)) + 1

    if(this.numbers.indexOf(numberRandom) < 0 ){
      this.numbers.push(numberRandom)
      this.numbers.sort((a, b) => a - b)
    }

    if(this.numbers.length < 6){
      this.getRandomNumber();
    }
  }
}

//let mega = new MegaSena();
//mega.getRandomNumber();
//console.log(mega.numbers)
