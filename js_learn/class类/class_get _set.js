let _age = 18;
class family {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log("my work");
  }
  get age() {
    return _age;
  }
  set age(value) {
    _age = value;
  }

  static must() {
    console.log("wxyshuai");
  }
}

let son = new family("wxy");
console.log(son.age); //18
console.log(family.must());
