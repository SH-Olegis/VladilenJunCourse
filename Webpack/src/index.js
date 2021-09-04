import "./index.css";
import img from "../assets/banner-bg_mobile.jpg"

const title = document.createElement('h1')
title.textContent = 'I love JavaScript'
const IMAGE = document.createElement('img')
IMAGE.src = img
document.body.append(IMAGE)
document.body.append(title)

console.log('Hello')