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