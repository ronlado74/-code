function paddingNum (num) {
	var str = num.toString();// 将数值转换成字符串
	if ( str.length <= 3 ) return str;		// 如果小于三位数就直接放回字符串
	var integer = [];		// 用于存放整数数组
	var floater = [];		// 用于存放小数数组
	// 判断字符串是整数还是小数
	if (!str.includes('.')) {
		integer = str.split('');        
	} else {
		// 传入的有小数
		var ary = str.split('.');	// 将字符串以.形式分割成左右数组
		integer = ary[0].split('');	// 整数
		floater = ary[1];	// 小数
	}
	let count = 0;	// 循环次数
	integer.length % 3 === 0 ? count = integer.length / 3 - 1 : count = Math.floor(integer.length / 3);
	// 开始循环
	for (var i=0;i<count;i++) {
		integer.splice(integer.length-(i+1)*3-i,0,',');        
	}
	var finalStr = '';	// 最终结果
	// 判断小数数组中是否存在数据，如果有数据则拼接小数，如果没有就返回整数数组
	floater.length == 0 ? finalStr = integer.join('') : finalStr = integer.join('') +'.'+floater;
	return finalStr;    
}

console.log(paddingNum(1561323213213))