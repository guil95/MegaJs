class Sena{

   constructor(qtdNumbers) {
      this.qtdNumbers = qtdNumbers > 60 ? 0 : qtdNumbers
      this.numbers = []
   }
   
	 getRandomNumber(){
     let numberRandom = Math.floor(Math.random() * 60) + 1

    if(this.numbers.indexOf(numberRandom) < 0 ){
      this.numbers.push(numberRandom)
      this.numbers.sort((a, b) => a - b)
    }

    if(this.numbers.length < this.qtdNumbers){
      this.getRandomNumber();
    }
  }
}

//let mega = new Sena(60);
//mega.getRandomNumber();
//document.write(mega.numbers.join(','))
