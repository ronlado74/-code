const getString = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello promise')
    }, 2000)
  })
}

export const hello = async () => {
  const str = await getString()
  console.log('hello world')
  console.log(str)
}