let test = {
  a: function () {
    setTimeout(function () { console.log(this, '111111') }, 1000)
  }
}