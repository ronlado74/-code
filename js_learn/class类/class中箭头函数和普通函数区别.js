
//class中的方法如果是普通函数方法，该方法会绑定在构造函数的原型上；但是如果方式是箭头函数方法，该方法会绑定在构造函数上
class Foo {
  constructor(obj) {
    this.name = obj.name
    this.age = obj.age
  }

  getName = () => {
    console.log('name', this.name)
    console.log('Foo', this)
  }

  getAge () {
    console.log('age', this.age)
  }
}

const foo = new Foo({ name: 'wxy', age: 12 })

foo.getName()
foo.getAge()

let a = foo.getName
a() //this会指向构造函数

let b = foo.getAge
b() //报错，全局调用 ，this指向undefined，因为class默认是严格模式