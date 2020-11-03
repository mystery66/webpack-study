// commonJs
// const Header = require('./header.js');
// ES Module
// import Header from './header.js';
import image from './img.jpg';
import './index.scss'
// console.log(image);
let ele = document.getElementById('root');
let img = new Image();
img.classList.add("avatar")
img.src = image;
ele.append(img);
// new Header();
console.log(1232, 26757);