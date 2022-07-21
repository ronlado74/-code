function objectCopy (obj) {
  function Fun () { }
  Fun.prototype = obj
  return new Fun()
}

function inherit (child, parent) {
  let prototype = objectCopy(parent.prototype)
  child.prototype = prototype
  prototype.constructor = child
}

function Parent (name) {
  this.name = name
  this.friends = ["rose", "lily", "tom"]
}

function Child (name, age) {
  Parent.call(this, name)
  this.age = age
}

inherit(Child, Parent)

let p = new Parent('wxy')

let c = new Child('xx', 18)
console.log(c)