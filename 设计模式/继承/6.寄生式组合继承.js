function objectCopy (obj) {
  function Fun () { };
  Fun.prototype = obj;
  return new Fun();
}

function inheritPrototype (Child, Parent) {
  let prototype = objectCopy(Parent.prototype); //创建对象
  prototype.constructor = Child; // 增强对象
  Child.prototype = prototype; // 赋值对象
}

function Parent (name) {
  this.name = name;
  this.friends = ["rose", "lily", "tom"]
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}


function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(Child, Parent);
Child.prototype.sayAge = function () {
  console.log(this.age);
}

let child1 = new Child("wxy", 18);
child1.sayAge(); // 18
child1.sayName(); // wxy
child1.friends.push("jack");
console.log(child1.friends); // ["rose", "lily", "tom", "jack"]

let child2 = new Child("yl", 22)
child2.sayAge(); // 22
child2.sayName(); // yl
console.log(child2.friends); // ["rose", "lily", "tom"]

/*
  优点：
  1.只调用一次父类构造函数
  2.Child可以向Parent传参
  3.父类方法可以复用
  4.父类的引用属性不会被共享
 */