// 首先apply是Function.prototype上的一个方法
Function.prototype.myCall = function () {
  // 实际上通过arguments对象，我们能拿到所有实参
  // 第一个参数是绑定的this
  var thisArg = arguments[0];
  // 接着要判断是不是严格模式
  var isStrict = (function () { return this === undefined }())
  //如果非严格模式
  if (!isStrict) {
    // 如果在非严格模式下，thisArg的值是null或undefined，需要将thisArg置为全局对象
    if (thisArg === undefined || thisArg === null) {
      thisArg = (function () { return this }())
    } else {
      // 如果是其他原始值，需要通过构造函数包装成对象
      var thisArgType = typeof thisArg
      if (thisArgType === 'number') {
        thisArg = new Number(thisArg)
      } else if (thisArgType === 'string') {
        thisArg = new String(thisArg)
      } else if (thisArgType === 'boolean') {
        thisArg = new Boolean(thisArg)
      }
    }
  }
  // 截取从索引1开始的剩余参数
  var invokeParams = [...arguments].slice(1)
  // 接下来要调用目标函数，那么如何获取到目标函数呢？
  // 实际上this就是目标函数，因为myCall是作为一个方法被调用的，this当然指向调用对象，而这个对象就是目标函数
  // 这里做这么一个赋值过程，是为了让语义更清晰一点
  var invokeFunc = this;
  console.log(invokeFunc, '1111111111')
  // 此时如果thisArg对象仍然是null或undefined，那么说明是在严格模式下，
  // 并且没有指定第一个参数或者第一个参数的值本身就是null或undefined，此时将目标函数当成普通函数执行并返回其结果即可
  if (thisArg === null || thisArg === undefined) {
    return invokeFunc(...invokeParams)
  }
  thisArg.invokeFunc = invokeFunc
  let result = thisArg.invokeFunc(...invokeParams)
  delete thisArg.invokeFunc
  return result
}

//测试
var obj = {
  name: 'jack'
};
var name = 'global';
function getName () {
  return this.name;
}
console.log(getName());
console.log(getName.myCall(obj));



// call函数实现
Function.prototype.myCall1 = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};