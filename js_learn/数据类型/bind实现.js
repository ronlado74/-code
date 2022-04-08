Function.prototype.myBind = function () {
  let thisArg = arguments[0]
  const invokeParams = [...arguments].slice(1)
  const invokeFunc = this
  if (typeof invokeFunc !== 'function') {
    throw new Error('绑定的目标必须是函数')
  }
  return function Fn () {
    //获取执行时传入参数
    const restParams = [...arguments]
    //合并参数
    const allParams = invokeParams.concat(restParams)
    return invokeFunc.apply(this instanceof Fn ? this : thisArg, allParams)
  }
}

//测试
function test (name, age) {
  this.name = name;
  this.age = age;
}
var bound1 = test.myBind('小明')
var obj1 = new bound1(18)
obj1 instanceof bound1 // true
obj1 instanceof test // true


//测试二
var obj = {
  name: 'jack'
};
var name = 'global';
function getName () {
  return this.name;
}
console.log(getName.myBind(obj)())

