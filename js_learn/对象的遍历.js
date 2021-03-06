const wang = {
  id: 1,
  name: "zhangsan",
  age: 18,
  fn: function (x) {   //或者fn(){}
    return this.id + x;
  },
};

//通过构造函数创建
// var obj = new Object();
// obj.name = "wang";
// obj.age = "18";
// obj.fn = function () {};
// console.log(obj);

//通过工厂函数
function students(name, age) {
  var obj = {
    name,
    age,
    eat: function () {},
  };
  return obj;
}
console.log(students("wang", 18));

//自定义构造函数创建
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.fn = function () {};
}
var person1 = new Person("Nike", 29);
var person2 = new Person("Arvin", 20);

//对象增添属性
wang["boss"] = "fan"; //{ id: 1, name: 'zhangsan', age: 18, boss: 'fan' }
wang.address = "ChongQing"; //{ id: 1, name: 'zhangsan', age: 18, boss: 'fan', address: 'ChongQing' }

//修改属性值
wang.boss = "wang";

//对象删除属性
delete wang.address; // { id: 1, name: 'zhangsan', age: 18, boss: 'fan' }

//读取单个属性
wang.boss; //fan
wang["boss"]; //fan

//对象遍历
//方法一
for (key in wang) {
  if (wang.hasOwnProperty(key)) {
    console.log(key + ":" + wang[key]);
  }
}
//方法二
Object.keys(wang); //[ 'id', 'name', 'age', 'boss' ]
Object.values(wang); //[ 1, 'zhangsan', 18, 'fan' ]
for (key of Object.values(wang)) {
  console.log(key); //将数组中的值取出
}
//方法三
var arr = Object.getOwnPropertyNames(wang); // [ 'id', 'name', 'age', 'boss' ]

//方法四
for (values of Object.entries(wang)) {
  // console.log(values);
}
/* 结果
[ 'id', 1 ]
[ 'name', 'zhangsan' ]
[ 'age', 18 ]
[ 'boss', 'wang' ] */
for ([key, values] of Object.entries(wang)) {
  console.log(key + ":" + values);
}
/* 结果
id:1
name:zhangsan
age:18
boss:wang
*/

for (entry of Object.entries(wang)) {
  console.log(entry);
}

//使用对象方法
var f1 = wang.fn(5); //6

//对象方法this指向问题
var obj = {
  //定义对象
  f: function () {
    //定义对象的方法
    console.log(this); //访问当前对象
  },
  f2: () => {
    console.log(this);
  },
  f3() {
    console.log(this);
  },
};
obj.f(); //此时this指向对象obj
var f1 = obj.f; //引用对象obj的方法f
f1(); //此时this指向对象window
obj.f2(); //此时this指向对象window
