s = "  Bob    Loves  Alice   "
var reverseWords = function(s) {
  s = s.trim()  //去除字符串两端的空格
  let arr = s.split(' ')
  let r_arr = arr.filter(item => item.trim())  //去除数组中的空格
  let left = 0
  let right = r_arr.length - 1
  while(left < right){
    let temp = r_arr[left]
    r_arr[left] = r_arr[right]
    r_arr[right] = temp
    left++
    right--
  }
  console.log(r_arr.join(','))
};
console.log(reverseWords(s))

