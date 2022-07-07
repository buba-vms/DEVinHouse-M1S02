const parOuImpar = document.querySelector('#parouimpar');
console.log(parOuImpar.value);

const conferir = document.querySelector('.conferir');

const resposta = document.querySelector('.resposta');

function createH3(analisado) {
  resposta.innerHTML = `<h3>${analisado}</h3>`;
}

conferir.addEventListener('click', function () {
  let analise = Number(parOuImpar.value);
  if (analise % 2 === 0) {
    createH3('par');
    console.log('par');
  } else {
    createH3('impar');
    console.log('impar');
  }
});
