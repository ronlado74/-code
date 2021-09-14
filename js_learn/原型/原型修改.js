function Person(name){
  this.name = name
}
//修改原型
Person.prototype.getName = function(){}
  let p = new Person('hello')
  console.log(p.__proto__ === Person.prototype) //true
  console.log(p.__proto__ === p.constructor.prototype) // true

// 重写原型
Person.prototype = {
  getName: function() {}
}
let p = new Person('hello')
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.__proto__ === p.constructor.prototype) // false   //p.constructor变成Object

//重写原型后，将constructor指回来
Person.prototype = {
  getName: function() {}
}
var p = new Person('hello')
p.constructor = Person
console.log(p.__proto__ === Person.prototype)        // true
console.log(p.__proto__ === p.constructor.prototype) // true

