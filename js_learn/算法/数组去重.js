let arr1 = [1,1,1,2,2,3,3,3]

/* 方法一，使用Set */
let set = new Set(arr1)
// console.log(set)
let s_arr1 = [...set]
console.log(s_arr1)

/* 方法二，使用两个数组 */
let arr2 = [1,1,1,2,2,3,3,3]
let t_arr2 = []
for(let i = 0; i < arr2.length; i++){
  if(t_arr2.indexOf(arr2[i]) == -1){
    t_arr2.push(arr2[i])
  }
}
console.log(t_arr2)