let x = 'global'

function innnerF() {
  console.log('innnerF get x: ', x)
  x = 'value in innerF'
}

function wrapF(f) {
  let x = 'valued in wrapF'
  f()
}

console.log('global get x:', x)
wrapF(innnerF)
console.log('global get x:', x)