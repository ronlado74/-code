import { hello } from "./hello";
import pngsrc from './assets/pngImg.png'
import logosvg from './assets/WiFi.svg'

import expTxt from './assets/exp.txt'

import './style.css'

hello()

const img = document.createElement('img')
console.log(pngsrc)
img.src = pngsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
console.log(logosvg)
img2.src = logosvg
document.body.appendChild(img2)

const blockTxt = document.createElement('div')
blockTxt.style.cssText = 'width: 200px; height: 200px; background: red'
blockTxt.classList.add('block-bg')
blockTxt.textContent = expTxt
document.body.appendChild(blockTxt)

document.body.classList.add('hello')


//懒加载,预加载
//webpackPrefetch: true 在网络空闲的时候去预加载资源  webpackPreload: true 和懒加载类似
const button = document.createElement('button')
button.textContent = '点击执行加法'
button.addEventListener('click', () => {
  import(/* webpackChunkName: 'math', webpackPrefetch: true */'./math.js').then(({ add }) => {
    console.log(add(1, 2))
  })
})
document.body.appendChild(button)