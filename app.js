let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let cod = document.querySelector('.cod');

let col1 = 
`<div class="container">
      <div class="row">
          <div class="col">
  
          </div>
      </div>
  </div>`;
// console.log(col1)

b1.onclick = function () {
    cod.innerText = col1;
}