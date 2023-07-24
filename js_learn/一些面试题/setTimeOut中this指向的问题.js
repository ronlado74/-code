let test = {
  a1: function () {
    setTimeout(function () { console.log(this, '111111') }, 1000)
  },
  a2: function () {
    setTimeout(() => { console.log(this, '111111') }, 1000)
  }
}

test.a1() // Window
test.a2() // test