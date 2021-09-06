var name = "window"; //其实是window.name = 'window'

var A = {
  name: "A",
  sayHello: function () {
    console.log(this.name);
  },
};

var B = {
  name: "B",
};

A.sayHello(); //A
A.sayHello.call(B); //B
A.sayHello.call();  //window,严格模式中为undefined


//剪头函数
var A1 = {
  name: 'A1',
  sayHello: () => {
     console.log(this.name)
  }
}

A1.sayHello();// 还是以为输出A ? 错啦，其实输出的是window