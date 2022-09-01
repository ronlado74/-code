let petEat = function (pet) {
  pet.eat()
}
let Dog = function () { }
Dog.prototype.eat = function () {
  console.log('吃肉')
}
let Cat = function () { }
Cat.prototype.eat = function () {
  console.log('吃鱼')
}

petEat(new Dog())
petEat(new Cat())


