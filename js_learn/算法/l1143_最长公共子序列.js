var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length ,
        m = text2.length 
    const arr = new Array(n + 1).fill(0).map(() => Array(m + 1).fill(0))
    for(let i = 1; i <= n; i++){
      let c1 = text1.charAt(i - 1)
      for(let j = 1; j <= m; j++){
        let c2 = text2.charAt(j - 1)
        if(c1 === c2){
          arr[i][j] = arr[i - 1][j - 1] + 1
        }else{
          arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
        }
      }
    }
    return arr[n][m]
};