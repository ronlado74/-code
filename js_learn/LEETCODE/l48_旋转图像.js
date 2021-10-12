matrix = [[1,2,3],[4,5,6],[7,8,9]]
/* 方法一 */
var rotate = function(matrix) {
  let temp = new Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(0))
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      temp[i][j] = matrix[i][j]
    }
  }

  let l = matrix[0].length - 1
  for(let i = 0; i < temp.length; i++){
    let p = 0
    for(let j = 0; j < temp[0].length; j++){
      matrix[p][l - i] = temp[i][j]
      p++
    }
  }
  return matrix
};

/* 方法二 */
var rotate = function(matrix) {
  let l = matrix[0].length - 1
  for(let i = 0; i < matrix.length; i++){
    let p = 0
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j][0]){
        matrix[p][l - i] = (matrix[p][l - i] + ',' + matrix[i][j][0]).split(',') 
      }else{
        matrix[p][l - i] = (matrix[p][l - i] + ',' + matrix[i][j]).split(',')
      }
      p++
    }
  }
  for(let i = 0; i < matrix[0].length; i++){
    for(let j = 0; j < matrix.length; j++){
      matrix[i][j].shift()
      matrix[i][j] = parseInt(matrix[i][j][0])
    }
  }
  console.log(matrix)
};