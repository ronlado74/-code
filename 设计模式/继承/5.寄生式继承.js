function objectCopy (obj) {
  function Fun () { };
  Fun.prototype = obj;
  return new Fun();
}

function createAnother (original) {
  let clone = objectCopy(original)
  clone.getName = function () {
    console.log(this.name)
  }
  return clone
}

let person = {
  name: "wxy",
  friends: ["rose", "tom", "jack"]
}

let person1 = createAnother(person);
person1.friends.push("lily");
console.log(person1.friends);
person1.getName(); // wxy

let person2 = createAnother(person);
person2.name = 'wwh'
person2.getName(); // wwh
console.log(person2.friends); // ["rose", "tom", "jack", "lily"]