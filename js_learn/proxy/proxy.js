const target = {
  foo: 'bar'
};

const handler = {
  get(trapTarget, property, receiver){
    console.log(trapTarget) //{ foo: 'bar' }
    console.log(property)   //foo
    console.log(receiver === proxy) //true
    console.log(trapTarget[property])   //bar
  }
}

// const proxy = new Proxy(target, handler)

//使用反射
const proxy = new Proxy(target, Reflect)

console.log(proxy.foo)