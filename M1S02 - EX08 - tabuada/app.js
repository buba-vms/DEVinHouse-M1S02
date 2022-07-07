const numero = document.querySelector('#numero');

const conferir = document.querySelector('.conferir');

const resposta = document.querySelector('.resposta');

const ul = document.querySelector('.resultado');

function createTabuada(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}

console.log(ul);

conferir.addEventListener('click', function () {
  ul.innerHTML = '';

  num = Number(numero.value);

  for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(num * i);
    ul.appendChild(createTabuada(`${num} x ${i} = ${resultado}`));
  }
});
