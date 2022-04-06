s = "abcabcbb";
/* 例如‘pwwkew’
从第0位开始看，p往后找到不重复子串为pw，长度为2
第1位w往后不重复子串只有w，长度为1
第2位w往后不重复子串是wke, 长度为3
第3位k往后不重复子串是kew, 长度为3
第4位e往后不重复子串是ew，长度为2
最后一位w不重复子串是w，长度为1
因此我们得到结果是3 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let arr = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      if (arr.includes(s[j])) {
        break;
      }
      arr.push(s[j]);
    }
    max = Math.max(max, arr.length);
  }
  return max;
};
console.log(lengthOfLongestSubstring(s));