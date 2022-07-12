//发布者
class Dep {
  constructor() {
    œ
    this.subs = []
  }

  addSub (watcher) {
    this.subs.push(watcher)
  }

  //在set中，通知改变
  notify () {
    this.subs.forEach(item => {
      item.update()
    })
  }
}

//订阅者
class Watcher {
  constructor(name) {
    this.name = name
  }

  update () {
    console.log(this.name + '发生了update')
  }
}

const dep = new Dep()

//每有一使用，就在get方法中新增一个watcher实例
const w1 = new Watcher('张三使用')
const w2 = new Watcher('王武使用')
const w3 = new Watcher('里斯使用')
dep.addSub(w1)
dep.addSub(w2)
dep.addSub(w3)