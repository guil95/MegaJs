class MegaSena{

   constructor() {
      this.numbers = [];
   }
   
   getRandomNumber(){
    let numberRandom = Math.floor(Math.random() * (60 - 1 + 1)) + 1;

    if(this.numbers.indexOf(numberRandom) < 0 ){
      this.addNumber(numberRandom);
    }

    if(this.numbers.length < 6){
      this.getRandomNumber();
    }
  }
  
  addNumber(numberRandom){
    this.numbers.push(numberRandom);
    this.numbers.sort((a, b) => a - b);
  }
}

let mega = new MegaSena();
mega.getRandomNumber();
document.write(mega.numbers);
