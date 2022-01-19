let x = 'global'

function innnerF() {
  console.log('innerF get x-value:', x)
  x = 'value in  innerF'
}

function wrapF() {
  let x = 'value in wrapF'
  innnerF()
}

console.log('global get x:', x)
wrapF()
console.log('global get x:', x)