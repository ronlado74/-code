nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
//将数组中重复元素去掉
let setNums = new Set(nums);
//将Set转化为数组
[...setNums] 
Array.from(Set)