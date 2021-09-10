console.log([] instanceof Array); 
console.log(Array.isArray([]))
console.log([].__proto__ === Array.prototype)
console.log(Array.prototype.isPrototypeOf([]))
console.log(Object.prototype.toString.call([]))