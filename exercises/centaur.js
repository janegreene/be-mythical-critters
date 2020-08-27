class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.count = 0;
  }
  shoot(i){
    if (this.cranky === true) {
      return 'NO!'
    }
    this.count++;
    return 'Twang!!!'
  }
  run(){
    this.count++;
    if (this.count === 3){
      this.cranky = true;
      this.count = 0;
    }
    return 'Clop clop clop clop!!!'
  }
}
module.exports = Centaur;
