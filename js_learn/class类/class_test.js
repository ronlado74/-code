//先写一个人,有名字和年龄
class Person{
  constructor({name,age}){
      this.age=age;
      this.name=name;
  }

  //一个名字介绍的方法
  say(){
      console.log("你好,我叫"+this.name);
  }

  //对于set和get的简单小实例
  //赋值的变量参数与set和get方法名不能一样,否则会形成无限回调
  set name(value){
      this._name=value;
  }

  get name(){
      return this._name;
  }
}
var person =new Person('www',18);
person.set('www')
console.log(person.get()) 