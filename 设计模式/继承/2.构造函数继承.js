function Parent () {
  this.info = {
    name: 'wxy',
    age: 18
  }
}

function Child () {
  Parent.call(this)
}

let child1 = new Child()
child1.info.gender = '男'
console.log(child1.info) //{ name: 'wxy', age: 18, gender: '男' }

let child2 = new Child()
console.log(child2.info) //{ name: 'wxy', age: 18 }


/*
1.参数传递 ​ 
  相比于原型链继承，盗用构造函数的一个优点
  在于可以在子类构造函数中像父类构造函数传递参数。
 */

function Father (name, gender) {
  this.gender = gender
  this.info = { name: name }
}

Father.prototype.getInfo = function () {
  console.log(this.info)
}

function Son (name, gender) {
  Father.call(this, ...arguments)
  this.age = 18
}

let son1 = new Son("yhd", '女');
console.log(son1.info.name); // "yhd"
console.log(son1.age); // 18

let son2 = new Son("wxb", '男');
console.log(son2.info.name); // "wxb"
console.log(son2.age); // 18

//son2.getInfo() //报错

/* 
  优点：
  1.可以在子类构造函数中向父类传参数
  2.父类的引用属性不会被共享

  缺点：
  1.子类不能访问父类原型上定义的方法
  （即不能访问Parent.prototype上定义的方法），
   因此所有方法属性都写在构造函数中，
   每次创建实例都会初始化
*/
