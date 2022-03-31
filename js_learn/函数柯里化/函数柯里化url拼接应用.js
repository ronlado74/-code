
//用于保留参数，当一个参数被重复使用，此时可以通过柯里化
//例如网站的url
function urlCurring (protocol) {
  return function (hostName, pathName) {
    return protocol + hostName + pathName
  }
}
let url_https = urlCurring('https://')
console.log(url_https('wang', '.com'))