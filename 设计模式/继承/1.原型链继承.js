//将父类的实例作为子类的原型

/*
  优点：
  1、父类方法可以复用
  缺点：
  1.父类的所有引用属性（info）会被所有子类共享，更改一个子类的引用属性，其他子类也会受影响
  2.子类型实例不能给父类型构造函数传参
 */
function Parent () {
  this.isShow = true
  this.info = {
    name: 'wxy',
    age: 18
  }
}

Parent.prototype.getInfo = function () {
  console.log(this.info)
  console.log(this.isShow)
}

function Child () { }

Child.prototype = new Parent()

let child1 = new Child();
child1.info.gender = "男";
child1.getInfo();  // {name: "yhd", age: 18, gender: "男"}


let child2 = new Child();
child2.getInfo();  // {name: "yhd", age: 18, gender: "男"}
child2.isShow = false

console.log(child2.isShow); // false
console.log(child1.isShow); // true

child2.info.gender = "女"

console.log(child1.info) //{ name: 'wxy', age: 18, gender: '女' }
child1.getInfo()  //{ name: 'wxy', age: 18, gender: '女' }

