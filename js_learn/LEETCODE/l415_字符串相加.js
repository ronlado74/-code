let num1 = "99999999999999999";
let num2 = "99999999999999999";
var addStrings = function (num1, num2) {
  add = "0";
  if (num1.length >= num2.length) {
    num2 = add.repeat(num1.length - num2.length) + num2;
  } else {
    num1 = add.repeat(num2.length - num1.length) + num1;
  }

  let right = num1.length - 1;
  let stack = [];
  let s = [0];
  let i = 0;

  while (right >= 0) {
    str = Number(num1[right]) + Number(num2[right]);
    a = str % 10;
    if (i > 0 && s[i] >= 1) {
      s.push(parseInt((str + s[i]) / 10));
    } else {
      s.push(parseInt(str / 10));
    }
    let sum = parseInt(a + s[i]);
    if (sum >= 10) {
      sum = sum % 10;
      s.push(1);
      i++;
    }
    stack.unshift(sum);
    right--;
    i++;

    if (right == -1 && s[i] >= 1) {
      stack.unshift(s[i]);
    }
  }
  return stack.join("");
};

//简单写
var addStrings = function (num1, num2) {
  res = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1[i] - "0" : 0;
    let n2 = j >= 0 ? num2[j] - "0" : 0;
    tmp = n1 + n2 + carry;
    carry = parseInt(tmp / 10);
    res = (tmp % 10) + res;
    i--;
    j--;
  }
  if (carry == 1) {
    res = "1" + res;
  }
  return res;
};
