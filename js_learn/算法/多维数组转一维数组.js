let arr = [[[1,2],[3,4]],[5,6],[[[7]]],8]
let arr1 = [1, [2, 3, 4], 5]
for(let i = 0; i < arr.length; i++){
  if(arr[i] instanceof Array){
    arr = arr.flat()
  }
}
console.log(arr)

const arr5 = [1, 2];
const arr6 = [...arr1];