let arr = [[[1,2],[3,4]],[5,6],[[[7]]],8]
let arr1 = [[[3,2]]]
for(let i = 0; i < arr.length; i++){
  if(arr[i] instanceof Array){
    arr = arr.flat()
  }
}
console.log(arr)