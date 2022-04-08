const nameList1 = [
  { mid: '亚索', side: '中单' },
  { mid: 'zed', side: '中单' },
  { mid: '杰斯', side: '中单' },
]

const nameList2 = [
  { adc: '老鼠', side: '射手' },
  { adc: '卡莎', side: '射手' },
  { adc: 'ez', side: '射手' },
]

// console.log(nameList1.map(item => item.mid))
// console.log(nameList2.map(item => item.adc))

const curring = name => element => {
  return element[name]
}

const name_mid = curring('mid')
const name_adc = curring('adc')
console.log(nameList1.map(name_mid))
console.log(nameList2.map(name_adc))
