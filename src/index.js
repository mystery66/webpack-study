// commonJs
// const Header = require('./header.js');
// ES Module
// import Header from './header.js';
import image from './img.jpg';
// console.log(image);
let ele = document.getElementById('root');
let img = new Image();
img.src = image;
ele.append(img);
// new Header();