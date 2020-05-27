// function Content() {
//   let ele = document.getElementById('root');
//   let header = document.createElement('div');
//   header.innerText = 'Header';
//   ele.appendChild(header);
// }

// module.exports = Content;

export default class Header {
  constructor() {
    this.append();
  };
  append() {
    let ele = document.getElementById('root');
    let header = document.createElement('div');
    header.innerText = 'Header';
    ele.appendChild(header);
  }
  
}