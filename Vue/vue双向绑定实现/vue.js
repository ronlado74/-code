class Vue {
  constructor(option) {
    this.$el = document.querySelector(option.el)
    //data是函数还是对象
    this.$data = option.data instanceof Function ? option.data() : option.data
    this.$methods = option.methods
    this.$watchEvent = {}
    this.proxyData()
    this.observer()
    this.compile(this.$el)
  }
  //数据劫持
  proxyData() {
    for (let key in this.$data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key]
        },
        set(newVal) {
          this.$data[key] = newVal
        },
      })
    }
  }
  //观察者模式
  observer() {
    for (let key in this.$data) {
      let value = this.$data[key]
      let _this = this
      Object.defineProperty(this.$data, key, {
        get() {
          return value
        },
        set(val) {
          value = val
          //update
          _this.$watchEvent[key].forEach((item) => {
            item.update()
          })
        },
      })
    }
  }
  //vue模版解析
  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType === 1) {
        // 判断是否有@click属性
        if (item.hasAttribute('@click')) {
          let vmKey = item.getAttribute('@click') // 获取属性值
          item.addEventListener('click', () => {
            this.$methods[vmKey.trim()].call(this)
          })
        }
        // 判断是否有v-model属性,完成数据双向绑定
        if (item.hasAttribute('v-model')) {
          let vmKey = item.getAttribute('v-model') // 获取属性值
          vmKey = vmKey.trim()
          item.value = this[vmKey]
          item.addEventListener('input', () => {
            this[vmKey] = item.value
          })
        }
        // 递归调用compile,解析子节点，直到nodeType为3
        if (item.childNodes.length > 0) {
          this.compile(item)
        }
      }
      // 文本节点
      if (item.nodeType === 3) {
        let reg = /\{\{(.*?)\}\}/g // 匹配{{}}
        let text = item.textContent // 获取文本内容
        item.textContent = text.replace(reg, (match, vmKey) => {
          let watcher = new Watcher(this, vmKey.trim(), item, 'textContent') // 创建watcher,相当于给每个文本都添加了订阅者
          if (this.$watchEvent[vmKey.trim()]) {
            //将订阅者收集起来
            this.$watchEvent[vmKey.trim()].push(watcher)
          } else {
            this.$watchEvent[vmKey.trim()] = []
            this.$watchEvent[vmKey.trim()].push(watcher)
          }
          // 替换文本内容
          return this.$data[vmKey.trim()]
        })
      }
    })
  }
}

//视图更新类
class Watcher {
  constructor(vm, key, node, attr) {
    this.vm = vm
    this.key = key
    this.node = node
    this.attr = attr
  }
  update() {
    // item.textContent = this.$data[vmKey.trim()]
    this.node[this.attr] = this.vm[this.key]
  }
}
