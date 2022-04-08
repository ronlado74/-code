//参数复用
//用于保留参数，当一个参数被重复使用，此时可以通过柯里化
//例如网站的url
function urlCurring (protocol) {
  return function (hostName, pathName) {
    return protocol + hostName + pathName
  }
}
let url_https = urlCurring('https://')
console.log(url_https('wang', '.com'))


//使用箭头函数
const urlCurring2 = protocol => (hostName, pathName) => {
  return protocol + hostName + pathName
}
let url_https2 = urlCurring2('https://')
console.log(url_https2('fan', '.com'))