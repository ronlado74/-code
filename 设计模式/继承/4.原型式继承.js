function objectCopy (obj) {
  function Fun () { }
  Fun.prototype = obj
  return new Fun
}

let person = {
  name: "wxy",
  age: 18,
  friends: ['jack', 'tom', 'rose'],
  sayName: function () {
    console.log(this.name)
  }
}

let person1 = objectCopy(person);
person1.name = "wwh";
person1.friends.push("lily");
person1.sayName(); // wwh

let person2 = objectCopy(person);
person2.name = "gsr";
person2.friends.push("kobe");
person2.sayName(); // "gsr"
console.log(person1.friends)
console.log(person2.friends)
console.log(person.friends)

/*
  优点：
  1.父类的方法可以复用
  缺点：
  1.父类的引用会被所有子类所共享
  2.子类实例不能向父类传参
 */