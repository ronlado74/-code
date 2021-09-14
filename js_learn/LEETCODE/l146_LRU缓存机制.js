var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let temp = this.map.get(key);
    this.map.delete(key);    // 因为被用过一次，原有位置删除
    this.map.set(key, temp);  // 放入最下面表示最新使用
    return temp;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)){
    this.map.delete(key);
  }

  this.map.set(key,value); // 放到最下面表示最新使用

  if (this.map.size > this.capacity) {
    // 这里有个知识点
    // map的entries方法，还有keys方法(可以看mdn))，会返回一个迭代器
    // 迭代器调用next也是顺序返回，所以返回第一个的值就是最老的，找到并删除即可
    //entries()返回键和值，keys()只返回键
    this.map.delete(this.map.entries().next().value[0]);
    //this.map.delete(this.map.keys().next().value);
  }
};
