const resolve = msg => console.log(msg)
const reject = msg => console.log(msg)

const promise1 = (wait, resolve, reject) => {
  setTimeout(() => {
    if(true){
      resolve('sucess')
    }else{
      reject('fail')
    }
  },wait)
}
promise1(3000,resolve,reject)


async function f3(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve('abd')}, 2000)
  })
}

function f4(){
  return 'f4'
}
async function f5(){
  let c = await f4()
  console.log('qqq')
  console.log(c)
}

Promise.prototype.some = function(args,k){
	let len = 0
	let arr = []
	for(let i = 0; i < args.length; i++){
		arg[i].then(function(resolve){
			len++
			if(len < k){
				arr.push(resolve)
			}
		}).catch(function(reject){
			len++
			if(len < k){
				arr.push(reject)
			}
		})
	}
}


