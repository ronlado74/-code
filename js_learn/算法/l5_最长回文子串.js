var longestPalindrome = function(s) {
  let maxlen = 0
  let maxstart = 0
    for(let i = 0; i < s.length; i++){
      let len = 1
      let left = i - 1
      let right = i + 1
      while(left > 0 && s.charAt(i) == s.charAt(left)){
        len++
        left--
      }
      while(right < s.length && s.charAt(i) == s.charAt(right)){
        len++
        right++
      }
      while(right < s.length && left > 0 && s.charAt(left) == s.charAt(right)){
        len = len + 2
        right++
        left--
      }
      if(len > maxlen){
        maxstart = left
        maxlen = len
      }
    }
    return s.subsru(maxstart + 1, maxlen)
};