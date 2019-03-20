
export default class Haiku{
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.oneSyllableWords = ["a", "hi", "few", "butt", "yes", "from", "no", "cool"];
    this.twoSyllableWords = ["hello", "venus", "shallow", "yellow", "bundle", "pillow", "coffee", "table", "graphics"];
  }

  syllableChecker(lineInput){
    // let vowelArr = line.match(/[aeiou]/g);
    let line = lineInput.toLowerCase();
    let vowelArr = ["a", "e", "i", "o", "u"];
    let count = 0;
    for(let i = 0; i < line.length; i++){
      if(vowelArr.includes(line[i])){
        if(i === line.length - 1){
          count++;
        }
        else if(line[i] !== line[i+1]){
          count++;
        }
      }
    }
    if(line[line.length - 1] === "y"){
      count++;
    }
    return count;
  }

  isValid() {
    if (this.syllableChecker(this.line1) === 5 && this.syllableChecker(this.line2) === 7 && this.syllableChecker(this.line3) === 5) {
      return "That is a Haiku!";
    } else {
      return "That is not a Haiku";
    }
  }

  getOneSyllableWord() {
    let randIndex = Math.floor(Math.random() * this.oneSyllableWords.length);
    return this.oneSyllableWords[randIndex];
  }

  getTwoSyllableWord(){
    let randIndex = Math.floor(Math.random() * this.twoSyllableWords.length);
    return this.twoSyllableWords[randIndex];
  }

  generateHaiku() {
    let line1 = this.getOneSyllableWord() + " " + this.getOneSyllableWord() + " " + this.getTwoSyllableWord() + " " + this.getOneSyllableWord();
    let line2 = this.getTwoSyllableWord() + " " + this.getTwoSyllableWord() + " " + this.getTwoSyllableWord() + " " + this.getOneSyllableWord();
    let line3 = this.getOneSyllableWord() + " " + this.getOneSyllableWord() + " " + this.getTwoSyllableWord() + " " + this.getOneSyllableWord();
    let haiku = new Haiku(line1, line2, line3);
    return haiku;
  }
}
