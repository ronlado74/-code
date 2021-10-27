let arr = [[[1,2],[3,4]],[5,6],[[[7]]],8]
//方法一
let r_arr = arr.flat(Infinity)

//方法二
let ary = [1, [2, [3, [4, 5]]], 6];
let str =  ary.join(',');
console.log(str.split(',').map(Number))

//方法三
let arr3 = [1, [2, [3, [4, 5]]], 6]
while (arr3.some(Array.isArray)) {
  arr3 = [].concat(...arr3);
}
console.log(arr3)

//方法四
const arr4 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5];
// 通过concat方法加递归方法实现
function myflat(arr){
    let res = []; // 存放扁平化数组
    arr.forEach(item =>{ // 遍历存入数组
        if(Array.isArray(item)){ // 判断当前元素是否为数组
            // callee 属性是 arguments 对象的一个成员，它表示对函数对象本身的引用
            res = res.concat(arguments.callee(item)); // 递归调用
        }else{
            res.push(item);
        }
    });
    return res;
}

console.log(myflat(arr4))


