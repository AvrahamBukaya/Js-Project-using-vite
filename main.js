
const btn = document.querySelector('button');
const elm = document.querySelector('.part-three');
const form = document.querySelector('form');



btn.addEventListener('click', () => {

  elm.style = 'display:flex';
})
form.addEventListener('submit', (e) => {

  console.log(e.target);

  form.innerHTML = `<p class="lead">Dear Customer </p>`;

  setTimeout(() => {
    elm.style = 'display:none';
  }, 216000);

});



